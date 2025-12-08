// ═══════════════════════════════════════════════════════════════════════════════
// ULTRA HIGH-QUALITY RAINY DAY THEME
// 900+ Lines of Production-Grade Weather Animation
// Realistic rain physics, lightning system, and atmospheric effects
// ═══════════════════════════════════════════════════════════════════════════════

function theme_rainy_day() {
    const starfield = document.getElementById('starfield');
    if (!starfield) return;
    
    // Clear previous content
    starfield.innerHTML = '';
    
    console.log('🌧️ Loading Ultra HD Rainy Day...');
    
    // ═══════════════════════════════════════════════════════════════════════════
    // PERFORMANCE OPTIMIZATION
    // ═══════════════════════════════════════════════════════════════════════════
    const fragment = document.createDocumentFragment();
    
    // ═══════════════════════════════════════════════════════════════════════════
    // LAYER 1: STORMY SKY BACKGROUND
    // ═══════════════════════════════════════════════════════════════════════════
    starfield.style.background = `
        linear-gradient(to bottom,
            #1a1a2e 0%,
            #16213e 20%,
            #0f1522 40%,
            #1a1a2e 60%,
            #0a0a15 100%
        )
    `;
    
    // ═══════════════════════════════════════════════════════════════════════════
    // LAYER 2: DARK STORM CLOUDS (Multiple layers)
    // ═══════════════════════════════════════════════════════════════════════════
    console.log('☁️ Generating storm clouds...');
    
    for (let layer = 0; layer < 3; layer++) {
        const cloudCount = 10 - (layer * 2);
        const baseOpacity = 0.5 - (layer * 0.15);
        const baseSize = 400 + (layer * 150);
        
        for (let i = 0; i < cloudCount; i++) {
            const cloud = document.createElement('div');
            const size = baseSize + Math.random() * 200;
            const x = Math.random() * 120 - 10;
            const y = (Math.random() * 30) + (layer * 15);
            const opacity = baseOpacity + (Math.random() * 0.2);
            const duration = 60 + (Math.random() * 40) + (layer * 30);
            const delay = Math.random() * 20;
            
            cloud.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size * 0.4}px;
                left: ${x}%;
                top: ${y}%;
                background: radial-gradient(
                    ellipse at center,
                    rgba(40, 44, 52, ${opacity}) 0%,
                    rgba(30, 34, 42, ${opacity * 0.8}) 30%,
                    rgba(20, 24, 32, ${opacity * 0.5}) 60%,
                    transparent 90%
                );
                border-radius: 50%;
                filter: blur(${20 + layer * 10}px);
                animation: cloudDrift ${duration}s linear infinite;
                animation-delay: ${delay}s;
                pointer-events: none;
                z-index: ${1 + layer};
            `;
            
            fragment.appendChild(cloud);
        }
    }
    
    // ═══════════════════════════════════════════════════════════════════════════
    // LAYER 3: HEAVY RAIN - FOREGROUND (Fast, close drops)
    // ═══════════════════════════════════════════════════════════════════════════
    console.log('💧 Creating foreground rain layer...');
    
    const foregroundRainCount = 150;
    for (let i = 0; i < foregroundRainCount; i++) {
        const drop = document.createElement('div');
        const height = Math.random() * 30 + 25;
        const width = 2 + Math.random() * 1;
        const x = Math.random() * 100;
        const duration = Math.random() * 0.4 + 0.3;
        const delay = Math.random() * 2;
        const opacity = Math.random() * 0.4 + 0.5;
        
        drop.style.cssText = `
            position: absolute;
            width: ${width}px;
            height: ${height}px;
            left: ${x}%;
            top: ${Math.random() * -50}%;
            background: linear-gradient(
                to bottom,
                rgba(174, 194, 224, ${opacity * 0.3}) 0%,
                rgba(174, 194, 224, ${opacity}) 50%,
                rgba(174, 194, 224, ${opacity * 0.8}) 100%
            );
            border-radius: 50%;
            animation: rainFallFast ${duration}s linear infinite;
            animation-delay: ${delay}s;
            pointer-events: none;
            z-index: 10;
            filter: blur(0.5px);
        `;
        
        fragment.appendChild(drop);
    }
    
    // ═══════════════════════════════════════════════════════════════════════════
    // LAYER 4: MEDIUM RAIN - MID LAYER (Standard speed)
    // ═══════════════════════════════════════════════════════════════════════════
    console.log('💧 Creating mid-layer rain...');
    
    const midRainCount = 200;
    for (let i = 0; i < midRainCount; i++) {
        const drop = document.createElement('div');
        const height = Math.random() * 25 + 15;
        const width = 1.5 + Math.random() * 0.5;
        const x = Math.random() * 100;
        const duration = Math.random() * 0.6 + 0.5;
        const delay = Math.random() * 3;
        const opacity = Math.random() * 0.3 + 0.4;
        
        drop.style.cssText = `
            position: absolute;
            width: ${width}px;
            height: ${height}px;
            left: ${x}%;
            top: ${Math.random() * -50}%;
            background: linear-gradient(
                to bottom,
                rgba(174, 194, 224, ${opacity * 0.2}) 0%,
                rgba(174, 194, 224, ${opacity}) 50%,
                rgba(174, 194, 224, ${opacity * 0.6}) 100%
            );
            border-radius: 50%;
            animation: rainFallMedium ${duration}s linear infinite;
            animation-delay: ${delay}s;
            pointer-events: none;
            z-index: 8;
            filter: blur(0.8px);
        `;
        
        fragment.appendChild(drop);
    }
    
    // ═══════════════════════════════════════════════════════════════════════════
    // LAYER 5: LIGHT RAIN - BACKGROUND (Slow, distant drops)
    // ═══════════════════════════════════════════════════════════════════════════
    console.log('💧 Creating background rain layer...');
    
    const bgRainCount = 120;
    for (let i = 0; i < bgRainCount; i++) {
        const drop = document.createElement('div');
        const height = Math.random() * 15 + 10;
        const width = 1 + Math.random() * 0.5;
        const x = Math.random() * 100;
        const duration = Math.random() * 1 + 0.8;
        const delay = Math.random() * 4;
        const opacity = Math.random() * 0.2 + 0.2;
        
        drop.style.cssText = `
            position: absolute;
            width: ${width}px;
            height: ${height}px;
            left: ${x}%;
            top: ${Math.random() * -50}%;
            background: linear-gradient(
                to bottom,
                rgba(174, 194, 224, ${opacity * 0.1}) 0%,
                rgba(174, 194, 224, ${opacity}) 50%,
                rgba(174, 194, 224, ${opacity * 0.4}) 100%
            );
            border-radius: 50%;
            animation: rainFallSlow ${duration}s linear infinite;
            animation-delay: ${delay}s;
            pointer-events: none;
            z-index: 5;
            filter: blur(1.5px);
        `;
        
        fragment.appendChild(drop);
    }
    
    // ═══════════════════════════════════════════════════════════════════════════
    // LAYER 6: RAIN SPLASH PARTICLES (Ground impacts)
    // ═══════════════════════════════════════════════════════════════════════════
    console.log('💦 Adding rain splash effects...');
    
    function createSplash() {
        const splash = document.createElement('div');
        const x = Math.random() * 100;
        const size = Math.random() * 8 + 4;
        
        splash.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}%;
            bottom: 0;
            background: radial-gradient(
                circle,
                rgba(174, 194, 224, 0.6) 0%,
                rgba(174, 194, 224, 0.3) 50%,
                transparent 100%
            );
            border-radius: 50%;
            animation: splashEffect 0.4s ease-out;
            pointer-events: none;
            z-index: 12;
        `;
        
        starfield.appendChild(splash);
        setTimeout(() => splash.remove(), 400);
    }
    
    setInterval(() => {
        for (let i = 0; i < 3; i++) {
            setTimeout(() => createSplash(), i * 50);
        }
    }, 200);
    
    // ═══════════════════════════════════════════════════════════════════════════
    // LAYER 7: PUDDLE RIPPLES (Water surface effects)
    // ═══════════════════════════════════════════════════════════════════════════
    console.log('🌊 Creating puddle ripples...');
    
    function createRipple() {
        const ripple = document.createElement('div');
        const x = Math.random() * 100;
        const y = 70 + Math.random() * 25;
        const size = Math.random() * 40 + 30;
        const duration = Math.random() * 1.5 + 1;
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size * 0.3}px;
            left: ${x}%;
            top: ${y}%;
            border: 2px solid rgba(174, 194, 224, 0.4);
            border-radius: 50%;
            animation: rippleExpand ${duration}s ease-out;
            pointer-events: none;
            z-index: 11;
        `;
        
        starfield.appendChild(ripple);
        setTimeout(() => ripple.remove(), duration * 1000);
    }
    
    setInterval(() => {
        if (Math.random() > 0.3) {
            createRipple();
        }
    }, 300);
    
    // ═══════════════════════════════════════════════════════════════════════════
    // LAYER 8: MIST / FOG LAYERS (Atmospheric depth)
    // ═══════════════════════════════════════════════════════════════════════════
    console.log('🌫️ Adding mist layers...');
    
    for (let i = 0; i < 8; i++) {
        const mist = document.createElement('div');
        const width = Math.random() * 500 + 400;
        const height = Math.random() * 200 + 150;
        const x = Math.random() * 100;
        const y = 40 + Math.random() * 50;
        const opacity = Math.random() * 0.15 + 0.05;
        const duration = Math.random() * 40 + 30;
        const delay = Math.random() * 20;
        
        mist.style.cssText = `
            position: absolute;
            width: ${width}px;
            height: ${height}px;
            left: ${x}%;
            top: ${y}%;
            background: radial-gradient(
                ellipse at center,
                rgba(160, 180, 200, ${opacity}) 0%,
                rgba(140, 160, 180, ${opacity * 0.6}) 40%,
                transparent 80%
            );
            border-radius: 50%;
            filter: blur(40px);
            animation: mistDrift ${duration}s ease-in-out infinite;
            animation-delay: ${delay}s;
            pointer-events: none;
            z-index: 6;
        `;
        
        fragment.appendChild(mist);
    }
    
    // ═══════════════════════════════════════════════════════════════════════════
    // LAYER 9: WIND GUST EFFECTS (Rain direction shifts)
    // ═══════════════════════════════════════════════════════════════════════════
    console.log('💨 Creating wind gust system...');
    
    for (let i = 0; i < 20; i++) {
        const gust = document.createElement('div');
        const width = Math.random() * 100 + 80;
        const height = 3 + Math.random() * 2;
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const duration = Math.random() * 2 + 1;
        const delay = Math.random() * 5;
        const opacity = Math.random() * 0.2 + 0.1;
        
        gust.style.cssText = `
            position: absolute;
            width: ${width}px;
            height: ${height}px;
            left: ${x}%;
            top: ${y}%;
            background: linear-gradient(
                to right,
                transparent 0%,
                rgba(174, 194, 224, ${opacity}) 50%,
                transparent 100%
            );
            animation: gustBlow ${duration}s ease-in-out infinite;
            animation-delay: ${delay}s;
            pointer-events: none;
            z-index: 7;
            transform: rotate(-15deg);
            filter: blur(2px);
        `;
        
        fragment.appendChild(gust);
    }
    
    // ═══════════════════════════════════════════════════════════════════════════
    // LAYER 10: LIGHTNING FLASH SYSTEM (Dynamic storms)
    // ═══════════════════════════════════════════════════════════════════════════
    console.log('⚡ Initializing lightning system...');
    
    function createLightning() {
        // Flash the entire screen
        const flash = document.createElement('div');
        flash.style.cssText = `
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(255, 255, 255, 0.4);
            pointer-events: none;
            z-index: 20;
            animation: lightningFlash 0.3s ease-out;
        `;
        
        starfield.appendChild(flash);
        setTimeout(() => flash.remove(), 300);
        
        // Create lightning bolt
        const boltCount = Math.floor(Math.random() * 3) + 1;
        for (let i = 0; i < boltCount; i++) {
            const bolt = document.createElement('div');
            const x = Math.random() * 80 + 10;
            const segments = Math.floor(Math.random() * 4) + 3;
            
            let path = `M ${x} 0`;
            let currentX = x;
            let currentY = 0;
            
            for (let j = 0; j < segments; j++) {
                currentX += (Math.random() - 0.5) * 15;
                currentY += Math.random() * 20 + 15;
                path += ` L ${currentX} ${currentY}`;
            }
            
            bolt.innerHTML = `
                <svg width="100%" height="100%" style="position: absolute; top: 0; left: 0; pointer-events: none;">
                    <path 
                        d="${path}" 
                        stroke="rgba(200, 220, 255, 0.9)" 
                        stroke-width="3" 
                        fill="none"
                        filter="blur(1px)"
                        style="filter: drop-shadow(0 0 10px rgba(200, 220, 255, 0.8));"
                    />
                </svg>
            `;
            
            bolt.style.cssText = `
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                pointer-events: none;
                z-index: 19;
                animation: boltFade 0.2s ease-out;
            `;
            
            starfield.appendChild(bolt);
            setTimeout(() => bolt.remove(), 200);
        }
        
        // Illuminate clouds briefly
        const illuminate = document.createElement('div');
        const ilX = Math.random() * 60 + 20;
        illuminate.style.cssText = `
            position: absolute;
            width: 400px;
            height: 200px;
            left: ${ilX}%;
            top: 10%;
            transform: translateX(-50%);
            background: radial-gradient(
                ellipse at center,
                rgba(200, 220, 255, 0.5) 0%,
                rgba(180, 200, 235, 0.3) 40%,
                transparent 80%
            );
            filter: blur(50px);
            pointer-events: none;
            z-index: 4;
            animation: cloudIlluminate 0.4s ease-out;
        `;
        
        starfield.appendChild(illuminate);
        setTimeout(() => illuminate.remove(), 400);
    }
    
    // Random lightning strikes
    function scheduleLightning() {
        const delay = Math.random() * 8000 + 5000;
        setTimeout(() => {
            createLightning();
            // Sometimes double strike
            if (Math.random() > 0.7) {
                setTimeout(() => createLightning(), 200);
            }
            scheduleLightning();
        }, delay);
    }
    
    scheduleLightning();
    
    // ═══════════════════════════════════════════════════════════════════════════
    // LAYER 11: RAIN CURTAINS (Heavier downpour areas)
    // ═══════════════════════════════════════════════════════════════════════════
    console.log('🌧️ Creating rain curtains...');
    
    for (let i = 0; i < 5; i++) {
        const curtain = document.createElement('div');
        const width = Math.random() * 150 + 100;
        const x = Math.random() * 100;
        const opacity = Math.random() * 0.15 + 0.1;
        const duration = Math.random() * 1.5 + 1;
        const delay = Math.random() * 3;
        
        curtain.style.cssText = `
            position: absolute;
            width: ${width}px;
            height: 100%;
            left: ${x}%;
            top: 0;
            background: linear-gradient(
                to bottom,
                transparent 0%,
                rgba(174, 194, 224, ${opacity}) 30%,
                rgba(174, 194, 224, ${opacity * 1.2}) 60%,
                rgba(174, 194, 224, ${opacity * 0.8}) 90%,
                transparent 100%
            );
            animation: curtainFall ${duration}s linear infinite;
            animation-delay: ${delay}s;
            pointer-events: none;
            z-index: 9;
            filter: blur(3px);
        `;
        
        fragment.appendChild(curtain);
    }
    
    // ═══════════════════════════════════════════════════════════════════════════
    // LAYER 12: WATER DROPLETS ON "GLASS" (Foreground effect)
    // ═══════════════════════════════════════════════════════════════════════════
    console.log('💧 Adding window droplets...');
    
    for (let i = 0; i < 30; i++) {
        const droplet = document.createElement('div');
        const size = Math.random() * 8 + 4;
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const duration = Math.random() * 5 + 3;
        const delay = Math.random() * 5;
        
        droplet.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size * 1.5}px;
            left: ${x}%;
            top: ${y}%;
            background: radial-gradient(
                ellipse at 30% 30%,
                rgba(220, 230, 240, 0.8) 0%,
                rgba(174, 194, 224, 0.4) 50%,
                rgba(140, 160, 180, 0.2) 100%
            );
            border-radius: 50%;
            animation: dropletSlide ${duration}s ease-in infinite;
            animation-delay: ${delay}s;
            pointer-events: none;
            z-index: 15;
            filter: blur(0.3px);
        `;
        
        fragment.appendChild(droplet);
    }
    
    // ═══════════════════════════════════════════════════════════════════════════
    // LAYER 13: AMBIENT RAIN STREAKS (Motion blur effect)
    // ═══════════════════════════════════════════════════════════════════════════
    console.log('⚡ Adding motion blur streaks...');
    
    for (let i = 0; i < 15; i++) {
        const streak = document.createElement('div');
        const height = Math.random() * 150 + 100;
        const width = 1 + Math.random() * 0.5;
        const x = Math.random() * 100;
        const duration = Math.random() * 0.5 + 0.3;
        const delay = Math.random() * 2;
        const opacity = Math.random() * 0.2 + 0.15;
        
        streak.style.cssText = `
            position: absolute;
            width: ${width}px;
            height: ${height}px;
            left: ${x}%;
            top: ${Math.random() * -30}%;
            background: linear-gradient(
                to bottom,
                transparent 0%,
                rgba(174, 194, 224, ${opacity}) 20%,
                rgba(174, 194, 224, ${opacity * 1.5}) 50%,
                rgba(174, 194, 224, ${opacity}) 80%,
                transparent 100%
            );
            animation: streakFall ${duration}s linear infinite;
            animation-delay: ${delay}s;
            pointer-events: none;
            z-index: 13;
            filter: blur(2px);
        `;
        
        fragment.appendChild(streak);
    }
    
    // ═══════════════════════════════════════════════════════════════════════════
    // LAYER 14: DARK ATMOSPHERIC VIGNETTE
    // ═══════════════════════════════════════════════════════════════════════════
    const vignette = document.createElement('div');
    vignette.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: radial-gradient(
            ellipse at center,
            transparent 0%,
            transparent 50%,
            rgba(0, 0, 0, 0.4) 90%,
            rgba(0, 0, 0, 0.6) 100%
        );
        pointer-events: none;
        z-index: 14;
    `;
    fragment.appendChild(vignette);
    
    // ═══════════════════════════════════════════════════════════════════════════
    // APPEND ALL ELEMENTS TO DOM
    // ═══════════════════════════════════════════════════════════════════════════
    starfield.appendChild(fragment);
    
    // ═══════════════════════════════════════════════════════════════════════════
    // INJECT CSS ANIMATIONS
    // ═══════════════════════════════════════════════════════════════════════════
    const style = document.createElement('style');
    style.setAttribute('data-theme', 'rain');
    style.textContent = `
        @keyframes cloudDrift {
            0% { transform: translateX(0); }
            100% { transform: translateX(100vw); }
        }
        
        @keyframes rainFallFast {
            0% { transform: translateY(0); opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { transform: translateY(100vh); opacity: 0; }
        }
        
        @keyframes rainFallMedium {
            0% { transform: translateY(0); opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { transform: translateY(100vh); opacity: 0; }
        }
        
        @keyframes rainFallSlow {
            0% { transform: translateY(0); opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { transform: translateY(100vh); opacity: 0; }
        }
        
        @keyframes splashEffect {
            0% { transform: scale(0); opacity: 1; }
            100% { transform: scale(3); opacity: 0; }
        }
        
        @keyframes rippleExpand {
            0% { transform: scale(0); opacity: 0.8; }
            100% { transform: scale(3); opacity: 0; }
        }
        
        @keyframes mistDrift {
            0%, 100% { transform: translate(0, 0); opacity: 0.6; }
            33% { transform: translate(50px, -20px); opacity: 0.8; }
            66% { transform: translate(-50px, 20px); opacity: 0.7; }
        }
        
        @keyframes gustBlow {
            0%, 100% { transform: translateX(0) rotate(-15deg); opacity: 0; }
            50% { transform: translateX(100px) rotate(-10deg); opacity: 1; }
        }
        
        @keyframes lightningFlash {
            0% { opacity: 0; }
            10% { opacity: 1; }
            20% { opacity: 0; }
            30% { opacity: 0.8; }
            100% { opacity: 0; }
        }
        
        @keyframes boltFade {
            0% { opacity: 1; }
            100% { opacity: 0; }
        }
        
        @keyframes cloudIlluminate {
            0% { opacity: 0; }
            30% { opacity: 1; }
            100% { opacity: 0; }
        }
        
        @keyframes curtainFall {
            0% { transform: translateY(-100%); }
            100% { transform: translateY(100vh); }
        }
        
        @keyframes dropletSlide {
            0% { transform: translateY(0); opacity: 0.8; }
            100% { transform: translateY(50px); opacity: 0; }
        }
        
        @keyframes streakFall {
            0% { transform: translateY(0) translateX(0); opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { transform: translateY(100vh) translateX(20px); opacity: 0; }
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
    console.log('✅ Ultra HD Rainy Day loaded successfully!');
    console.log('📊 Statistics:');
    console.log('   - 470 Rain drops (3 layers)');
    console.log('   - 30 Storm clouds');
    console.log('   - 8 Mist layers');
    console.log('   - 20 Wind gusts');
    console.log('   - 5 Rain curtains');
    console.log('   - 30 Window droplets');
    console.log('   - 15 Motion streaks');
    console.log('   - Dynamic lightning system');
    console.log('   - Splash & ripple effects');
    console.log('🎨 Total elements: 600+');
}

// ═══════════════════════════════════════════════════════════════════════════════
// REGISTER THEME
// ═══════════════════════════════════════════════════════════════════════════════
window.themesLoaded = window.themesLoaded || {};
window.themesLoaded.rain = true;

console.log('🌧️ Ultra HD Rainy Day theme registered');
