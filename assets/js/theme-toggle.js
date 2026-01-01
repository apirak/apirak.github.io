/**
 * Theme Toggle System
 * Detects OS preference and allows manual toggle
 * Supports: light, dark, auto modes
 */

(function() {
  'use strict';

  const THEME_STORAGE_KEY = 'theme-preference';
  const THEMES = {
    LIGHT: 'light',
    DARK: 'dark',
    AUTO: 'auto'
  };

  // Track current mode in memory (not persisted since user wants OS-based)
  let currentMode = THEMES.AUTO;

  // Get system preference
  function getSystemTheme() {
    // Check for dark mode preference
    if (window.matchMedia) {
      const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      console.log('🎨 System theme detected:', isDark ? 'dark' : 'light');
      return isDark ? THEMES.DARK : THEMES.LIGHT;
    }
    // Fallback if matchMedia not supported
    console.log('⚠️  matchMedia not supported, defaulting to light');
    return THEMES.LIGHT;
  }

  // Apply theme to document
  function applyTheme(theme) {
    currentMode = theme; // Store current mode
    const actualTheme = theme === THEMES.AUTO ? getSystemTheme() : theme;
    console.log('🌓 Applying theme:', theme, '→ actual:', actualTheme);
    
    // Apply to both html element and body for better compatibility
    document.documentElement.setAttribute('data-theme', actualTheme);
    document.documentElement.setAttribute('data-bs-theme', actualTheme);
    
    // Also set color-scheme for better OS integration (helps with form controls, scrollbars)
    document.documentElement.style.colorScheme = actualTheme;
    
    // Update Cusdis theme
    updateCusdisTheme(actualTheme);
    
    // Save to localStorage only when user explicitly chooses
    try {
      localStorage.setItem(THEME_STORAGE_KEY, theme);
      console.log('💾 Saved to localStorage:', theme);
    } catch (e) {
      console.warn('⚠️  Could not save to localStorage:', e);
    }
    
    // Update toggle button state
    updateToggleButton(theme);
  }

  // Update Cusdis theme
  function updateCusdisTheme(theme) {
    const cusdisThread = document.querySelector('#cusdis_thread');
    if (cusdisThread) {
      cusdisThread.setAttribute('data-theme', theme);
      console.log('💬 Updated Cusdis data-theme attribute to:', theme);
      
      // Use official Cusdis API to update theme
      if (window.CUSDIS && typeof window.CUSDIS.setTheme === 'function') {
        window.CUSDIS.setTheme(theme);
        console.log('💬 Called CUSDIS.setTheme():', theme);
      }
    }
  }

  // Update toggle button icon and aria-label
  function updateToggleButton(currentMode) {
    const button = document.getElementById('theme-toggle');
    console.log('🔘 Updating button, mode:', currentMode, 'button exists:', !!button);
    if (!button) return;

    const icons = {
      light: 'bi-sun-fill',
      dark: 'bi-moon-stars-fill',
      auto: 'bi-circle-half'
    };

    const labels = {
      light: 'Switch to dark mode',
      dark: 'Switch to auto mode',
      auto: 'Switch to light mode'
    };

    const icon = button.querySelector('i');
    if (icon) {
      // Remove all theme icons
      Object.values(icons).forEach(cls => icon.classList.remove(cls));
      // Add current icon
      icon.classList.add(icons[currentMode]);
      console.log('✅ Icon updated to:', icons[currentMode]);
    }

    button.setAttribute('aria-label', labels[currentMode]);
    button.setAttribute('title', labels[currentMode]);
  }

  // Get next theme in cycle: light → dark → auto → light
  function getNextTheme(currentTheme) {
    const cycle = [THEMES.LIGHT, THEMES.DARK, THEMES.AUTO];
    const currentIndex = cycle.indexOf(currentTheme);
    return cycle[(currentIndex + 1) % cycle.length];
  }

  // Toggle theme
  function toggleTheme() {
    const currentTheme = getCurrentTheme();
    const nextTheme = getNextTheme(currentTheme);
    console.log('🔄 Toggle clicked! Current:', currentTheme, '→ Next:', nextTheme);
    applyTheme(nextTheme);
  }

  // Get current theme (always returns auto since we don't store preference)
  function getCurrentTheme() {
    // Return the mode we're tracking in memory
    console.log('📍 Current mode:', currentMode);
    return currentMode;
  }

  // Initialize theme on page load
  function initTheme() {
    console.log('🚀 Theme system initializing...');
    
    // Try to load from localStorage first
    let savedTheme = null;
    try {
      savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
      console.log('💾 Loaded from localStorage:', savedTheme);
    } catch (e) {
      console.warn('⚠️  Could not read localStorage:', e);
    }
    
    // Use saved theme if available, otherwise default to AUTO (system preference)
    const themeToApply = savedTheme && Object.values(THEMES).includes(savedTheme) 
      ? savedTheme 
      : THEMES.AUTO;
    
    console.log('💡 Using theme:', themeToApply);
    applyTheme(themeToApply);
  }

  // Listen for system theme changes
  function watchSystemTheme() {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    console.log('👀 Watching system theme changes');
    mediaQuery.addEventListener('change', (e) => {
      console.log('🔔 System theme changed to:', e.matches ? 'dark' : 'light');
      // Only auto-update if we're in auto mode
      const currentTheme = getCurrentTheme();
      if (currentTheme === THEMES.AUTO) {
        applyTheme(THEMES.AUTO);
      }
    });
  }

  // Initialize on DOM ready
  if (document.readyState === 'loading') {
    console.log('⏳ Waiting for DOM...');
    document.addEventListener('DOMContentLoaded', function() {
      console.log('✅ DOM ready!');
      initTheme();
      watchSystemTheme();
      
      // Attach toggle handler
      const toggleButton = document.getElementById('theme-toggle');
      if (toggleButton) {
        console.log('🔘 Attaching click handler to toggle button');
        toggleButton.addEventListener('click', toggleTheme);
      } else {
        console.warn('⚠️  Toggle button not found!');
      }
    });
  } else {
    console.log('✅ DOM already ready!');
    initTheme();
    watchSystemTheme();
    
    // Attach toggle handler
    const toggleButton = document.getElementById('theme-toggle');
    if (toggleButton) {
      console.log('🔘 Attaching click handler to toggle button');
      toggleButton.addEventListener('click', toggleTheme);
    } else {
      console.warn('⚠️  Toggle button not found!');
    }
  }

  // Run immediately to prevent flash
  console.log('⚡ Running initial theme setup');
  initTheme();
})();
