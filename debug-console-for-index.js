// ╔═══════════════════════════════════════════════════════════════════════╗
// ║              🔥 DEBUG CONSOLE MODULE FOR INDEX.HTML                   ║
// ║  Advanced console interception and JavaScript execution system        ║
// ╚═══════════════════════════════════════════════════════════════════════╝

console.log('🔥 Debug Console Module Loading...');

// ===== GLOBAL STATE =====
const DebugConsole = {
    commandHistory: [],
    historyIndex: -1,
    originalConsole: {},
    isInitialized: false
};

// ===== REMOVE ALL PROTECTIONS =====
function removeAllProtections() {
    console.log('🔓 Removing all browser protections...');
    
    // Re-enable right-click
    document.removeEventListener('contextmenu', window.__preventContextMenu);
    document.addEventListener('contextmenu', function(e) {
        e.stopImmediatePropagation();
    }, true);
    
    // Re-enable keyboard shortcuts
    document.removeEventListener('keydown', window.__preventKeyboard);
    
    // Re-enable text selection
    document.removeEventListener('selectstart', window.__preventSelect);
    document.body.style.userSelect = 'text';
    document.body.style.webkitUserSelect = 'text';
    
    // Re-enable copy
    document.removeEventListener('copy', window.__preventCopy);
    
    console.log('✅ All protections removed!');
    console.log('✅ Right-click enabled');
    console.log('✅ F12 / DevTools shortcuts enabled');
    console.log('✅ Text selection enabled');
    console.log('✅ Copy/paste enabled');
}

// ===== CONSOLE INTERCEPTION =====
function initConsoleInterception() {
    if (DebugConsole.isInitialized) {
        console.log('⚠️ Console interception already initialized');
        return;
    }
    
    console.log('🎯 Initializing console interception...');
    
    // Save original console methods
    DebugConsole.originalConsole = {
        log: console.log.bind(console),
        warn: console.warn.bind(console),
        error: console.error.bind(console),
        info: console.info.bind(console),
        debug: console.debug.bind(console)
    };
    
    // Intercept console.log
    console.log = function(...args) {
        DebugConsole.originalConsole.log(...args);
        appendToVisualConsole('log', args);
    };
    
    // Intercept console.warn
    console.warn = function(...args) {
        DebugConsole.originalConsole.warn(...args);
        appendToVisualConsole('warn', args);
    };
    
    // Intercept console.error
    console.error = function(...args) {
        DebugConsole.originalConsole.error(...args);
        appendToVisualConsole('error', args);
    };
    
    // Intercept console.info
    console.info = function(...args) {
        DebugConsole.originalConsole.info(...args);
        appendToVisualConsole('info', args);
    };
    
    DebugConsole.isInitialized = true;
    console.log('✅ Console interception active!');
}

// ===== VISUAL CONSOLE OUTPUT =====
function appendToVisualConsole(type, args) {
    const output = document.getElementById('consoleOutput');
    if (!output) return;
    
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
    
    const entry = document.createElement('div');
    entry.className = `console-entry console-${type}`;
    
    const timestamp = new Date().toLocaleTimeString();
    entry.innerHTML = `
        <span class="console-timestamp">[${timestamp}]</span>
        <span class="console-type">[${type.toUpperCase()}]</span>
        <span class="console-message">${escapeHtml(message)}</span>
    `;
    
    output.appendChild(entry);
    output.scrollTop = output.scrollHeight;
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// ===== COMMAND EXECUTION =====
function executeCommand(command) {
    if (!command.trim()) return;
    
    console.log(`> ${command}`);
    
    // Add to history
    DebugConsole.commandHistory.push(command);
    if (DebugConsole.commandHistory.length > 50) {
        DebugConsole.commandHistory.shift();
    }
    DebugConsole.historyIndex = DebugConsole.commandHistory.length;
    
    try {
        // Execute the command
        const result = eval(command);
        
        if (result !== undefined) {
            console.log('↳', result);
        }
    } catch (error) {
        console.error('Command error:', error.message);
    }
    
    // Clear input
    const input = document.getElementById('consoleInput');
    if (input) input.value = '';
}

// ===== COMMAND HISTORY NAVIGATION =====
function navigateHistory(direction) {
    const input = document.getElementById('consoleInput');
    if (!input) return;
    
    if (direction === 'up') {
        if (DebugConsole.historyIndex > 0) {
            DebugConsole.historyIndex--;
            input.value = DebugConsole.commandHistory[DebugConsole.historyIndex];
        }
    } else if (direction === 'down') {
        if (DebugConsole.historyIndex < DebugConsole.commandHistory.length - 1) {
            DebugConsole.historyIndex++;
            input.value = DebugConsole.commandHistory[DebugConsole.historyIndex];
        } else {
            DebugConsole.historyIndex = DebugConsole.commandHistory.length;
            input.value = '';
        }
    }
}

// ===== CONSOLE WINDOW CONTROLS =====
function toggleConsoleWindow() {
    const consoleWindow = document.getElementById('debugConsoleWindow');
    if (!consoleWindow) return;
    
    if (consoleWindow.style.display === 'none') {
        consoleWindow.style.display = 'flex';
    } else {
        consoleWindow.style.display = 'none';
    }
}

function minimizeConsoleWindow() {
    const consoleWindow = document.getElementById('debugConsoleWindow');
    const consoleBody = document.querySelector('.console-body');
    const minimizeBtn = document.querySelector('.console-minimize');
    
    if (!consoleWindow || !consoleBody || !minimizeBtn) return;
    
    if (consoleBody.style.display === 'none') {
        consoleBody.style.display = 'flex';
        minimizeBtn.textContent = '−';
        consoleWindow.style.height = '500px';
    } else {
        consoleBody.style.display = 'none';
        minimizeBtn.textContent = '+';
        consoleWindow.style.height = 'auto';
    }
}

function clearConsoleOutput() {
    const output = document.getElementById('consoleOutput');
    if (output) {
        output.innerHTML = '';
        console.log('🗑️ Console cleared');
    }
}

function insertExampleCommand(command) {
    const input = document.getElementById('consoleInput');
    if (input) {
        input.value = command;
        input.focus();
    }
}

// ===== DRAGGABLE CONSOLE WINDOW =====
function initDraggableConsole() {
    const consoleWindow = document.getElementById('debugConsoleWindow');
    const consoleHeader = document.querySelector('.console-header');
    
    if (!consoleWindow || !consoleHeader) return;
    
    let isDragging = false;
    let currentX;
    let currentY;
    let initialX;
    let initialY;
    let xOffset = 0;
    let yOffset = 0;
    
    consoleHeader.addEventListener('mousedown', dragStart);
    document.addEventListener('mousemove', drag);
    document.addEventListener('mouseup', dragEnd);
    
    function dragStart(e) {
        if (e.target.classList.contains('console-btn')) return;
        
        initialX = e.clientX - xOffset;
        initialY = e.clientY - yOffset;
        
        if (e.target === consoleHeader || e.target.classList.contains('console-title')) {
            isDragging = true;
            consoleWindow.style.cursor = 'grabbing';
        }
    }
    
    function drag(e) {
        if (isDragging) {
            e.preventDefault();
            
            currentX = e.clientX - initialX;
            currentY = e.clientY - initialY;
            
            xOffset = currentX;
            yOffset = currentY;
            
            setTranslate(currentX, currentY, consoleWindow);
        }
    }
    
    function dragEnd(e) {
        initialX = currentX;
        initialY = currentY;
        
        isDragging = false;
        consoleWindow.style.cursor = 'default';
    }
    
    function setTranslate(xPos, yPos, el) {
        el.style.transform = `translate(${xPos}px, ${yPos}px)`;
    }
}

// ===== KEYBOARD SHORTCUTS =====
function initKeyboardShortcuts() {
    const input = document.getElementById('consoleInput');
    if (!input) return;
    
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            executeCommand(input.value);
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            navigateHistory('up');
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            navigateHistory('down');
        }
    });
    
    // Global keyboard shortcut: Ctrl+` to toggle console
    document.addEventListener('keydown', (e) => {
        if (e.ctrlKey && e.key === '`') {
            e.preventDefault();
            toggleConsoleWindow();
        }
    });
}

// ===== INITIALIZE EVERYTHING =====
function initDebugConsole() {
    console.log('🚀 Initializing Debug Console...');
    
    // Remove protections
    removeAllProtections();
    
    // Init console interception
    initConsoleInterception();
    
    // Init draggable
    initDraggableConsole();
    
    // Init keyboard shortcuts
    initKeyboardShortcuts();
    
    // Show console window
    const consoleWindow = document.getElementById('debugConsoleWindow');
    if (consoleWindow) {
        consoleWindow.style.display = 'flex';
    }
    
    console.log('✅ Debug Console Ready!');
    console.log('💡 Tip: Press Ctrl+` to toggle console window');
    console.log('💡 Tip: Use ↑/↓ arrows to navigate command history');
}

// ===== EXPOSE FUNCTIONS GLOBALLY =====
window.executeCommand = executeCommand;
window.toggleConsoleWindow = toggleConsoleWindow;
window.minimizeConsoleWindow = minimizeConsoleWindow;
window.clearConsoleOutput = clearConsoleOutput;
window.insertExampleCommand = insertExampleCommand;
window.initDebugConsole = initDebugConsole;

// ===== AUTO-INITIALIZE =====
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initDebugConsole);
} else {
    initDebugConsole();
}

console.log('✅ Debug Console Module Loaded!');
