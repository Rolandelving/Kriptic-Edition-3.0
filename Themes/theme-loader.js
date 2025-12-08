// ===== DYNAMIC THEME LOADER SYSTEM =====
class ThemeLoader {
    constructor() {
        this.loadedThemes = new Map(); // Cache loaded themes
        this.currentTheme = null;
        this.themeBasePath = 'themes/'; // Adjust if needed
    }

    /**
     * Load and execute a theme
     * @param {string} themeName - Name of theme (e.g., 'stars', 'rain')
     */
    async loadTheme(themeName) {
        try {
            console.log(`🎨 Loading theme: ${themeName}`);

            // Check if theme already loaded (cache)
            if (this.loadedThemes.has(themeName)) {
                console.log(`✅ Using cached theme: ${themeName}`);
                this.executeTheme(themeName);
                return;
            }

            // Show loading indicator
            this.showLoadingIndicator();

            // Load theme file dynamically
            const themeModule = await import(`./${this.themeBasePath}${themeName}.js`);
            
            // Cache the loaded theme
            this.loadedThemes.set(themeName, themeModule);
            
            console.log(`✅ Theme loaded: ${themeName}`);
            
            // Execute theme
            this.executeTheme(themeName);
            
            // Hide loading indicator
            this.hideLoadingIndicator();

        } catch (error) {
            console.error(`❌ Failed to load theme "${themeName}":`, error);
            this.showError(`Failed to load theme: ${themeName}`);
            
            // Fallback to stars theme
            if (themeName !== 'stars') {
                console.log('🔄 Falling back to stars theme...');
                this.loadTheme('stars');
            }
        }
    }

    /**
     * Execute cached theme
     */
    executeTheme(themeName) {
        const themeModule = this.loadedThemes.get(themeName);
        if (themeModule && themeModule.create) {
            // Clean up previous theme
            this.cleanup();
            
            // Execute new theme
            themeModule.create();
            this.currentTheme = themeName;
            
            // Save preference
            localStorage.setItem('kripticBackground', themeName);
        }
    }

    /**
     * Clean up current theme
     */
    cleanup() {
        const starfield = document.getElementById('starfield');
        if (starfield) {
            starfield.innerHTML = '';
            starfield.style.background = '';
        }
        
        // Remove any theme-specific style tags
        document.querySelectorAll('style[data-theme]').forEach(style => style.remove());
    }

    /**
     * Preload themes for better performance
     */
    async preloadThemes(themeNames) {
        console.log('⚡ Preloading themes:', themeNames);
        const promises = themeNames.map(theme => this.loadTheme(theme));
        await Promise.all(promises);
        console.log('✅ Themes preloaded');
    }

    /**
     * Show loading indicator
     */
    showLoadingIndicator() {
        const indicator = document.createElement('div');
        indicator.id = 'themeLoadingIndicator';
        indicator.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: rgba(0, 0, 0, 0.9);
            padding: 1.5rem 2.5rem;
            border-radius: 15px;
            border: 2px solid var(--primary);
            color: white;
            font-size: 1.1rem;
            z-index: 100000;
            backdrop-filter: blur(10px);
        `;
        indicator.innerHTML = '🎨 Loading theme...';
        document.body.appendChild(indicator);
    }

    /**
     * Hide loading indicator
     */
    hideLoadingIndicator() {
        const indicator = document.getElementById('themeLoadingIndicator');
        if (indicator) indicator.remove();
    }

    /**
     * Show error message
     */
    showError(message) {
        this.hideLoadingIndicator();
        alert(`❌ ${message}`);
    }
}

// Create global instance
window.themeLoader = new ThemeLoader();