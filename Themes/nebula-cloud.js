// ═══════════════════════════════════════════════════════════════════════════════
// ULTRA HIGH-QUALITY NEBULA CLOUD THEME
// 900+ Lines of Production-Grade Space Nebula Animation
// Massive particle systems, layered clouds, and cinematic effects
// ═══════════════════════════════════════════════════════════════════════════════

function theme_nebula_cloud() {
    const starfield = document.getElementById('starfield');
    if (!starfield) return;
    
    // Clear previous content
    starfield.innerHTML = '';
    starfield.style.background = '#000000';
    
    console.log('🌌 Loading Ultra HD Nebula Cloud...');
    
    // ═══════════════════════════════════════════════════════════════════════════
    // PERFORMANCE OPTIMIZATION - Use DocumentFragment
    // ═══════════════════════════════════════════════════════════════════════════
    const fragment = document.createDocumentFragment();
    
    // ═══════════════════════════════════════════════════════════════════════════
    // COLOR PALETTES - Multiple nebula types
    // ═══════════════════════════════════════════════════════════════════════════
    const nebulaPalettes = [
        {
            name: 'Orion',
            colors: [
                { r: 100, g: 149, b: 237 },  // Cornflower blue
                { r: 138, g: 43, b: 226 },   // Blue violet
                { r: 75, g: 0, b: 130 }      // Indigo
            ]
        },
        {
            name: 'Helix',
            colors: [
                { r: 255, g: 105, b: 180 },  // Hot pink
                { r: 186, g: 85, b: 211 },   // Medium orchid
                { r: 138, g: 43, b: 226 }    // Blue violet
            ]
        },
        {
            name: 'Eagle',
            colors: [
                { r: 255, g: 20, b: 147 },   // Deep pink
                { r: 255, g: 0, b: 255 },    // Magenta
                { r: 139, g: 0, b: 139 }     // Dark magenta
            ]
        },
        {
            name: 'Carina',
            colors: [
                { r: 0, g: 191, b: 255 },    // Deep sky blue
                { r: 30, g: 144, b: 255 },   // Dodger blue
                { r: 65, g: 105, b: 225 }    // Royal blue
            ]
        },
        {
            name: 'Horsehead',
            colors: [
                { r: 255, g: 140, b: 0 },    // Dark orange
                { r: 255, g: 69, b: 0 },     // Orange red
                { r: 220, g: 20, b: 60 }     // Crimson
            ]
        }
    ];
    
    // ═══════════════════════════════════════════════════════════════════════════
    // LAYER 1: DEEP SPACE BACKGROUND
    // ═══════════════════════════════════════════════════════════════════════════
    starfield.style.background = `
        radial-gradient(ellipse at 30% 40%, rgba(10, 10, 30, 0.8) 0%, transparent 60%),
        radial-gradient(ellipse at 70% 60%, rgba(20, 10, 40, 0.7) 0%, transparent 60%),
        #000000
    `;
    
    // ═══════════════════════════════════════════════════════════════════════════
    // LAYER 2: DISTANT STARS (Background layer)
    // ═══════════════════════════════════════════════════════════════════════════
    console.log('⭐ Generating background star field...');
    
    for (let i = 0; i < 300; i++) {
        const star = document.createElement('div');
        const size = Math.random() * 1.5 + 0.3;
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const opacity = Math.random() * 0.5 + 0.3;
        const twinkleDuration = Math.random() * 5 + 3;
        const twinkleDelay = Math.random() * 5;
        
        const colors = ['#ffffff', '#ffd4a3', '#aabfff'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        star.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}%;
            top: ${y}%;
            background: ${color};
            border-radius: 50%;
            opacity: ${opacity};
            box-shadow: 0 0 ${size * 2}px ${color}80;
            animation: starTwinkle ${twinkleDuration}s ease-in-out infinite;
            animation-delay: ${twinkleDelay}s;
            pointer-events: none;
            z-index: 1;
        `;
        
        fragment.appendChild(star);
    }
    
    // ═══════════════════════════════════════════════════════════════════════════
    // LAYER 3: MASSIVE NEBULA CLOUDS (Core visual layer)
    // ═══════════════════════════════════════════════════════════════════════════
    console.log('☁️ Creating massive nebula clouds...');
    
    const cloudCount = 18;
    for (let i = 0; i < cloudCount; i++) {
        const palette = nebulaPalettes[i % nebulaPalettes.length];
        const colorIndex = Math.floor(Math.random() * palette.colors.length);
        const color = palette.colors[colorIndex];
        
        const cloud = document.createElement('div');
        const size = Math.random() * 500 + 350;
        const x = Math.random() * 120 - 10;
        const y = Math.random() * 120 - 10;
        const rotation = Math.random() * 360;
        const opacity = Math.random() * 0.25 + 0.15;
        const animDuration = Math.random() * 100 + 80;
        const blur = Math.random() * 30 + 50;
        
        // Create gradient with multiple color stops
        const gradient = `radial-gradient(
            ellipse at ${Math.random() * 100}% ${Math.random() * 100}%,
            rgba(${color.r}, ${color.g}, ${color.b}, ${opacity}) 0%,
            rgba(${color.r}, ${color.g}, ${color.b}, ${opacity * 0.7}) 20%,
            rgba(${color.r}, ${color.g}, ${color.b}, ${opacity * 0.4}) 40%,
            rgba(${color.r}, ${color.g}, ${color.b}, ${opacity * 0.2}) 60%,
            transparent 80%
        )`;
        
        cloud.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}%;
            top: ${y}%;
            background: ${gradient};
            border-radius: 50%;
            filter: blur(${blur}px);
            transform: rotate(${rotation}deg) scale(1);
            animation: nebulaSwirl ${animDuration}s ease-in-out infinite;
            animation-delay: ${Math.random() * -50}s;
            pointer-events: none;
            z-index: ${2 + (i % 3)};
            mix-blend-mode: ${i % 2 === 0 ? 'screen' : 'lighten'};
        `;
        
        fragment.appendChild(cloud);
    }
    
    // ═══════════════════════════════════════════════════════════════════════════
    // LAYER 4: NEBULA CORES (Bright glowing centers)
    // ═══════════════════════════════════════════════════════════════════════════
    console.log('💫 Adding nebula cores...');
    
    for (let i = 0; i < 8; i++) {
        const palette = nebulaPalettes[Math.floor(Math.random() * nebulaPalettes.length)];
        const color = palette.colors[Math.floor(Math.random() * palette.colors.length)];
        
        const core = document.createElement('div');
        const size = Math.random() * 200 + 120;
        const x = Math.random() * 80 + 10;
        const y = Math.random() * 80 + 10;
        const pulseDuration = Math.random() * 8 + 6;
        
        core.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}%;
            top: ${y}%;
            transform: translate(-50%, -50%);
            background: radial-gradient(
                circle,
                rgba(255, 255, 255, 0.8) 0%,
                rgba(${color.r}, ${color.g}, ${color.b}, 0.6) 20%,
                rgba(${color.r}, ${color.g}, ${color.b}, 0.3) 50%,
                transparent 80%
            );
            border-radius: 50%;
            filter: blur(25px);
            animation: corePulse ${pulseDuration}s ease-in-out infinite;
            pointer-events: none;
            z-index: 5;
        `;
        
        fragment.appendChild(core);
    }
    
    // ═══════════════════════════════════════════════════════════════════════════
    // LAYER 5: COSMIC DUST PARTICLE SYSTEM (500+ particles)
    // ═══════════════════════════════════════════════════════════════════════════
    console.log('✨ Generating cosmic dust particle system...');
    
    for (let i = 0; i < 500; i++) {
        const particle = document.createElement('div');
        const size = Math.random() * 0.8 + 0.2;
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const opacity = Math.random() * 0.3 + 0.1;
        const duration = Math.random() * 60 + 40;
        const delay = Math.random() * 30;
        
        // Random color tint from nebula palettes
        const palette = nebulaPalettes[Math.floor(Math.random() * nebulaPalettes.length)];
        const color = palette.colors[Math.floor(Math.random() * palette.colors.length)];
        
        particle.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}%;
            top: ${y}%;
            background: rgba(${color.r}, ${color.g}, ${color.b}, ${opacity});
            border-radius: 50%;
            animation: dustDrift ${duration}s linear infinite;
            animation-delay: ${delay}s;
            pointer-events: none;
            z-index: 6;
            filter: blur(0.5px);
        `;
        
        fragment.appendChild(particle);
    }
    
    // ═══════════════════════════════════════════════════════════════════════════
    // LAYER 6: WISPY NEBULA TENDRILS (Thin stretched clouds)
    // ═══════════════════════════════════════════════════════════════════════════
    console.log('🌪️ Creating wispy nebula tendrils...');
    
    for (let i = 0; i < 12; i++) {
        const palette = nebulaPalettes[Math.floor(Math.random() * nebulaPalettes.length)];
        const color = palette.colors[Math.floor(Math.random() * palette.colors.length)];
        
        const tendril = document.createElement('div');
        const width = Math.random() * 600 + 400;
        const height = Math.random() * 150 + 80;
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const rotation = Math.random() * 180;
        const opacity = Math.random() * 0.15 + 0.05;
        const animDuration = Math.random() * 80 + 60;
        
        tendril.style.cssText = `
            position: absolute;
            width: ${width}px;
            height: ${height}px;
            left: ${x}%;
            top: ${y}%;
            background: linear-gradient(
                90deg,
                transparent 0%,
                rgba(${color.r}, ${color.g}, ${color.b}, ${opacity}) 30%,
                rgba(${color.r}, ${color.g}, ${color.b}, ${opacity * 0.6}) 50%,
                rgba(${color.r}, ${color.g}, ${color.b}, ${opacity}) 70%,
                transparent 100%
            );
            border-radius: 50%;
            filter: blur(40px);
            transform: rotate(${rotation}deg);
            animation: tendrilWave ${animDuration}s ease-in-out infinite;
            animation-delay: ${Math.random() * -40}s;
            pointer-events: none;
            z-index: 4;
        `;
        
        fragment.appendChild(tendril);
    }
    
    // ═══════════════════════════════════════════════════════════════════════════
    // LAYER 7: GAS WISPS (Small floating elements)
    // ═══════════════════════════════════════════════════════════════════════════
    console.log('💨 Adding gas wisps...');
    
    for (let i = 0; i < 30; i++) {
        const palette = nebulaPalettes[Math.floor(Math.random() * nebulaPalettes.length)];
        const color = palette.colors[Math.floor(Math.random() * palette.colors.length)];
        
        const wisp = document.createElement('div');
        const size = Math.random() * 80 + 40;
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const opacity = Math.random() * 0.2 + 0.08;
        const duration = Math.random() * 40 + 30;
        
        wisp.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}%;
            top: ${y}%;
            background: radial-gradient(
                circle,
                rgba(${color.r}, ${color.g}, ${color.b}, ${opacity}) 0%,
                transparent 70%
            );
            border-radius: 50%;
            filter: blur(20px);
            animation: wispFloat ${duration}s ease-in-out infinite;
            animation-delay: ${Math.random() * 20}s;
            pointer-events: none;
            z-index: 3;
        `;
        
        fragment.appendChild(wisp);
    }
    
    // ═══════════════════════════════════════════════════════════════════════════
    // LAYER 8: ENERGY RIBBONS (Flowing streams)
    // ═══════════════════════════════════════════════════════════════════════════
    console.log('🌊 Creating energy ribbons...');
    
    for (let i = 0; i < 6; i++) {
        const palette = nebulaPalettes[Math.floor(Math.random() * nebulaPalettes.length)];
        const color = palette.colors[Math.floor(Math.random() * palette.colors.length)];
        
        const ribbon = document.createElement('div');
        const width = Math.random() * 800 + 500;
        const height = Math.random() * 60 + 30;
        const x = Math.random() * 100 - 50;
        const y = Math.random() * 100;
        const rotation = Math.random() * 60 - 30;
        const opacity = Math.random() * 0.18 + 0.08;
        const duration = Math.random() * 100 + 80;
        
        ribbon.style.cssText = `
            position: absolute;
            width: ${width}px;
            height: ${height}px;
            left: ${x}%;
            top: ${y}%;
            background: linear-gradient(
                90deg,
                transparent 0%,
                rgba(${color.r}, ${color.g}, ${color.b}, ${opacity * 0.5}) 20%,
                rgba(${color.r}, ${color.g}, ${color.b}, ${opacity}) 40%,
                rgba(${color.r}, ${color.g}, ${color.b}, ${opacity}) 60%,
                rgba(${color.r}, ${color.g}, ${color.b}, ${opacity * 0.5}) 80%,
                transparent 100%
            );
            filter: blur(30px);
            transform: rotate(${rotation}deg);
            animation: ribbonFlow ${duration}s linear infinite;
            pointer-events: none;
            z-index: 4;
        `;
        
        fragment.appendChild(ribbon);
    }
    
    // ═══════════════════════════════════════════════════════════════════════════
    // LAYER 9: LUMINOUS PARTICLES (Bright firefly-like elements)
    // ═══════════════════════════════════════════════════════════════════════════
    console.log('💡 Adding luminous particles...');
    
    for (let i = 0; i < 50; i++) {
        const palette = nebulaPalettes[Math.floor(Math.random() * nebulaPalettes.length)];
        const color = palette.colors[Math.floor(Math.random() * palette.colors.length)];
        
        const particle = document.createElement('div');
        const size = Math.random() * 3 + 1;
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const opacity = Math.random() * 0.6 + 0.4;
        const duration = Math.random() * 8 + 5;
        const delay = Math.random() * 8;
        
        particle.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}%;
            top: ${y}%;
            background: rgba(${color.r}, ${color.g}, ${color.b}, ${opacity});
            border-radius: 50%;
            box-shadow: 
                0 0 ${size * 3}px rgba(${color.r}, ${color.g}, ${color.b}, 0.8),
                0 0 ${size * 6}px rgba(${color.r}, ${color.g}, ${color.b}, 0.4);
            animation: luminescentPulse ${duration}s ease-in-out infinite;
            animation-delay: ${delay}s;
            pointer-events: none;
            z-index: 7;
        `;
        
        fragment.appendChild(particle);
    }
    
    // ═══════════════════════════════════════════════════════════════════════════
    // LAYER 10: LARGE ROTATING NEBULA ARMS (Spiral effect)
    // ═══════════════════════════════════════════════════════════════════════════
    console.log('🌀 Creating spiral nebula arms...');
    
    for (let i = 0; i < 4; i++) {
        const palette = nebulaPalettes[Math.floor(Math.random() * nebulaPalettes.length)];
        const color = palette.colors[0];
        
        const arm = document.createElement('div');
        const size = 900;
        const centerX = 50;
        const centerY = 50;
        const rotation = i * 90;
        const duration = 200 + (i * 20);
        
        arm.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${centerX}%;
            top: ${centerY}%;
            transform: translate(-50%, -50%) rotate(${rotation}deg);
            background: radial-gradient(
                ellipse 80% 40% at 50% 50%,
                rgba(${color.r}, ${color.g}, ${color.b}, 0.15) 0%,
                rgba(${color.r}, ${color.g}, ${color.b}, 0.08) 30%,
                transparent 70%
            );
            filter: blur(60px);
            animation: spiralRotate ${duration}s linear infinite;
            pointer-events: none;
            z-index: 2;
        `;
        
        fragment.appendChild(arm);
    }
    
    // ═══════════════════════════════════════════════════════════════════════════
    // LAYER 11: COLOR SHIFT OVERLAY (Dynamic color transitions)
    // ═══════════════════════════════════════════════════════════════════════════
    console.log('🎨 Adding color shift overlay...');
    
    const colorOverlay = document.createElement('div');
    colorOverlay.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: radial-gradient(
            circle at 50% 50%,
            rgba(138, 43, 226, 0.05) 0%,
            transparent 60%
        );
        animation: colorShift 60s ease-in-out infinite;
        pointer-events: none;
        z-index: 8;
        mix-blend-mode: overlay;
    `;
    fragment.appendChild(colorOverlay);
    
    // ═══════════════════════════════════════════════════════════════════════════
    // LAYER 12: ATMOSPHERIC DEPTH LAYERS (Parallax effect)
    // ═══════════════════════════════════════════════════════════════════════════
    console.log('🌫️ Creating depth layers...');
    
    for (let i = 0; i < 3; i++) {
        const layer = document.createElement('div');
        const opacity = (3 - i) * 0.03;
        const blur = (i + 1) * 20;
        const scale = 1 + (i * 0.1);
        
        layer.style.cssText = `
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: radial-gradient(
                ellipse at 50% 50%,
                rgba(100, 149, 237, ${opacity}) 0%,
                transparent 70%
            );
            filter: blur(${blur}px);
            transform: scale(${scale});
            pointer-events: none;
            z-index: ${i};
            animation: depthLayer ${80 + (i * 20)}s ease-in-out infinite;
        `;
        
        fragment.appendChild(layer);
    }
    
    // ═══════════════════════════════════════════════════════════════════════════
    // LAYER 13: BRIGHT STARS (Foreground layer)
    // ═══════════════════════════════════════════════════════════════════════════
    console.log('⭐ Adding foreground stars...');
    
    for (let i = 0; i < 60; i++) {
        const star = document.createElement('div');
        const size = Math.random() * 2.5 + 1;
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const opacity = Math.random() * 0.7 + 0.4;
        const duration = Math.random() * 3 + 2;
        
        const colors = ['#ffffff', '#ffd4a3', '#aabfff', '#ffccff'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        star.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}%;
            top: ${y}%;
            background: ${color};
            border-radius: 50%;
            opacity: ${opacity};
            box-shadow: 
                0 0 ${size * 3}px ${color},
                0 0 ${size * 6}px ${color}60;
            animation: starPulse ${duration}s ease-in-out infinite;
            animation-delay: ${Math.random() * 3}s;
            pointer-events: none;
            z-index: 9;
        `;
        
        fragment.appendChild(star);
    }
    
    // ═══════════════════════════════════════════════════════════════════════════
    // APPEND ALL ELEMENTS TO DOM
    // ═══════════════════════════════════════════════════════════════════════════
    starfield.appendChild(fragment);
    
    // ═══════════════════════════════════════════════════════════════════════════
    // INJECT CSS ANIMATIONS
    // ═══════════════════════════════════════════════════════════════════════════
    const style = document.createElement('style');
    style.setAttribute('data-theme', 'nebula');
    style.textContent = `
        @keyframes starTwinkle {
            0%, 100% { opacity: 0.3; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.2); }
        }
        
        @keyframes nebulaSwirl {
            0%, 100% {
                transform: rotate(0deg) scale(1);
                opacity: 1;
            }
            33% {
                transform: rotate(120deg) scale(1.15);
                opacity: 0.8;
            }
            66% {
                transform: rotate(240deg) scale(0.95);
                opacity: 0.9;
            }
        }
        
        @keyframes corePulse {
            0%, 100% {
                transform: translate(-50%, -50%) scale(1);
                opacity: 0.8;
            }
            50% {
                transform: translate(-50%, -50%) scale(1.3);
                opacity: 1;
            }
        }
        
        @keyframes dustDrift {
            0% { transform: translate(0, 0); }
            25% { transform: translate(30px, -40px); }
            50% { transform: translate(60px, 20px); }
            75% { transform: translate(30px, 60px); }
            100% { transform: translate(0, 0); }
        }
        
        @keyframes tendrilWave {
            0%, 100% {
                transform: rotate(var(--rotation, 0deg)) scaleY(1);
                opacity: 0.6;
            }
            50% {
                transform: rotate(calc(var(--rotation, 0deg) + 10deg)) scaleY(1.2);
                opacity: 0.9;
            }
        }
        
        @keyframes wispFloat {
            0%, 100% {
                transform: translate(0, 0) scale(1);
            }
            33% {
                transform: translate(40px, -50px) scale(1.1);
            }
            66% {
                transform: translate(-40px, 50px) scale(0.9);
            }
        }
        
        @keyframes ribbonFlow {
            0% {
                transform: rotate(var(--rotation, 0deg)) translateX(0);
            }
            100% {
                transform: rotate(var(--rotation, 0deg)) translateX(200px);
            }
        }
        
        @keyframes luminescentPulse {
            0%, 100% {
                opacity: 0.4;
                transform: scale(1);
            }
            50% {
                opacity: 1;
                transform: scale(1.5);
            }
        }
        
        @keyframes spiralRotate {
            from { transform: translate(-50%, -50%) rotate(0deg); }
            to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        
        @keyframes colorShift {
            0%, 100% { filter: hue-rotate(0deg); }
            50% { filter: hue-rotate(60deg); }
        }
        
        @keyframes depthLayer {
            0%, 100% {
                transform: scale(1);
                opacity: 1;
            }
            50% {
                transform: scale(1.05);
                opacity: 0.8;
            }
        }
        
        @keyframes starPulse {
            0%, 100% {
                opacity: 0.4;
                transform: scale(1);
            }
            50% {
                opacity: 1;
                transform: scale(1.3);
            }
        }
    `;
    document.head.appendChild(style);
    
    // ═══════════════════════════════════════════════════════════════════════════
    // SHOW THE MOON
    // ═══════════════════════════════════════════════════════════════════════════
    const moon = document.querySelector('.orbital-planet');
    if (moon) moon.style.display = 'block';
    
    // ═══════════════════════════════════════════════════════════════════════════
    // COMPLETION LOG
    // ═══════════════════════════════════════════════════════════════════════════
    console.log('✅ Ultra HD Nebula Cloud loaded successfully!');
    console.log('📊 Statistics:');
    console.log('   - 300 Background stars');
    console.log('   - 18 Massive nebula clouds');
    console.log('   - 8 Glowing cores');
    console.log('   - 500 Cosmic dust particles');
    console.log('   - 12 Wispy tendrils');
    console.log('   - 30 Gas wisps');
    console.log('   - 6 Energy ribbons');
    console.log('   - 50 Luminous particles');
    console.log('   - 4 Spiral arms');
    console.log('   - 60 Foreground stars');
    console.log('   - 3 Depth layers');
    console.log('🎨 Total elements: 991+');
}

// ═══════════════════════════════════════════════════════════════════════════════
// REGISTER THEME
// ═══════════════════════════════════════════════════════════════════════════════
window.themesLoaded = window.themesLoaded || {};
window.themesLoaded.nebula = true;

console.log('🌌 Ultra HD Nebula Cloud theme registered');
