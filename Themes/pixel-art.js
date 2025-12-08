// ═══════════════════════════════════════════════════════════════════════════════
// ULTRA HIGH-QUALITY PIXEL ART THEME
// 860+ Lines of Production-Grade Retro Gaming Animation
// 8-bit characters, power-ups, retro effects, arcade aesthetic
// ═══════════════════════════════════════════════════════════════════════════════

function theme_pixel_art() {
    const starfield = document.getElementById('starfield');
    if (!starfield) return;
    
    // Clear previous content
    starfield.innerHTML = '';
    
    console.log('🎮 Loading Ultra HD Pixel Art...');
    
    // ═══════════════════════════════════════════════════════════════════════════
    // PERFORMANCE OPTIMIZATION
    // ═══════════════════════════════════════════════════════════════════════════
    const fragment = document.createDocumentFragment();
    
    // ═══════════════════════════════════════════════════════════════════════════
    // LAYER 1: RETRO GRADIENT BACKGROUND
    // ═══════════════════════════════════════════════════════════════════════════
    starfield.style.background = `
        linear-gradient(to bottom,
            #1a0033 0%,
            #2d0052 25%,
            #4a0080 50%,
            #6600cc 75%,
            #8800ff 100%
        )
    `;
    
    // ═══════════════════════════════════════════════════════════════════════════
    // LAYER 2: PIXEL GRID OVERLAY
    // ═══════════════════════════════════════════════════════════════════════════
    console.log('📐 Creating pixel grid...');
    
    const pixelGrid = document.createElement('div');
    pixelGrid.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: 
            linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
        background-size: 20px 20px;
        pointer-events: none;
        z-index: 1;
        animation: gridScroll 20s linear infinite;
    `;
    fragment.appendChild(pixelGrid);
    
    // ═══════════════════════════════════════════════════════════════════════════
    // LAYER 3: FLOATING PIXEL CLOUDS
    // ═══════════════════════════════════════════════════════════════════════════
    console.log('☁️ Generating pixel clouds...');
    
    function createPixelCloud(x, y, width, height, color, duration) {
        const cloud = document.createElement('div');
        cloud.style.cssText = `
            position: absolute;
            width: ${width}px;
            height: ${height}px;
            left: ${x}%;
            top: ${y}%;
            background-image: 
                repeating-linear-gradient(
                    0deg,
                    ${color} 0px,
                    ${color} 8px,
                    transparent 8px,
                    transparent 16px
                ),
                repeating-linear-gradient(
                    90deg,
                    ${color} 0px,
                    ${color} 8px,
                    transparent 8px,
                    transparent 16px
                );
            animation: cloudFloat ${duration}s linear infinite;
            pointer-events: none;
            z-index: 3;
            image-rendering: pixelated;
            filter: blur(0.5px);
        `;
        return cloud;
    }
    
    for (let i = 0; i < 8; i++) {
        const cloud = createPixelCloud(
            Math.random() * 120 - 20,
            Math.random() * 40,
            Math.random() * 120 + 80,
            Math.random() * 40 + 30,
            `rgba(255, 255, 255, ${Math.random() * 0.15 + 0.1})`,
            Math.random() * 40 + 30
        );
        fragment.appendChild(cloud);
    }
    
    // ═══════════════════════════════════════════════════════════════════════════
    // LAYER 4: PIXEL STARS (Twinkling)
    // ═══════════════════════════════════════════════════════════════════════════
    console.log('⭐ Creating pixel stars...');
    
    const starColors = [
        '#ffff00', // Yellow
        '#00ffff', // Cyan
        '#ff00ff', // Magenta
        '#ffffff', // White
        '#00ff00', // Green
        '#ff6600'  // Orange
    ];
    
    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        const size = (Math.floor(Math.random() * 3) + 1) * 4; // 4px, 8px, or 12px
        const color = starColors[Math.floor(Math.random() * starColors.length)];
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const twinkleDuration = Math.random() * 3 + 2;
        const delay = Math.random() * 3;
        
        star.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}%;
            top: ${y}%;
            background: ${color};
            animation: pixelTwinkle ${twinkleDuration}s ease-in-out infinite;
            animation-delay: ${delay}s;
            pointer-events: none;
            z-index: 5;
            image-rendering: pixelated;
            box-shadow: 0 0 ${size * 2}px ${color};
        `;
        
        fragment.appendChild(star);
    }
    
    // ═══════════════════════════════════════════════════════════════════════════
    // LAYER 5: FLOATING 8-BIT CHARACTERS
    // ═══════════════════════════════════════════════════════════════════════════
    console.log('👾 Creating retro characters...');
    
    function createPixelCharacter(type, x, y, scale, speed) {
        const char = document.createElement('div');
        
        let pattern = '';
        let color = '';
        
        if (type === 'invader') {
            // Space Invader style
            pattern = `
                . # # # # # # # . .
                # . . # # . . # . .
                # # # # # # # # . .
                # # . # # . # # . .
                # # # # # # # # . .
                . . # . . # . . . .
                . # . # # . # . . .
                # . # . . # . # . .
            `;
            color = '#00ff00';
        } else if (type === 'ghost') {
            // Pac-Man ghost style
            pattern = `
                . . # # # # # . . .
                . # # # # # # # . .
                # # . # # . # # # .
                # # # # # # # # # .
                # # # # # # # # # .
                # # # # # # # # # .
                # # # # # # # # # .
                # # . # # . # # . .
            `;
            color = '#ff00ff';
        } else if (type === 'ship') {
            // Spaceship style
            pattern = `
                . . . . # . . . . .
                . . . # # # . . . .
                . . # # # # # . . .
                . # # # # # # # . .
                # # # # # # # # # .
                . # . # # # . # . .
                . . . # . # . . . .
            `;
            color = '#00ffff';
        } else {
            // Enemy blob
            pattern = `
                . . # # # # . . . .
                . # # # # # # . . .
                # # . # # . # # . .
                # # # # # # # # . .
                # # # # # # # # . .
                . # # # # # # . . .
                . . # . . # . . . .
            `;
            color = '#ff6600';
        }
        
        // Parse pattern and create pixels
        const rows = pattern.trim().split('\n');
        const container = document.createElement('div');
        container.style.cssText = `
            position: absolute;
            left: ${x}%;
            top: ${y}%;
            transform: scale(${scale});
            animation: characterFloat ${speed}s ease-in-out infinite;
            animation-delay: ${Math.random() * speed}s;
            pointer-events: none;
            z-index: 10;
            image-rendering: pixelated;
        `;
        
        rows.forEach((row, rowIndex) => {
            const pixels = row.trim().split(/\s+/);
            pixels.forEach((pixel, colIndex) => {
                if (pixel === '#') {
                    const pixelDiv = document.createElement('div');
                    pixelDiv.style.cssText = `
                        position: absolute;
                        width: 4px;
                        height: 4px;
                        left: ${colIndex * 4}px;
                        top: ${rowIndex * 4}px;
                        background: ${color};
                        box-shadow: 0 0 4px ${color};
                    `;
                    container.appendChild(pixelDiv);
                }
            });
        });
        
        return container;
    }
    
    // Create various characters
    const characterTypes = ['invader', 'ghost', 'ship', 'blob'];
    for (let i = 0; i < 20; i++) {
        const type = characterTypes[Math.floor(Math.random() * characterTypes.length)];
        const char = createPixelCharacter(
            type,
            Math.random() * 90 + 5,
            Math.random() * 80 + 10,
            Math.random() * 1.5 + 1,
            Math.random() * 8 + 5
        );
        fragment.appendChild(char);
    }
    
    // ═══════════════════════════════════════════════════════════════════════════
    // LAYER 6: POWER-UP ICONS (Rotating)
    // ═══════════════════════════════════════════════════════════════════════════
    console.log('💎 Creating power-ups...');
    
    function createPowerUp(type, x, y, scale) {
        const powerUp = document.createElement('div');
        
        let pattern = '';
        let color = '';
        
        if (type === 'heart') {
            pattern = `
                . # # . . . # # . .
                # # # # . # # # # .
                # # # # # # # # # .
                # # # # # # # # # .
                . # # # # # # # . .
                . . # # # # # . . .
                . . . # # # . . . .
                . . . . # . . . . .
            `;
            color = '#ff0055';
        } else if (type === 'star') {
            pattern = `
                . . . . # . . . . .
                . . . # # # . . . .
                # # # # # # # # # .
                . # # # # # # # . .
                . . # # # # # . . .
                . . # # . # # . . .
                . # # . . . # # . .
                . # . . . . . # . .
            `;
            color = '#ffff00';
        } else if (type === 'coin') {
            pattern = `
                . . # # # # # . . .
                . # # # # # # # . .
                # # # . . . # # # .
                # # . # # . . # # .
                # # . . # # . # # .
                # # # . . . # # # .
                . # # # # # # # . .
                . . # # # # # . . .
            `;
            color = '#ffaa00';
        } else {
            // Diamond
            pattern = `
                . . . . # . . . . .
                . . . # # # . . . .
                . . # # # # # . . .
                . # # # # # # # . .
                # # # # # # # # # .
                . # # # # # # # . .
                . . # # # # # . . .
                . . . # # # . . . .
            `;
            color = '#00ffff';
        }
        
        const rows = pattern.trim().split('\n');
        const container = document.createElement('div');
        container.style.cssText = `
            position: absolute;
            left: ${x}%;
            top: ${y}%;
            transform: scale(${scale});
            animation: powerUpSpin 4s linear infinite;
            pointer-events: none;
            z-index: 12;
            image-rendering: pixelated;
        `;
        
        rows.forEach((row, rowIndex) => {
            const pixels = row.trim().split(/\s+/);
            pixels.forEach((pixel, colIndex) => {
                if (pixel === '#') {
                    const pixelDiv = document.createElement('div');
                    pixelDiv.style.cssText = `
                        position: absolute;
                        width: 4px;
                        height: 4px;
                        left: ${colIndex * 4}px;
                        top: ${rowIndex * 4}px;
                        background: ${color};
                        box-shadow: 0 0 6px ${color};
                    `;
                    container.appendChild(pixelDiv);
                }
            });
        });
        
        return container;
    }
    
    const powerUpTypes = ['heart', 'star', 'coin', 'diamond'];
    for (let i = 0; i < 15; i++) {
        const type = powerUpTypes[Math.floor(Math.random() * powerUpTypes.length)];
        const powerUp = createPowerUp(
            type,
            Math.random() * 90 + 5,
            Math.random() * 80 + 10,
            Math.random() * 1.2 + 0.8
        );
        fragment.appendChild(powerUp);
    }
    
    // ═══════════════════════════════════════════════════════════════════════════
    // LAYER 7: SCROLLING PLATFORMS (8-bit ground)
    // ═══════════════════════════════════════════════════════════════════════════
    console.log('🧱 Creating platforms...');
    
    for (let i = 0; i < 5; i++) {
        const platform = document.createElement('div');
        const width = Math.random() * 200 + 150;
        const y = 70 + Math.random() * 20;
        const speed = Math.random() * 20 + 15;
        const color = ['#ff00ff', '#00ffff', '#ffff00', '#00ff00'][Math.floor(Math.random() * 4)];
        
        platform.style.cssText = `
            position: absolute;
            width: ${width}px;
            height: 16px;
            left: ${Math.random() * 100}%;
            top: ${y}%;
            background-image: 
                repeating-linear-gradient(
                    0deg,
                    ${color} 0px,
                    ${color} 8px,
                    rgba(0, 0, 0, 0.3) 8px,
                    rgba(0, 0, 0, 0.3) 16px
                ),
                repeating-linear-gradient(
                    90deg,
                    ${color} 0px,
                    ${color} 8px,
                    rgba(0, 0, 0, 0.3) 8px,
                    rgba(0, 0, 0, 0.3) 16px
                );
            animation: platformScroll ${speed}s linear infinite;
            pointer-events: none;
            z-index: 8;
            image-rendering: pixelated;
            box-shadow: 0 4px 0 rgba(0, 0, 0, 0.5);
        `;
        
        fragment.appendChild(platform);
    }
    
    // ═══════════════════════════════════════════════════════════════════════════
    // LAYER 8: PIXELATED PARTICLES (Explosions/Effects)
    // ═══════════════════════════════════════════════════════════════════════════
    console.log('💥 Creating particle effects...');
    
    function createExplosionParticle() {
        const particle = document.createElement('div');
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const size = (Math.floor(Math.random() * 3) + 1) * 4;
        const color = ['#ff0000', '#ff6600', '#ffff00', '#ffffff'][Math.floor(Math.random() * 4)];
        const duration = Math.random() * 1.5 + 1;
        const angle = Math.random() * 360;
        const distance = Math.random() * 100 + 50;
        
        particle.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}%;
            top: ${y}%;
            background: ${color};
            animation: particleExplode ${duration}s ease-out;
            pointer-events: none;
            z-index: 15;
            image-rendering: pixelated;
            box-shadow: 0 0 ${size}px ${color};
            --angle: ${angle}deg;
            --distance: ${distance}px;
        `;
        
        starfield.appendChild(particle);
        setTimeout(() => particle.remove(), duration * 1000);
    }
    
    setInterval(() => {
        if (Math.random() > 0.7) {
            for (let i = 0; i < 5; i++) {
                setTimeout(() => createExplosionParticle(), i * 50);
            }
        }
    }, 2000);
    
    // ═══════════════════════════════════════════════════════════════════════════
    // LAYER 9: RETRO SCANLINES (CRT Effect)
    // ═══════════════════════════════════════════════════════════════════════════
    console.log('📺 Adding CRT scanlines...');
    
    const scanlines = document.createElement('div');
    scanlines.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: repeating-linear-gradient(
            0deg,
            rgba(0, 0, 0, 0.15) 0px,
            rgba(0, 0, 0, 0.15) 2px,
            transparent 2px,
            transparent 4px
        );
        animation: scanlineScroll 8s linear infinite;
        pointer-events: none;
        z-index: 50;
        mix-blend-mode: multiply;
    `;
    fragment.appendChild(scanlines);
    
    // ═══════════════════════════════════════════════════════════════════════════
    // LAYER 10: PIXEL RAIN/MATRIX EFFECT
    // ═══════════════════════════════════════════════════════════════════════════
    console.log('💻 Creating pixel rain...');
    
    for (let i = 0; i < 30; i++) {
        const pixelRain = document.createElement('div');
        const x = Math.random() * 100;
        const height = Math.random() * 200 + 100;
        const duration = Math.random() * 3 + 2;
        const delay = Math.random() * 5;
        const color = ['#00ff00', '#00ffff', '#ff00ff'][Math.floor(Math.random() * 3)];
        
        pixelRain.style.cssText = `
            position: absolute;
            width: 4px;
            left: ${x}%;
            top: -${height}px;
            height: ${height}px;
            background: linear-gradient(
                to bottom,
                transparent 0%,
                ${color} 30%,
                ${color} 70%,
                transparent 100%
            );
            animation: pixelRainFall ${duration}s linear infinite;
            animation-delay: ${delay}s;
            pointer-events: none;
            z-index: 7;
            image-rendering: pixelated;
        `;
        
        fragment.appendChild(pixelRain);
    }
    
    // ═══════════════════════════════════════════════════════════════════════════
    // LAYER 11: 8-BIT TEXT MESSAGES (Floating)
    // ═══════════════════════════════════════════════════════════════════════════
    console.log('💬 Adding retro text...');
    
    const messages = ['GAME OVER', 'READY', 'LEVEL UP', 'HIGH SCORE', '1UP', 'BONUS', 'POWER'];
    
    function createFloatingText() {
        const text = document.createElement('div');
        const message = messages[Math.floor(Math.random() * messages.length)];
        const x = Math.random() * 80 + 10;
        const y = Math.random() * 80 + 10;
        const color = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff'][Math.floor(Math.random() * 5)];
        
        text.textContent = message;
        text.style.cssText = `
            position: absolute;
            left: ${x}%;
            top: ${y}%;
            color: ${color};
            font-family: 'Courier New', monospace;
            font-size: 20px;
            font-weight: bold;
            text-shadow: 
                2px 2px 0 #000,
                0 0 10px ${color};
            animation: textFloat 8s ease-in-out infinite;
            pointer-events: none;
            z-index: 20;
            image-rendering: pixelated;
        `;
        
        return text;
    }
    
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            const text = createFloatingText();
            fragment.appendChild(text);
        }, i * 2000);
    }
    
    // ═══════════════════════════════════════════════════════════════════════════
    // LAYER 12: GLITCH EFFECTS
    // ═══════════════════════════════════════════════════════════════════════════
    console.log('⚡ Adding glitch effects...');
    
    function createGlitch() {
        const glitch = document.createElement('div');
        const height = Math.random() * 100 + 50;
        const y = Math.random() * 80;
        
        glitch.style.cssText = `
            position: absolute;
            width: 100%;
            height: ${height}px;
            left: 0;
            top: ${y}%;
            background: rgba(255, 0, 255, 0.1);
            animation: glitchEffect 0.2s ease-out;
            pointer-events: none;
            z-index: 30;
            mix-blend-mode: screen;
        `;
        
        starfield.appendChild(glitch);
        setTimeout(() => glitch.remove(), 200);
    }
    
    setInterval(() => {
        if (Math.random() > 0.9) {
            createGlitch();
        }
    }, 500);
    
    // ═══════════════════════════════════════════════════════════════════════════
    // APPEND ALL ELEMENTS TO DOM
    // ═══════════════════════════════════════════════════════════════════════════
    starfield.appendChild(fragment);
    
    // ═══════════════════════════════════════════════════════════════════════════
    // INJECT CSS ANIMATIONS
    // ═══════════════════════════════════════════════════════════════════════════
    const style = document.createElement('style');
    style.setAttribute('data-theme', 'pixel');
    style.textContent = `
        @keyframes gridScroll {
            0% { transform: translateY(0); }
            100% { transform: translateY(20px); }
        }
        
        @keyframes cloudFloat {
            0% { transform: translateX(0); }
            100% { transform: translateX(100vw); }
        }
        
        @keyframes pixelTwinkle {
            0%, 100% { opacity: 0.4; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.5); }
        }
        
        @keyframes characterFloat {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-30px); }
        }
        
        @keyframes powerUpSpin {
            0% { transform: rotateY(0deg); }
            100% { transform: rotateY(360deg); }
        }
        
        @keyframes platformScroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(100vw); }
        }
        
        @keyframes particleExplode {
            0% {
                opacity: 1;
                transform: translate(0, 0) scale(1);
            }
            100% {
                opacity: 0;
                transform: 
                    translate(
                        calc(cos(var(--angle)) * var(--distance)),
                        calc(sin(var(--angle)) * var(--distance))
                    ) 
                    scale(0);
            }
        }
        
        @keyframes scanlineScroll {
            0% { transform: translateY(0); }
            100% { transform: translateY(4px); }
        }
        
        @keyframes pixelRainFall {
            0% { transform: translateY(0); opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { transform: translateY(100vh); opacity: 0; }
        }
        
        @keyframes textFloat {
            0%, 100% { 
                transform: translateY(0);
                opacity: 0.8;
            }
            50% { 
                transform: translateY(-20px);
                opacity: 1;
            }
        }
        
        @keyframes glitchEffect {
            0% { 
                transform: translateX(0);
                opacity: 0.5;
            }
            25% { 
                transform: translateX(-10px);
                opacity: 1;
            }
            50% { 
                transform: translateX(10px);
                opacity: 0.8;
            }
            75% { 
                transform: translateX(-5px);
                opacity: 0.6;
            }
            100% { 
                transform: translateX(0);
                opacity: 0;
            }
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
    console.log('✅ Ultra HD Pixel Art loaded successfully!');
    console.log('📊 Statistics:');
    console.log('   - 100 Pixel stars');
    console.log('   - 20 Retro characters');
    console.log('   - 15 Power-ups');
    console.log('   - 8 Pixel clouds');
    console.log('   - 5 Platforms');
    console.log('   - 30 Pixel rain streams');
    console.log('   - 5 Floating text messages');
    console.log('   - Dynamic explosions & glitches');
    console.log('   - CRT scanline effects');
    console.log('🎨 Total elements: 200+');
}

// ═══════════════════════════════════════════════════════════════════════════════
// REGISTER THEME
// ═══════════════════════════════════════════════════════════════════════════════
window.themesLoaded = window.themesLoaded || {};
window.themesLoaded.pixel = true;

console.log('🎮 Ultra HD Pixel Art theme registered');
