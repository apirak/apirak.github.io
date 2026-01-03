/**
 * Theme Toggle System
 * Detects OS preference and allows manual toggle
 * Supports: light, dark, auto modes
 */

const THEME_STORAGE_KEY = 'theme-preference';
const THEMES = {
  LIGHT: 'light',
  DARK: 'dark',
  AUTO: 'auto'
} as const;

type Theme = typeof THEMES[keyof typeof THEMES];

// Get system preference
function getSystemTheme(): 'light' | 'dark' {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  }
  return 'light';
}

// Apply theme to document
function applyTheme(theme: Theme): void {
  const actualTheme = theme === THEMES.AUTO ? getSystemTheme() : theme;
  
  document.documentElement.setAttribute('data-theme', actualTheme);
  document.documentElement.style.colorScheme = actualTheme;
  
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch (e) {
    console.warn('Could not save to localStorage:', e);
  }
  
  updateToggleButton(theme);
}

// Update toggle button icon
function updateToggleButton(currentMode: Theme): void {
  const button = document.getElementById('theme-toggle');
  if (!button) return;

  const icons = {
    light: '☀️',
    dark: '🌙',
    auto: '◐'
  };

  const labels = {
    light: 'Switch to dark mode',
    dark: 'Switch to auto mode',
    auto: 'Switch to light mode'
  };

  button.textContent = icons[currentMode];
  button.setAttribute('aria-label', labels[currentMode]);
  button.setAttribute('title', labels[currentMode]);
}

// Get next theme in cycle: light → dark → auto → light
function getNextTheme(currentTheme: Theme): Theme {
  const cycle: Theme[] = [THEMES.LIGHT, THEMES.DARK, THEMES.AUTO];
  const currentIndex = cycle.indexOf(currentTheme);
  return cycle[(currentIndex + 1) % cycle.length];
}

// Get current theme
function getCurrentTheme(): Theme {
  try {
    const saved = localStorage.getItem(THEME_STORAGE_KEY);
    if (saved && Object.values(THEMES).includes(saved as Theme)) {
      return saved as Theme;
    }
  } catch (e) {
    // Ignore localStorage errors
  }
  return THEMES.AUTO;
}

// Toggle theme
function toggleTheme(): void {
  const currentTheme = getCurrentTheme();
  const nextTheme = getNextTheme(currentTheme);
  applyTheme(nextTheme);
}

// Initialize on page load
function initTheme(): void {
  const currentTheme = getCurrentTheme();
  applyTheme(currentTheme);
  
  // Listen for system theme changes
  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
      if (getCurrentTheme() === THEMES.AUTO) {
        applyTheme(THEMES.AUTO);
      }
    });
  }
  
  // Add click handler to toggle button
  const toggleButton = document.getElementById('theme-toggle');
  if (toggleButton) {
    toggleButton.addEventListener('click', toggleTheme);
  }
}

// Run on DOMContentLoaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initTheme);
} else {
  initTheme();
}

// Prevent flash of wrong theme
initTheme();
