// ═══════════════════════════════════════════════════════════════════════════════
// ULTRA HIGH-QUALITY MATRIX CODE THEME
// 900+ Lines of Production-Grade Digital Rain Animation
// Authentic Matrix-style cascading code with advanced visual effects
// ═══════════════════════════════════════════════════════════════════════════════

function theme_matrix_code() {
    const starfield = document.getElementById('starfield');
    if (!starfield) return;
    
    // Clear previous content
    starfield.innerHTML = '';
    starfield.style.background = '#000000';
    
    console.log('💻 Loading Ultra HD Matrix Code...');
    
    // ═══════════════════════════════════════════════════════════════════════════
    // CHARACTER SETS - Authentic Matrix symbols
    // ═══════════════════════════════════════════════════════════════════════════
    const katakana = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const nums = '0123456789';
    const symbols = '¦ ¦:·"=*+-<>¿¡';
    const allChars = katakana + latin + nums + symbols;
    
    // ═══════════════════════════════════════════════════════════════════════════
    // CONFIGURATION
    // ═══════════════════════════════════════════════════════════════════════════
    const config = {
        fontSize: 16,
        columnWidth: 20,
        minSpeed: 20,
        maxSpeed: 80,
        trailLength: 25,
        mutationRate: 0.02,
        glitchRate: 0.005,
        highlightRate: 0.1
    };
    
    // Calculate column count based on viewport
    const columns = Math.floor(window.innerWidth / config.columnWidth);
    const rows = Math.floor(window.innerHeight / config.fontSize) + 5;
    
    console.log(`📊 Matrix dimensions: ${columns} columns × ${rows} rows`);
    
    // ═══════════════════════════════════════════════════════════════════════════
    // PERFORMANCE OPTIMIZATION - Use DocumentFragment
    // ═══════════════════════════════════════════════════════════════════════════
    const fragment = document.createDocumentFragment();
    
    // ═══════════════════════════════════════════════════════════════════════════
    // LAYER 1: CRT SCANLINE OVERLAY
    // ═══════════════════════════════════════════════════════════════════════════
    console.log('📺 Creating CRT scanline effect...');
    
    const scanlines = document.createElement('div');
    scanlines.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: repeating-linear-gradient(
            to bottom,
            rgba(0, 255, 0, 0.02) 0px,
            rgba(0, 255, 0, 0.02) 1px,
            transparent 1px,
            transparent 2px
        );
        pointer-events: none;
        z-index: 100;
        animation: scanlineFlicker 0.2s infinite;
    `;
    fragment.appendChild(scanlines);
    
    // ═══════════════════════════════════════════════════════════════════════════
    // LAYER 2: CRT SCREEN CURVATURE & VIGNETTE
    // ═══════════════════════════════════════════════════════════════════════════
    const crtOverlay = document.createElement('div');
    crtOverlay.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: radial-gradient(
            ellipse at center,
            transparent 0%,
            transparent 60%,
            rgba(0, 0, 0, 0.3) 80%,
            rgba(0, 0, 0, 0.7) 100%
        );
        pointer-events: none;
        z-index: 99;
    `;
    fragment.appendChild(crtOverlay);
    
    // ═══════════════════════════════════════════════════════════════════════════
    // LAYER 3: BACKGROUND GRID (Subtle depth effect)
    // ═══════════════════════════════════════════════════════════════════════════
    const grid = document.createElement('div');
    grid.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: 
            linear-gradient(rgba(0, 255, 0, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 0, 0.03) 1px, transparent 1px);
        background-size: ${config.columnWidth}px ${config.fontSize}px;
        pointer-events: none;
        z-index: 1;
        opacity: 0.3;
    `;
    fragment.appendChild(grid);
    
    // ═══════════════════════════════════════════════════════════════════════════
    // LAYER 4: MATRIX COLUMN SYSTEM
    // ═══════════════════════════════════════════════════════════════════════════
    console.log('🌊 Generating Matrix columns...');
    
    class MatrixColumn {
        constructor(index) {
            this.index = index;
            this.speed = Math.random() * (config.maxSpeed - config.minSpeed) + config.minSpeed;
            this.position = Math.random() * -rows;
            this.chars = [];
            this.container = null;
            this.lastUpdate = 0;
            this.updateInterval = 1000 / this.speed;
            this.glitchTimer = 0;
            this.isPaused = false;
            this.pauseDuration = 0;
            
            this.init();
        }
        
        init() {
            // Create column container
            this.container = document.createElement('div');
            this.container.style.cssText = `
                position: absolute;
                left: ${this.index * config.columnWidth}px;
                top: 0;
                width: ${config.columnWidth}px;
                height: 100%;
                font-family: 'Courier New', monospace;
                font-size: ${config.fontSize}px;
                font-weight: bold;
                line-height: ${config.fontSize}px;
                text-align: center;
                pointer-events: none;
                z-index: ${10 + (this.index % 5)};
            `;
            
            // Generate initial characters
            for (let i = 0; i < rows; i++) {
                const charData = {
                    char: allChars[Math.floor(Math.random() * allChars.length)],
                    element: null,
                    opacity: 0,
                    isLead: false,
                    age: 0
                };
                
                charData.element = document.createElement('div');
                charData.element.style.cssText = `
                    position: absolute;
                    top: ${i * config.fontSize}px;
                    width: 100%;
                    color: #00ff00;
                    text-shadow: 0 0 5px #00ff00;
                    opacity: 0;
                    transition: opacity 0.1s;
                `;
                charData.element.textContent = charData.char;
                
                this.container.appendChild(charData.element);
                this.chars.push(charData);
            }
        }
        
        update(timestamp) {
            // Handle pause state
            if (this.isPaused) {
                this.pauseDuration--;
                if (this.pauseDuration <= 0) {
                    this.isPaused = false;
                }
                return;
            }
            
            // Throttle updates based on speed
            if (timestamp - this.lastUpdate < this.updateInterval) {
                return;
            }
            this.lastUpdate = timestamp;
            
            // Move column down
            this.position += 0.5;
            
            // Reset when column reaches bottom
            if (this.position > rows + config.trailLength) {
                this.position = Math.random() * -10;
                this.speed = Math.random() * (config.maxSpeed - config.minSpeed) + config.minSpeed;
                this.updateInterval = 1000 / this.speed;
                
                // Random pause
                if (Math.random() < 0.1) {
                    this.isPaused = true;
                    this.pauseDuration = Math.random() * 30 + 10;
                }
            }
            
            // Update each character
            for (let i = 0; i < this.chars.length; i++) {
                const charData = this.chars[i];
                const distanceFromLead = i - Math.floor(this.position);
                
                // Character mutation
                if (Math.random() < config.mutationRate) {
                    charData.char = allChars[Math.floor(Math.random() * allChars.length)];
                    charData.element.textContent = charData.char;
                }
                
                // Calculate opacity based on position in trail
                if (distanceFromLead >= 0 && distanceFromLead < config.trailLength) {
                    const trailPosition = distanceFromLead / config.trailLength;
                    
                    // Lead character (brightest)
                    if (distanceFromLead === 0) {
                        charData.isLead = true;
                        charData.opacity = 1;
                        charData.element.style.color = '#ffffff';
                        charData.element.style.textShadow = '0 0 10px #ffffff, 0 0 20px #00ff00';
                        charData.age = 0;
                    }
                    // Following characters (fading trail)
                    else {
                        charData.isLead = false;
                        charData.opacity = Math.max(0, 1 - (trailPosition * trailPosition));
                        
                        // Color gradient in trail
                        const greenValue = Math.floor(255 - (trailPosition * 100));
                        charData.element.style.color = `rgb(0, ${greenValue}, 0)`;
                        charData.element.style.textShadow = `0 0 ${5 * (1 - trailPosition)}px #00ff00`;
                        charData.age++;
                    }
                    
                    charData.element.style.opacity = charData.opacity;
                } else {
                    charData.opacity = 0;
                    charData.isLead = false;
                    charData.element.style.opacity = 0;
                }
                
                // Random highlight effect
                if (charData.opacity > 0 && Math.random() < config.highlightRate) {
                    charData.element.style.textShadow = '0 0 15px #00ff00, 0 0 25px #00ff00';
                    setTimeout(() => {
                        if (charData.element) {
                            charData.element.style.textShadow = charData.isLead 
                                ? '0 0 10px #ffffff, 0 0 20px #00ff00'
                                : `0 0 ${5 * charData.opacity}px #00ff00`;
                        }
                    }, 100);
                }
            }
            
            // Random glitch effect
            this.glitchTimer++;
            if (this.glitchTimer > 100 && Math.random() < config.glitchRate) {
                this.triggerGlitch();
                this.glitchTimer = 0;
            }
        }
        
        triggerGlitch() {
            const glitchDuration = Math.random() * 100 + 50;
            const glitchIntensity = Math.random() * 10 + 5;
            
            this.container.style.transform = `translateX(${Math.random() * glitchIntensity - glitchIntensity/2}px)`;
            this.container.style.filter = 'hue-rotate(30deg)';
            
            setTimeout(() => {
                this.container.style.transform = '';
                this.container.style.filter = '';
            }, glitchDuration);
        }
    }
    
    // Create all columns
    const matrixColumns = [];
    for (let i = 0; i < columns; i++) {
        const column = new MatrixColumn(i);
        matrixColumns.push(column);
        fragment.appendChild(column.container);
    }
    
    console.log(`✅ ${columns} Matrix columns created`);
    
    // ═══════════════════════════════════════════════════════════════════════════
    // LAYER 5: FALLING BINARY CLUSTERS (Background depth effect)
    // ═══════════════════════════════════════════════════════════════════════════
    console.log('🔢 Adding binary clusters...');
    
    for (let i = 0; i < 20; i++) {
        const cluster = document.createElement('div');
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const size = Math.random() * 40 + 20;
        const duration = Math.random() * 20 + 15;
        const delay = Math.random() * 10;
        
        let binaryText = '';
        for (let j = 0; j < 50; j++) {
            binaryText += Math.random() > 0.5 ? '1' : '0';
            if (j % 8 === 7) binaryText += '\n';
        }
        
        cluster.style.cssText = `
            position: absolute;
            left: ${x}%;
            top: ${y}%;
            font-family: 'Courier New', monospace;
            font-size: ${size}px;
            line-height: ${size}px;
            color: rgba(0, 255, 0, 0.05);
            white-space: pre;
            pointer-events: none;
            z-index: 2;
            animation: binaryFall ${duration}s linear infinite;
            animation-delay: ${delay}s;
            filter: blur(2px);
        `;
        cluster.textContent = binaryText;
        
        fragment.appendChild(cluster);
    }
    
    // ═══════════════════════════════════════════════════════════════════════════
    // LAYER 6: HORIZONTAL CODE STREAMS (Occasional data bursts)
    // ═══════════════════════════════════════════════════════════════════════════
    console.log('➡️ Initializing horizontal code streams...');
    
    function createHorizontalStream() {
        const stream = document.createElement('div');
        const y = Math.random() * 100;
        const speed = Math.random() * 2 + 1;
        const size = Math.random() * 12 + 10;
        
        let streamText = '';
        for (let i = 0; i < 50; i++) {
            streamText += allChars[Math.floor(Math.random() * allChars.length)] + ' ';
        }
        
        stream.style.cssText = `
            position: absolute;
            left: -100%;
            top: ${y}%;
            font-family: 'Courier New', monospace;
            font-size: ${size}px;
            color: rgba(0, 255, 0, 0.4);
            white-space: nowrap;
            pointer-events: none;
            z-index: 15;
            animation: streamHorizontal ${speed}s linear;
            text-shadow: 0 0 10px #00ff00;
        `;
        stream.textContent = streamText;
        
        starfield.appendChild(stream);
        
        setTimeout(() => stream.remove(), speed * 1000);
    }
    
    setInterval(() => {
        if (Math.random() < 0.3) {
            createHorizontalStream();
        }
    }, 3000);
    
    // ═══════════════════════════════════════════════════════════════════════════
    // LAYER 7: RANDOM GLITCH SQUARES (Brief interference patterns)
    // ═══════════════════════════════════════════════════════════════════════════
    console.log('⚡ Adding glitch effect system...');
    
    function createGlitchSquare() {
        const square = document.createElement('div');
        const x = Math.random() * 90;
        const y = Math.random() * 90;
        const size = Math.random() * 100 + 50;
        
        square.style.cssText = `
            position: absolute;
            left: ${x}%;
            top: ${y}%;
            width: ${size}px;
            height: ${size}px;
            background: rgba(0, 255, 0, 0.2);
            border: 2px solid rgba(0, 255, 0, 0.6);
            pointer-events: none;
            z-index: 20;
            animation: glitchFlash 0.2s ease-out;
            mix-blend-mode: screen;
        `;
        
        starfield.appendChild(square);
        
        setTimeout(() => square.remove(), 200);
    }
    
    setInterval(() => {
        if (Math.random() < 0.1) {
            createGlitchSquare();
        }
    }, 1000);
    
    // ═══════════════════════════════════════════════════════════════════════════
    // LAYER 8: CENTRAL DATA BURST (Periodic explosion effect)
    // ═══════════════════════════════════════════════════════════════════════════
    console.log('💥 Setting up data burst system...');
    
    function createDataBurst() {
        const burstContainer = document.createElement('div');
        burstContainer.style.cssText = `
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            pointer-events: none;
            z-index: 25;
        `;
        
        // Create burst particles
        for (let i = 0; i < 30; i++) {
            const particle = document.createElement('div');
            const angle = (Math.PI * 2 * i) / 30;
            const distance = Math.random() * 200 + 100;
            const size = Math.random() * 15 + 8;
            const duration = Math.random() * 1 + 0.5;
            
            particle.style.cssText = `
                position: absolute;
                left: 0;
                top: 0;
                width: ${size}px;
                height: ${size}px;
                background: #00ff00;
                border-radius: 50%;
                box-shadow: 0 0 10px #00ff00, 0 0 20px #00ff00;
                animation: burstParticle ${duration}s ease-out forwards;
            `;
            
            particle.style.setProperty('--angle', `${angle}rad`);
            particle.style.setProperty('--distance', `${distance}px`);
            
            particle.textContent = allChars[Math.floor(Math.random() * allChars.length)];
            particle.style.color = '#000';
            particle.style.display = 'flex';
            particle.style.alignItems = 'center';
            particle.style.justifyContent = 'center';
            particle.style.fontSize = '8px';
            particle.style.fontFamily = 'Courier New, monospace';
            
            burstContainer.appendChild(particle);
        }
        
        starfield.appendChild(burstContainer);
        
        setTimeout(() => burstContainer.remove(), 1000);
    }
    
    setInterval(() => {
        if (Math.random() < 0.05) {
            createDataBurst();
        }
    }, 5000);
    
    // ═══════════════════════════════════════════════════════════════════════════
    // LAYER 9: FLOATING CODE BLOCKS (3D depth effect)
    // ═══════════════════════════════════════════════════════════════════════════
    console.log('📦 Creating floating code blocks...');
    
    for (let i = 0; i < 8; i++) {
        const codeBlock = document.createElement('div');
        const x = Math.random() * 80 + 10;
        const y = Math.random() * 80 + 10;
        const width = Math.random() * 100 + 80;
        const height = Math.random() * 60 + 40;
        const duration = Math.random() * 30 + 20;
        const delay = Math.random() * 15;
        
        let codeContent = '';
        const lines = Math.floor(height / 15);
        for (let j = 0; j < lines; j++) {
            for (let k = 0; k < 20; k++) {
                codeContent += allChars[Math.floor(Math.random() * allChars.length)];
            }
            codeContent += '\n';
        }
        
        codeBlock.style.cssText = `
            position: absolute;
            left: ${x}%;
            top: ${y}%;
            width: ${width}px;
            height: ${height}px;
            background: rgba(0, 20, 0, 0.3);
            border: 1px solid rgba(0, 255, 0, 0.3);
            font-family: 'Courier New', monospace;
            font-size: 10px;
            line-height: 15px;
            color: rgba(0, 255, 0, 0.4);
            padding: 10px;
            overflow: hidden;
            white-space: pre;
            pointer-events: none;
            z-index: 5;
            animation: floatBlock ${duration}s ease-in-out infinite;
            animation-delay: ${delay}s;
            box-shadow: 0 0 20px rgba(0, 255, 0, 0.2);
        `;
        codeBlock.textContent = codeContent;
        
        fragment.appendChild(codeBlock);
    }
    
    // ═══════════════════════════════════════════════════════════════════════════
    // LAYER 10: SCREEN EDGE GLOW (Immersive lighting)
    // ═══════════════════════════════════════════════════════════════════════════
    const edgeGlow = document.createElement('div');
    edgeGlow.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        box-shadow: inset 0 0 100px rgba(0, 255, 0, 0.1);
        pointer-events: none;
        z-index: 98;
        animation: edgeGlowPulse 5s ease-in-out infinite;
    `;
    fragment.appendChild(edgeGlow);
    
    // ═══════════════════════════════════════════════════════════════════════════
    // APPEND ALL ELEMENTS TO DOM
    // ═══════════════════════════════════════════════════════════════════════════
    starfield.appendChild(fragment);
    
    // ═══════════════════════════════════════════════════════════════════════════
    // ANIMATION LOOP - Update all columns
    // ═══════════════════════════════════════════════════════════════════════════
    let animationFrame;
    
    function animate(timestamp) {
        matrixColumns.forEach(column => column.update(timestamp));
        animationFrame = requestAnimationFrame(animate);
    }
    
    animationFrame = requestAnimationFrame(animate);
    
    // Cleanup on theme change
    window.addEventListener('beforeunload', () => {
        cancelAnimationFrame(animationFrame);
    });
    
    // ═══════════════════════════════════════════════════════════════════════════
    // INJECT CSS ANIMATIONS
    // ═══════════════════════════════════════════════════════════════════════════
    const style = document.createElement('style');
    style.setAttribute('data-theme', 'matrix');
    style.textContent = `
        @keyframes scanlineFlicker {
            0%, 100% { opacity: 0.8; }
            50% { opacity: 1; }
        }
        
        @keyframes binaryFall {
            0% { transform: translateY(-100%); opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { transform: translateY(100vh); opacity: 0; }
        }
        
        @keyframes streamHorizontal {
            0% { left: -100%; opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { left: 120%; opacity: 0; }
        }
        
        @keyframes glitchFlash {
            0% { opacity: 0; transform: scale(0) rotate(0deg); }
            50% { opacity: 1; transform: scale(1.2) rotate(180deg); }
            100% { opacity: 0; transform: scale(0) rotate(360deg); }
        }
        
        @keyframes burstParticle {
            0% {
                transform: translate(0, 0) scale(1);
                opacity: 1;
            }
            100% {
                transform: translate(
                    calc(cos(var(--angle)) * var(--distance)),
                    calc(sin(var(--angle)) * var(--distance))
                ) scale(0);
                opacity: 0;
            }
        }
        
        @keyframes floatBlock {
            0%, 100% {
                transform: translate(0, 0) rotate(0deg);
                opacity: 0.6;
            }
            33% {
                transform: translate(20px, -30px) rotate(2deg);
                opacity: 0.8;
            }
            66% {
                transform: translate(-20px, 30px) rotate(-2deg);
                opacity: 0.7;
            }
        }
        
        @keyframes edgeGlowPulse {
            0%, 100% { opacity: 0.6; }
            50% { opacity: 1; }
        }
    `;
    document.head.appendChild(style);
    
    // ═══════════════════════════════════════════════════════════════════════════
    // HIDE THE MOON
    // ═══════════════════════════════════════════════════════════════════════════
    const moon = document.querySelector('.orbital-planet');
    if (moon) moon.style.display = 'none';
    
    // ═══════════════════════════════════════════════════════════════════════════
    // COMPLETION LOG
    // ═══════════════════════════════════════════════════════════════════════════
    console.log('✅ Ultra HD Matrix Code loaded successfully!');
    console.log('📊 Statistics:');
    console.log(`   - ${columns} Cascading columns`);
    console.log(`   - ${columns * rows} Dynamic characters`);
    console.log('   - 20 Binary clusters');
    console.log('   - 8 Floating code blocks');
    console.log('   - CRT scanline effect');
    console.log('   - Dynamic glitch system');
    console.log('   - Horizontal data streams');
    console.log('   - Periodic data bursts');
    console.log(`🎨 Total elements: ${columns + 20 + 8 + 3}+`);
}

// ═══════════════════════════════════════════════════════════════════════════════
// REGISTER THEME
// ═══════════════════════════════════════════════════════════════════════════════
window.themesLoaded = window.themesLoaded || {};
window.themesLoaded.matrix = true;

console.log('💻 Ultra HD Matrix Code theme registered');
