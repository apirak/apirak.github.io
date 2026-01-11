// Fortune Easter Egg for Waving Hand Image
// Click or Press & Hold to reveal daily fortune

interface Fortune {
  category: string;
  message: string;
  emojis: string[];
}

const fortunes: Fortune[] = [
  // ภาพรวมวันนี้ ✨🌟💫⭐
  {
    category: "ภาพรวมวันนี้",
    message: "วันนี้มีเรื่องเล็กๆ ทำให้ยิ้มได้ทั้งวัน",
    emojis: ["✨", "🌟", "💫", "⭐"],
  },
  {
    category: "ภาพรวมวันนี้",
    message: "เริ่มเช้าดี มีพลัง ทำอะไรก็ไหลลื่น",
    emojis: ["✨", "🌟", "💫", "⭐"],
  },
  {
    category: "ภาพรวมวันนี้",
    message: "มีโอกาสพบข่าวดีจากคนไกล",
    emojis: ["✨", "🌟", "💫", "⭐"],
  },
  {
    category: "ภาพรวมวันนี้",
    message: "สิ่งที่ค้างคามานานเริ่มคลี่คลาย",
    emojis: ["✨", "🌟", "💫", "⭐"],
  },
  {
    category: "ภาพรวมวันนี้",
    message: "ตั้งใจให้มั่น คุณจะเห็นความเปลี่ยนแปลงเร็วๆ นี้",
    emojis: ["✨", "🌟", "💫", "⭐"],
  },

  // การงาน 💼🚀💡🎯
  {
    category: "การงาน",
    message: "งานวันนี้เดินหน้าเร็ว ถ้ากล้าตัดสินใจ",
    emojis: ["💼", "🚀", "💡", "🎯"],
  },
  {
    category: "การงาน",
    message: "ไอเดียใหม่ได้รับการยอมรับจากทีม",
    emojis: ["💼", "🚀", "💡", "🎯"],
  },
  {
    category: "การงาน",
    message: "ระวังรายละเอียดเล็กๆ จะกลายเป็นจุดผิดพลาด",
    emojis: ["💼", "🚀", "💡", "🎯"],
  },
  {
    category: "การงาน",
    message: "คนเก่งช่วยสนับสนุน ทำให้เรื่องยากง่ายขึ้น",
    emojis: ["💼", "🚀", "💡", "🎯"],
  },
  {
    category: "การงาน",
    message: "ปรับลำดับงานก่อน จะลดความเครียดลงได้มาก",
    emojis: ["💼", "🚀", "💡", "🎯"],
  },

  // การเงิน 💰💸🪙💵
  {
    category: "การเงิน",
    message: "รายรับเล็กๆ น้อยๆ เพิ่มขึ้นแบบไม่คาดคิด",
    emojis: ["💰", "💸", "🪙", "💵"],
  },
  {
    category: "การเงิน",
    message: "มีค่าใช้จ่ายฉับพลัน ควรวางแผนเผื่อไว้",
    emojis: ["💰", "💸", "🪙", "💵"],
  },
  {
    category: "การเงิน",
    message: "ต่อรองเก่ง ได้ส่วนลดดีเกินคาด",
    emojis: ["💰", "💸", "🪙", "💵"],
  },
  {
    category: "การเงิน",
    message: "ของที่เล็งไว้นาน วันนี้ซื้อแล้วคุ้ม",
    emojis: ["💰", "💸", "🪙", "💵"],
  },
  {
    category: "การเงิน",
    message: "เงินที่รออาจล่าช้าอีกนิด แต่ยังมาแน่",
    emojis: ["💰", "💸", "🪙", "💵"],
  },

  // ความรัก 💕❤️💝🌹
  {
    category: "ความรัก",
    message: "คนโสดมีสายทักมาแบบเซอร์ไพรส์",
    emojis: ["💕", "❤️", "💝", "🌹"],
  },
  {
    category: "ความรัก",
    message: "คู่รักได้คุยเรื่องอนาคต ลงตัวมากขึ้น",
    emojis: ["💕", "❤️", "💝", "🌹"],
  },
  {
    category: "ความรัก",
    message: "สื่อสารให้ตรงใจ จะลดเรื่องเข้าใจผิด",
    emojis: ["💕", "❤️", "💝", "🌹"],
  },
  {
    category: "ความรัก",
    message: "ความใส่ใจเล็กๆ สร้างโมเมนต์ใหญ่",
    emojis: ["💕", "❤️", "💝", "🌹"],
  },
  {
    category: "ความรัก",
    message: "รักตัวเองก่อน แล้วรักอื่นจะลงตัว",
    emojis: ["💕", "❤️", "💝", "🌹"],
  },

  // สุขภาพ 💪🏃‍♂️🥗⚡
  {
    category: "สุขภาพ",
    message: "พลังงานดี แต่อย่าลืมดื่มน้ำให้พอ",
    emojis: ["💪", "🏃‍♂️", "🥗", "⚡"],
  },
  {
    category: "สุขภาพ",
    message: "ระวังปวดคอจากจอมือถือ/คอมพ์",
    emojis: ["💪", "🏃‍♂️", "🥗", "⚡"],
  },
  {
    category: "สุขภาพ",
    message: "เพิ่มผักผลไม้ วันนี้ระบบย่อยดี",
    emojis: ["💪", "🏃‍♂️", "🥗", "⚡"],
  },
  {
    category: "สุขภาพ",
    message: "พักสายตา 20-20-20 ลดล้าได้ชัด",
    emojis: ["💪", "🏃‍♂️", "🥗", "⚡"],
  },
  {
    category: "สุขภาพ",
    message: "เดินสั้นๆ ระหว่างวัน ทำให้สดชื่นขึ้น",
    emojis: ["💪", "🏃‍♂️", "🥗", "⚡"],
  },

  // โอกาสและผู้คน 🤝👥🎊🌈
  {
    category: "โอกาสและผู้คน",
    message: "เพื่อนเก่าติดต่อมา พาโอกาสใหม่เข้าหา",
    emojis: ["🤝", "👥", "🎊", "🌈"],
  },
  {
    category: "โอกาสและผู้คน",
    message: "เข้ากลุ่มใหม่ได้คอนเนคชันที่มีค่า",
    emojis: ["🤝", "👥", "🎊", "🌈"],
  },
  {
    category: "โอกาสและผู้คน",
    message: "คำชมเล็กๆ จุดไฟให้ตั้งใจมากขึ้น",
    emojis: ["🤝", "👥", "🎊", "🌈"],
  },
  {
    category: "โอกาสและผู้คน",
    message: "ฟังให้มากก่อนพูด จะได้ข้อมูลสำคัญ",
    emojis: ["🤝", "👥", "🎊", "🌈"],
  },
  {
    category: "โอกาสและผู้คน",
    message: "ช่วยเหลือใครบางคน แล้วเรื่องดีจะย้อนกลับมา",
    emojis: ["🤝", "👥", "🎊", "🌈"],
  },

  // ข้อคิดและการกระทำ 🎯✅📝🔥
  {
    category: "ข้อคิดและการกระทำ",
    message: "เริ่มจากหนึ่งสิ่งเล็กๆ วันนี้จะสำเร็จเร็ว",
    emojis: ["🎯", "✅", "📝", "🔥"],
  },
  {
    category: "ข้อคิดและการกระทำ",
    message: "โฟกัสทีละเรื่อง ประสิทธิภาพพุ่ง",
    emojis: ["🎯", "✅", "📝", "🔥"],
  },
  {
    category: "ข้อคิดและการกระทำ",
    message: "เขียนสิ่งที่กังวล แล้วหาทางแก้ทีละข้อ",
    emojis: ["🎯", "✅", "📝", "🔥"],
  },
  {
    category: "ข้อคิดและการกระทำ",
    message: "ปรับโต๊ะทำงานเล็กน้อย สมาธิดีขึ้น",
    emojis: ["🎯", "✅", "📝", "🔥"],
  },
  {
    category: "ข้อคิดและการกระทำ",
    message: "ขอบคุณตัวเองในสิ่งที่ทำได้ดีแล้ว",
    emojis: ["🎯", "✅", "📝", "🔥"],
  },

  // สัญญาณโชคดี 🍀🎲🎰✨
  {
    category: "สัญญาณโชคดี",
    message: "เลขนำโชค: 3, 7, 13, 21 | สี: น้ำเงินเข้ม, เขียวมินต์",
    emojis: ["🍀", "🎲", "🎰", "✨"],
  },
  {
    category: "สัญญาณโชคดี",
    message: "เวลาเฮง: ช่วงสาย 10:00–11:30 | ของนำโชค: ปากกา",
    emojis: ["🍀", "🎲", "🎰", "✨"],
  },
  {
    category: "สัญญาณโชคดี",
    message: "เลขนำโชค: 5, 9, 17, 28 | สี: แดงอมส้ม, ครีม",
    emojis: ["🍀", "🎲", "🎰", "✨"],
  },
  {
    category: "สัญญาณโชคดี",
    message: "เวลาเฮง: ช่วงบ่าย 14:30–16:00 | เพลงโปรด: อินไซต์มา",
    emojis: ["🍀", "🎲", "🎰", "✨"],
  },
  {
    category: "สัญญาณโชคดี",
    message: "เลขนำโชค: 2, 8, 15, 24 | สี: ม่วงพาสเทล, เทาอมฟ้า",
    emojis: ["🍀", "🎲", "🎰", "✨"],
  },

  // การเรียนรู้/พัฒนา 📚🧠💻🔧
  {
    category: "การเรียนรู้/พัฒนา",
    message: "อ่านบทความสั้นๆ วันนี้ได้อินไซต์ใหม่",
    emojis: ["📚", "🧠", "💻", "🔧"],
  },
  {
    category: "การเรียนรู้/พัฒนา",
    message: "ทดลองเครื่องมือใหม่ ช่วยลดเวลางาน",
    emojis: ["📚", "🧠", "💻", "🔧"],
  },
  {
    category: "การเรียนรู้/พัฒนา",
    message: "ย้อนดูงานเก่า แล้วเห็นทางปรับปรุงชัด",
    emojis: ["📚", "🧠", "💻", "🔧"],
  },
  {
    category: "การเรียนรู้/พัฒนา",
    message: "ขอฟีดแบ็ก 1 คน ทำให้ก้าวหน้าเร็ว",
    emojis: ["📚", "🧠", "💻", "🔧"],
  },
  {
    category: "การเรียนรู้/พัฒนา",
    message: "จด 3 บรรทัดสิ่งที่ได้เรียนรู้ก่อนนอน",
    emojis: ["📚", "🧠", "💻", "🔧"],
  },

  // การเดินทางและไลฟ์สไตล์ 🚗☕🌤️📸
  {
    category: "การเดินทางและไลฟ์สไตล์",
    message: "ทางลัดใหม่ช่วยประหยัดเวลา",
    emojis: ["🚗", "☕", "🌤️", "📸"],
  },
  {
    category: "การเดินทางและไลฟ์สไตล์",
    message: "คาเฟ่ใกล้ๆ มีมุมเงียบเหมาะโฟกัส",
    emojis: ["🚗", "☕", "🌤️", "📸"],
  },
  {
    category: "การเดินทางและไลฟ์สไตล์",
    message: "ลองเมนูใหม่ กลายเป็นของโปรด",
    emojis: ["🚗", "☕", "🌤️", "📸"],
  },
  {
    category: "การเดินทางและไลฟ์สไตล์",
    message: "อากาศเปลี่ยนง่าย พกร่มหรือเสื้อคลุมไว้",
    emojis: ["🚗", "☕", "🌤️", "📸"],
  },
  {
    category: "การเดินทางและไลฟ์สไตล์",
    message: "ถ่ายรูปวันนี้ เก็บโมเมนต์ดีๆ ได้หลายช็อต",
    emojis: ["🚗", "☕", "🌤️", "📸"],
  },
];

class FortuneEasterEgg {
  private handImage: HTMLImageElement | null = null;
  private originalSrc: string = "";
  private fistSrc: string = "/assets/image/emoji_raised_fist.png";
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
    // Find the waving hand image
    this.handImage = document.querySelector(
      '[data-fortune-easter-egg="hand"]'
    ) as HTMLImageElement;

    if (!this.handImage) {
      console.warn("Fortune Easter Egg: Hand image not found");
      return;
    }

    this.originalSrc = this.handImage.src;
    this.setupEventListeners();
    this.addHoverEffect();
  }

  private setupEventListeners(): void {
    if (!this.handImage) return;

    // Mouse events
    this.handImage.addEventListener("mousedown", this.handleMouseDown);
    this.handImage.addEventListener("mouseup", this.handleMouseUp);
    this.handImage.addEventListener("mouseleave", this.handleMouseLeave);

    // Touch events for mobile
    this.handImage.addEventListener("touchstart", this.handleTouchStart, {
      passive: true,
    });
    this.handImage.addEventListener("touchend", this.handleTouchEnd);
    this.handImage.addEventListener("touchcancel", this.handleTouchCancel);
  }

  private addHoverEffect(): void {
    if (!this.handImage) return;

    this.handImage.style.cursor = "pointer";
    this.handImage.style.transition = "all 0.3s ease";

    this.handImage.addEventListener("mouseenter", () => {
      if (this.isInCooldown()) {
        this.handImage!.style.opacity = "0.5";
        return;
      }
      this.handImage!.style.transform = "scale(1.05)";
      this.handImage!.style.filter =
        "drop-shadow(0 0 8px rgba(255, 215, 0, 0.4))";
    });

    this.handImage.addEventListener("mouseleave", () => {
      if (!this.isAnimating && !this.isInCooldown()) {
        this.handImage!.style.transform = "scale(1)";
        this.handImage!.style.filter = "none";
        this.handImage!.style.opacity = "1";
      }
    });
  }

  private handleMouseDown = (e: MouseEvent): void => {
    e.preventDefault();
    if (this.isInCooldown() || this.isAnimating) return;

    this.mouseDownTime = Date.now();
    this.changeFist();
    this.startShakeAnimation();
  };

  private handleMouseUp = (e: MouseEvent): void => {
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

  private handleTouchStart = (e: TouchEvent): void => {
    if (this.isInCooldown() || this.isAnimating) return;

    this.mouseDownTime = Date.now();
    this.changeFist();
    this.startShakeAnimation();
  };

  private handleTouchEnd = (e: TouchEvent): void => {
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
    if (!this.handImage) return;

    this.handImage.src = this.fistSrc;
    this.handImage.style.transform = "scale(0.95)";
  }

  private startShakeAnimation(): void {
    if (!this.handImage) return;

    // Start continuous shake animation
    const shake = () => {
      if (!this.handImage) return;

      this.handImage.animate(
        [
          { transform: "scale(0.95) rotate(0deg)" },
          { transform: "scale(0.95) rotate(-2deg)" },
          { transform: "scale(0.95) rotate(2deg)" },
          { transform: "scale(0.95) rotate(-2deg)" },
          { transform: "scale(0.95) rotate(0deg)" },
        ],
        {
          duration: 400,
          easing: "ease-in-out",
        }
      );
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
    if (!this.handImage) return;

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
      if (this.handImage) {
        this.handImage.style.opacity = "1";
        this.handImage.style.filter = "none";
      }
    }, this.COOLDOWN_MS);
  }

  private resetHand(): void {
    if (!this.handImage) return;

    this.handImage.src = this.originalSrc;
    this.handImage.style.transform = "scale(1)";
  }

  private isInCooldown(): boolean {
    return Date.now() < this.cooldownEndTime;
  }

  private startCooldownVisual(): void {
    if (!this.handImage) return;

    // Visual indicator: slightly transparent during cooldown
    this.handImage.style.opacity = "0.5";
    this.handImage.style.filter = "grayscale(50%)";
  }

  private getRandomFortune(): Fortune {
    return fortunes[Math.floor(Math.random() * fortunes.length)];
  }

  private spawnEmojis(emojis: string[]): void {
    if (!this.handImage) return;

    const rect = this.handImage.getBoundingClientRect();
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

    // Create modal
    const modal = document.createElement("div");
    modal.className = "fortune-modal";
    modal.innerHTML = `
      <div class="fortune-modal-overlay"></div>
      <div class="fortune-modal-content">
        <button class="fortune-modal-close" aria-label="Close">&times;</button>
        <div class="fortune-category">${fortune.category}</div>
        <div class="fortune-message">${fortune.message}</div>
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
