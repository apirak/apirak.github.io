// Fortune Easter Egg for Waving Hand Image
// Click or Press & Hold to reveal daily fortune

import { fortunes, type Fortune } from "../data/fortunes";

class FortuneEasterEgg {
  private handElement: HTMLImageElement | HTMLSpanElement | null = null;
  private isEmojiMode: boolean = false;
  private originalSrc: string = "";
  private originalEmoji: string = "👋";
  private fistSrc: string = "/assets/image/emoji_raised_fist.png";
  private fistEmoji: string = "✊";
  private isAnimating: boolean = false;
  private cooldownEndTime: number = 0;
  private mouseDownTime: number = 0;
  private shakeInterval: number | null = null;
  private readonly COOLDOWN_MS = 3000; // 3 seconds
  private readonly HOLD_THRESHOLD_MS = 1000; // 1 second
  private readonly QUICK_CLICK_DELAY_MS = 800; // 0.8 seconds

  constructor() {
    this.init();
  }

  private init(): void {
    // Try to find the waving hand emoji (mobile)
    const handEmoji = document.querySelector(
      '[data-fortune-easter-egg="hand-emoji"]'
    ) as HTMLSpanElement;

    // Try to find the waving hand image (desktop)
    const handImage = document.querySelector(
      '[data-fortune-easter-egg="hand"]'
    ) as HTMLImageElement;

    // Check if emoji is visible (for mobile)
    if (handEmoji && window.getComputedStyle(handEmoji).display !== "none") {
      this.handElement = handEmoji;
      this.isEmojiMode = true;
      this.originalEmoji = handEmoji.textContent || "👋";
      console.log("Fortune Easter Egg: Emoji mode initialized");
    } else if (
      handImage &&
      window.getComputedStyle(handImage).display !== "none"
    ) {
      this.handElement = handImage;
      this.isEmojiMode = false;
      this.originalSrc = handImage.src;
      console.log("Fortune Easter Egg: Image mode initialized");
    } else {
      console.warn("Fortune Easter Egg: Hand element not found or hidden");
      return;
    }

    this.setupEventListeners();
    this.addHoverEffect();
  }

  private setupEventListeners(): void {
    if (!this.handElement) return;

    // Mouse events
    this.handElement.addEventListener("mousedown", this.handleMouseDown);
    this.handElement.addEventListener("mouseup", this.handleMouseUp);
    this.handElement.addEventListener("mouseleave", this.handleMouseLeave);

    // Touch events for mobile
    this.handElement.addEventListener("touchstart", this.handleTouchStart, {
      passive: true,
    });
    this.handElement.addEventListener("touchend", this.handleTouchEnd);
    this.handElement.addEventListener("touchcancel", this.handleTouchCancel);
  }

  private addHoverEffect(): void {
    if (!this.handElement) return;

    // Hover effect only for desktop (image mode)
    if (!this.isEmojiMode) {
      this.handElement.style.cursor = "pointer";
      this.handElement.style.transition = "all 0.3s ease";

      this.handElement.addEventListener("mouseenter", () => {
        if (this.isInCooldown()) {
          this.handElement!.style.opacity = "0.5";
          return;
        }
        this.handElement!.style.transform = "scale(1.05)";
        this.handElement!.style.filter =
          "drop-shadow(0 0 8px rgba(255, 215, 0, 0.4))";
      });

      this.handElement.addEventListener("mouseleave", () => {
        if (!this.isAnimating && !this.isInCooldown()) {
          this.handElement!.style.transform = "scale(1)";
          this.handElement!.style.filter = "none";
          this.handElement!.style.opacity = "1";
        }
      });
    }
  }

  private handleMouseDown = (e: Event): void => {
    e.preventDefault();
    if (this.isInCooldown() || this.isAnimating) return;

    this.mouseDownTime = Date.now();
    this.changeFist();
    this.startShakeAnimation();
  };

  private handleMouseUp = (e: Event): void => {
    e.preventDefault();
    if (this.isInCooldown() || this.isAnimating) return;

    this.stopShakeAnimation();
    const holdDuration = Date.now() - this.mouseDownTime;
    this.revealFortune(holdDuration);
  };

  private handleMouseLeave = (): void => {
    // Reset fist if mouse leaves while holding
    if (this.mouseDownTime > 0 && !this.isAnimating) {
      this.stopShakeAnimation();
      this.resetHand();
      this.mouseDownTime = 0;
    }
  };

  private handleTouchStart = (e: Event): void => {
    if (this.isInCooldown() || this.isAnimating) return;

    this.mouseDownTime = Date.now();
    this.changeFist();
    this.startShakeAnimation();
  };

  private handleTouchEnd = (e: Event): void => {
    e.preventDefault();
    if (this.isInCooldown() || this.isAnimating) return;

    this.stopShakeAnimation();
    const holdDuration = Date.now() - this.mouseDownTime;
    this.revealFortune(holdDuration);
  };

  private handleTouchCancel = (): void => {
    // Reset fist if touch is cancelled
    if (this.mouseDownTime > 0 && !this.isAnimating) {
      this.stopShakeAnimation();
      this.resetHand();
      this.mouseDownTime = 0;
    }
  };

  private changeFist(): void {
    if (!this.handElement) return;

    if (this.isEmojiMode) {
      // Change emoji to fist
      (this.handElement as HTMLSpanElement).textContent = this.fistEmoji;
    } else {
      // Change image to fist
      (this.handElement as HTMLImageElement).src = this.fistSrc;
      this.handElement.style.transform = "scale(0.95)";
    }
  }

  private startShakeAnimation(): void {
    if (!this.handElement) return;

    // Start continuous shake animation
    const shake = () => {
      if (!this.handElement) return;

      const transforms = this.isEmojiMode
        ? [
            { transform: "rotate(0deg)" },
            { transform: "rotate(-10deg)" },
            { transform: "rotate(10deg)" },
            { transform: "rotate(-10deg)" },
            { transform: "rotate(0deg)" },
          ]
        : [
            { transform: "scale(0.95) rotate(0deg)" },
            { transform: "scale(0.95) rotate(-2deg)" },
            { transform: "scale(0.95) rotate(2deg)" },
            { transform: "scale(0.95) rotate(-2deg)" },
            { transform: "scale(0.95) rotate(0deg)" },
          ];

      this.handElement.animate(transforms, {
        duration: 400,
        easing: "ease-in-out",
      });
    };

    // Shake immediately
    shake();

    // Continue shaking every 400ms
    this.shakeInterval = window.setInterval(shake, 400);
  }

  private stopShakeAnimation(): void {
    if (this.shakeInterval !== null) {
      clearInterval(this.shakeInterval);
      this.shakeInterval = null;
    }
  }

  private async revealFortune(holdDuration: number): Promise<void> {
    if (!this.handElement) return;

    this.isAnimating = true;
    this.mouseDownTime = 0;

    // If held less than 1 second, add delay
    if (holdDuration < this.HOLD_THRESHOLD_MS) {
      await this.sleep(this.QUICK_CLICK_DELAY_MS);
    }

    // Release hand and show fortune
    this.resetHand();
    const fortune = this.getRandomFortune();
    this.spawnEmojis(fortune.emojis);
    this.showFortuneMessage(fortune);

    // Track event in Google Analytics
    this.trackFortuneEvent(fortune);

    // Set cooldown
    this.cooldownEndTime = Date.now() + this.COOLDOWN_MS;
    this.startCooldownVisual();

    // Reset after cooldown
    setTimeout(() => {
      this.isAnimating = false;
      if (this.handElement) {
        this.handElement.style.opacity = "1";
        this.handElement.style.filter = "none";
      }
    }, this.COOLDOWN_MS);
  }

  private resetHand(): void {
    if (!this.handElement) return;

    if (this.isEmojiMode) {
      // Reset emoji to waving hand
      (this.handElement as HTMLSpanElement).textContent = this.originalEmoji;
      this.handElement.style.transform = "rotate(0deg)";
    } else {
      // Reset image to waving hand
      (this.handElement as HTMLImageElement).src = this.originalSrc;
      this.handElement.style.transform = "scale(1)";
    }
  }

  private isInCooldown(): boolean {
    return Date.now() < this.cooldownEndTime;
  }

  private startCooldownVisual(): void {
    if (!this.handElement) return;

    // Visual indicator: slightly transparent during cooldown
    this.handElement.style.opacity = "0.5";
    if (!this.isEmojiMode) {
      this.handElement.style.filter = "grayscale(50%)";
    }
  }

  private getRandomFortune(): Fortune {
    return fortunes[Math.floor(Math.random() * fortunes.length)];
  }

  private spawnEmojis(emojis: string[]): void {
    if (!this.handElement) return;

    const rect = this.handElement.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Spawn 3-5 random emojis
    const emojiCount = 3 + Math.floor(Math.random() * 3);
    for (let i = 0; i < emojiCount; i++) {
      const emoji = emojis[Math.floor(Math.random() * emojis.length)];
      this.createEmojiElement(emoji, centerX, centerY);
    }
  }

  private createEmojiElement(emoji: string, x: number, y: number): void {
    const emojiEl = document.createElement("div");
    emojiEl.textContent = emoji;
    emojiEl.className = "fortune-emoji";

    // Random direction
    const angle = Math.random() * 360;
    const distance = 100 + Math.random() * 100;
    const endX = x + Math.cos((angle * Math.PI) / 180) * distance;
    const endY = y + Math.sin((angle * Math.PI) / 180) * distance;

    emojiEl.style.cssText = `
      position: fixed;
      left: ${x}px;
      top: ${y}px;
      font-size: 2rem;
      pointer-events: none;
      z-index: 9999;
      transform: translate(-50%, -50%);
    `;

    document.body.appendChild(emojiEl);

    // Animate emoji
    const animation = emojiEl.animate(
      [
        {
          transform: "translate(-50%, -50%) scale(0) rotate(0deg)",
          opacity: 1,
        },
        {
          transform: `translate(${endX - x}px, ${
            endY - y
          }px) scale(1.5) rotate(${Math.random() * 360}deg)`,
          opacity: 0,
        },
      ],
      {
        duration: 1500,
        easing: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      }
    );

    animation.onfinish = () => emojiEl.remove();
  }

  private showFortuneMessage(fortune: Fortune): void {
    // Remove existing modal if any
    const existingModal = document.querySelector(".fortune-modal");
    if (existingModal) {
      existingModal.remove();
    }

    // สุ่มเลขเซียมซี 1-99
    const slipNumber = Math.floor(Math.random() * 99) + 1;

    // Create modal
    const modal = document.createElement("div");
    modal.className = "fortune-modal";
    modal.innerHTML = `
      <div class="fortune-modal-overlay"></div>
      <div class="fortune-modal-content">
        <button class="fortune-modal-close" aria-label="Close">&times;</button>
        <div class="fortune-slip-number">เซียมซีที่ ${slipNumber}</div>
        <div class="fortune-category">
          <span class="fortune-category-en">${fortune.categoryEn}</span>
          <span class="fortune-category-th">${fortune.category}</span>
        </div>
        <div class="fortune-message">
          <div class="fortune-message-th">${fortune.message}</div>
          <div class="fortune-message-en">${fortune.messageEn}</div>
        </div>
        <div class="fortune-emojis">${fortune.emojis.join(" ")}</div>
      </div>
    `;

    document.body.appendChild(modal);

    // Close button handler
    const closeBtn = modal.querySelector(".fortune-modal-close");
    const overlay = modal.querySelector(".fortune-modal-overlay");

    const closeModal = () => {
      modal.classList.add("fortune-modal-closing");
      setTimeout(() => modal.remove(), 300);
    };

    closeBtn?.addEventListener("click", closeModal);
    overlay?.addEventListener("click", closeModal);

    // Animate in
    requestAnimationFrame(() => {
      modal.classList.add("fortune-modal-visible");
    });
  }

  private trackFortuneEvent(fortune: Fortune): void {
    // Google Analytics Event Tracking
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "easter_egg_fortune", {
        event_category: "Easter Egg",
        event_label: fortune.category,
        value: fortune.message,
      });
    }
  }

  private sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}

// Initialize on DOM load
if (typeof window !== "undefined") {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      new FortuneEasterEgg();
    });
  } else {
    new FortuneEasterEgg();
  }
}

export default FortuneEasterEgg;
