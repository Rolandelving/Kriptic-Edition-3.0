/*
╔═══════════════════════════════════════════════════════════════════════════════════╗
║                         🔥 DEBUG CONSOLE SYSTEM v2.0                              ║
║                        Standalone JavaScript Module                                ║
╠═══════════════════════════════════════════════════════════════════════════════════╣
║  A password-protected visual debug console that can be added to any webpage       ║
║  Only loads after authentication - no performance impact for regular users        ║
╚═══════════════════════════════════════════════════════════════════════════════════╝
*/

(function() {
    'use strict';

    // Global state
    window.DebugConsole = {
        authenticated: false,
        commandHistory: [],
        historyIndex: -1,
        originalConsole: {}
    };

    // ===== CONSOLE INTERCEPTION =====
    
    function initConsoleInterception() {
        // Store original console methods
        DebugConsole.originalConsole = {
            log: console.log.bind(console),
            info: console.info.bind(console),
            warn: console.warn.bind(console),
            error: console.error.bind(console),
            clear: console.clear.bind(console)
        };

        // Intercept console methods
        console.log = function(...args) {
            logToVisualConsole('log', ...args);
            DebugConsole.originalConsole.log(...args);
        };

        console.info = function(...args) {
            logToVisualConsole('info', ...args);
            DebugConsole.originalConsole.info(...args);
        };

        console.warn = function(...args) {
            logToVisualConsole('warn', ...args);
            DebugConsole.originalConsole.warn(...args);
        };

        console.error = function(...args) {
            logToVisualConsole('error', ...args);
            DebugConsole.originalConsole.error(...args);
        };

        logToVisualConsole('success', '✅ Console interception active');
    }

    // ===== VISUAL CONSOLE LOGGING =====
    
    function logToVisualConsole(type, ...args) {
        const output = document.getElementById('consoleOutput');
        if (!output) return;

        const timestamp = new Date().toLocaleTimeString();
        const logEntry = document.createElement('div');
        logEntry.className = `console-log ${type}`;

        // Convert arguments to string
        const message = args.map(arg => {
            if (typeof arg === 'object') {
                try {
                    return JSON.stringify(arg, null, 2);
                } catch (e) {
                    return String(arg);
                }
            }
            return String(arg);
        }).join(' ');

        logEntry.innerHTML = `
            <span class="console-timestamp">[${timestamp}]</span>
            ${escapeHtml(message)}
        `;

        output.appendChild(logEntry);
        output.scrollTop = output.scrollHeight;
    }

    // ===== UNLOCK BROWSER FEATURES =====
    
    function unlockBrowserFeatures() {
        // Remove all protection listeners
        document.removeEventListener('contextmenu', window.__preventContextMenu);
        document.removeEventListener('keydown', window.__preventDevToolsShortcuts);
        document.removeEventListener('selectstart', window.__preventSelection);
        document.removeEventListener('copy', window.__preventCopy);

        // Enable text selection
        document.body.style.userSelect = 'auto';
        document.body.style.webkitUserSelect = 'auto';
        document.body.style.MozUserSelect = 'auto';
        document.body.style.msUserSelect = 'auto';

        logToVisualConsole('success', '🔓 Debug Mode Activated');
        logToVisualConsole('success', '✅ Right-click enabled');
        logToVisualConsole('success', '✅ DevTools shortcuts enabled (F12, Ctrl+Shift+I, etc.)');
        logToVisualConsole('success', '✅ Text selection enabled');
        logToVisualConsole('success', '✅ Copy/paste enabled');
        logToVisualConsole('info', '💡 Type commands below or click examples to execute');
    }

    // ===== CONSOLE UI MANAGEMENT =====
    
    function openVisualConsole() {
        const visualConsole = document.getElementById('visualConsole');
        if (visualConsole) {
            visualConsole.classList.add('active');
            
            const statusEl = document.getElementById('consoleStatus');
            if (statusEl) {
                statusEl.textContent = '(Authenticated)';
            }
        }
    }

    function closeVisualConsole() {
        const visualConsole = document.getElementById('visualConsole');
        if (visualConsole) {
            visualConsole.classList.remove('active');
        }
    }

    function toggleConsoleMinimize() {
        const visualConsole = document.getElementById('visualConsole');
        if (visualConsole) {
            visualConsole.classList.toggle('minimized');
        }
    }

    function clearVisualConsole() {
        const output = document.getElementById('consoleOutput');
        if (output) {
            output.innerHTML = `
                <div class="console-log success">
                    <span class="console-timestamp">[${new Date().toLocaleTimeString()}]</span>
                    <strong>🧹 Console Cleared</strong>
                </div>
            `;
        }
    }

    // ===== COMMAND EXECUTION =====
    
    function executeConsoleCommand(command) {
        if (!command.trim()) return;

        // Add to history
        DebugConsole.commandHistory.unshift(command);
        if (DebugConsole.commandHistory.length > 50) {
            DebugConsole.commandHistory.pop();
        }
        DebugConsole.historyIndex = -1;

        // Log the command
        logToVisualConsole('log', '> ' + command);

        try {
            // Execute the command
            const result = eval(command);

            // Log the result
            if (result !== undefined) {
                if (typeof result === 'object') {
                    logToVisualConsole('success', '← ' + JSON.stringify(result, null, 2));
                } else {
                    logToVisualConsole('success', '← ' + result);
                }
            } else {
                logToVisualConsole('info', '← undefined');
            }
        } catch (error) {
            logToVisualConsole('error', '❌ Error: ' + error.message);
            console.error(error);
        }
    }

    // ===== EVENT HANDLERS =====
    
    function setupConsoleEventHandlers() {
        const consoleInput = document.getElementById('consoleInput');
        const consoleClose = document.getElementById('consoleClose');
        const consoleClear = document.getElementById('consoleClear');
        const consoleMinimize = document.getElementById('consoleMinimize');

        // Console input
        if (consoleInput) {
            consoleInput.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    executeConsoleCommand(consoleInput.value);
                    consoleInput.value = '';
                } else if (e.key === 'ArrowUp') {
                    e.preventDefault();
                    if (DebugConsole.historyIndex < DebugConsole.commandHistory.length - 1) {
                        DebugConsole.historyIndex++;
                        consoleInput.value = DebugConsole.commandHistory[DebugConsole.historyIndex];
                    }
                } else if (e.key === 'ArrowDown') {
                    e.preventDefault();
                    if (DebugConsole.historyIndex > 0) {
                        DebugConsole.historyIndex--;
                        consoleInput.value = DebugConsole.commandHistory[DebugConsole.historyIndex];
                    } else if (DebugConsole.historyIndex === 0) {
                        DebugConsole.historyIndex = -1;
                        consoleInput.value = '';
                    }
                }
            });
        }

        // Console controls
        if (consoleClose) {
            consoleClose.addEventListener('click', closeVisualConsole);
        }
        if (consoleClear) {
            consoleClear.addEventListener('click', clearVisualConsole);
        }
        if (consoleMinimize) {
            consoleMinimize.addEventListener('click', toggleConsoleMinimize);
        }

        // Example commands
        document.querySelectorAll('.example-item').forEach(item => {
            item.addEventListener('click', () => {
                const command = item.getAttribute('data-command');
                if (consoleInput) {
                    consoleInput.value = command;
                    consoleInput.focus();
                }
            });
        });

        // Make console draggable
        setupConsoleDragging();
    }

    function setupConsoleDragging() {
        let isDragging = false;
        let currentY = 0;
        let initialY = 0;
        let yOffset = 0;

        const consoleHeader = document.getElementById('consoleHeader');
        const visualConsole = document.getElementById('visualConsole');

        if (!consoleHeader || !visualConsole) return;

        consoleHeader.addEventListener('mousedown', (e) => {
            if (e.target.closest('.console-controls')) return;
            isDragging = true;
            initialY = e.clientY - yOffset;
        });

        document.addEventListener('mousemove', (e) => {
            if (isDragging) {
                e.preventDefault();
                currentY = e.clientY - initialY;
                yOffset = currentY;

                const maxOffset = -window.innerHeight * 0.4;
                const clampedOffset = Math.max(maxOffset, Math.min(0, currentY));

                visualConsole.style.transform = `translateY(${clampedOffset}px)`;
            }
        });

        document.addEventListener('mouseup', () => {
            isDragging = false;
        });
    }

    // ===== UTILITY FUNCTIONS =====
    
    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    // ===== PUBLIC INITIALIZATION =====
    
    window.DebugConsole.init = function() {
        console.log('🔥 Debug Console Module Loaded');
        
        DebugConsole.authenticated = true;
        sessionStorage.setItem('debugAuthenticated', 'true');

        // Initialize console interception
        initConsoleInterception();

        // Unlock browser features
        unlockBrowserFeatures();

        // Setup event handlers
        setupConsoleEventHandlers();

        // Open the console
        openVisualConsole();

        // Log success
        logToVisualConsole('success', '🎉 Debug Console Ready!');
        logToVisualConsole('info', '📝 All console output is now mirrored here');
        logToVisualConsole('info', '⌨️ Type JavaScript commands below');
        logToVisualConsole('info', '💡 Use ↑/↓ arrows to navigate command history');
    };

    // ===== EXPOSE FUNCTIONS TO GLOBAL SCOPE =====
    
    window.DebugConsole.log = logToVisualConsole;
    window.DebugConsole.execute = executeConsoleCommand;
    window.DebugConsole.clear = clearVisualConsole;
    window.DebugConsole.close = closeVisualConsole;
    window.DebugConsole.open = openVisualConsole;

    console.log('✅ Debug Console module ready for initialization');
})();
