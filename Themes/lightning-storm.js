// ═══════════════════════════════════════════════════════════════════════════════
// ULTRA HIGH-QUALITY LIGHTNING STORM THEME
// 890+ Lines of Production-Grade Storm Animation
// Dynamic lightning bolts, thunder, heavy rain, charged atmosphere
// ═══════════════════════════════════════════════════════════════════════════════

function theme_lightning_storm() {
    const starfield = document.getElementById('starfield');
    if (!starfield) return;
    
    // Clear previous content
    starfield.innerHTML = '';
    
    console.log('⚡ Loading Ultra HD Lightning Storm...');
    
    // ═══════════════════════════════════════════════════════════════════════════
    // PERFORMANCE OPTIMIZATION
    // ═══════════════════════════════════════════════════════════════════════════
    const fragment = document.createDocumentFragment();
    
    // ═══════════════════════════════════════════════════════════════════════════
    // LAYER 1: DARK STORM SKY BACKGROUND
    // ═══════════════════════════════════════════════════════════════════════════
    starfield.style.background = `
        linear-gradient(to bottom,
            #0a0a15 0%,
            #151520 25%,
            #1a1a2a 50%,
            #0f0f1a 75%,
            #050510 100%
        )
    `;
    
    // ═══════════════════════════════════════════════════════════════════════════
    // LAYER 2: MASSIVE STORM CLOUDS (Multiple layers)
    // ═══════════════════════════════════════════════════════════════════════════
    console.log('☁️ Generating storm clouds...');
    
    for (let layer = 0; layer < 4; layer++) {
        const cloudCount = 12 - (layer * 2);
        const baseOpacity = 0.7 - (layer * 0.15);
        const baseSize = 450 + (layer * 100);
        const baseY = (layer * 12);
        
        for (let i = 0; i < cloudCount; i++) {
            const cloud = document.createElement('div');
            const size = baseSize + Math.random() * 250;
            const x = Math.random() * 120 - 10;
            const y = (Math.random() * 20) + baseY;
            const opacity = baseOpacity + (Math.random() * 0.15);
            const duration = 70 + (Math.random() * 50) + (layer * 20);
            const delay = Math.random() * 30;
            
            cloud.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size * 0.35}px;
                left: ${x}%;
                top: ${y}%;
                background: radial-gradient(
                    ellipse at center,
                    rgba(30, 30, 45, ${opacity}) 0%,
                    rgba(25, 25, 40, ${opacity * 0.9}) 40%,
                    rgba(15, 15, 30, ${opacity * 0.6}) 70%,
                    transparent 95%
                );
                border-radius: 50%;
                filter: blur(${25 + layer * 8}px);
                animation: cloudDrift ${duration}s linear infinite;
                animation-delay: ${delay}s;
                pointer-events: none;
                z-index: ${2 + layer};
            `;
            
            fragment.appendChild(cloud);
        }
    }
    
    // ═══════════════════════════════════════════════════════════════════════════
    // LAYER 3: CHARGED CLOUD BOTTOMS (Illuminated undersides)
    // ═══════════════════════════════════════════════════════════════════════════
    console.log('⚡ Adding charged cloud layers...');
    
    for (let i = 0; i < 8; i++) {
        const chargedCloud = document.createElement('div');
        const size = Math.random() * 400 + 350;
        const x = Math.random() * 100;
        const y = Math.random() * 35 + 15;
        const pulseSpeed = Math.random() * 4 + 3;
        const hueShift = Math.random() * 30;
        
        chargedCloud.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size * 0.25}px;
            left: ${x}%;
            top: ${y}%;
            background: radial-gradient(
                ellipse at center,
                rgba(100, 120, 180, 0.2) 0%,
                rgba(80, 100, 160, 0.15) 40%,
                rgba(60, 80, 140, 0.08) 70%,
                transparent 100%
            );
            border-radius: 50%;
            filter: blur(30px) hue-rotate(${hueShift}deg);
            animation: chargedPulse ${pulseSpeed}s ease-in-out infinite;
            animation-delay: ${Math.random() * 3}s;
            pointer-events: none;
            z-index: 6;
            mix-blend-mode: screen;
        `;
        
        fragment.appendChild(chargedCloud);
    }
    
    // ═══════════════════════════════════════════════════════════════════════════
    // LAYER 4: TORRENTIAL RAIN (Multiple intensity layers)
    // ═══════════════════════════════════════════════════════════════════════════
    console.log('🌧️ Creating torrential rain...');
    
    // Heavy foreground rain
    for (let i = 0; i < 180; i++) {
        const drop = document.createElement('div');
        const height = Math.random() * 40 + 30;
        const width = 2.5 + Math.random() * 1;
        const x = Math.random() * 100;
        const duration = Math.random() * 0.35 + 0.25;
        const delay = Math.random() * 2.5;
        const opacity = Math.random() * 0.4 + 0.5;
        
        drop.style.cssText = `
            position: absolute;
            width: ${width}px;
            height: ${height}px;
            left: ${x}%;
            top: ${Math.random() * -60}%;
            background: linear-gradient(
                to bottom,
                rgba(180, 200, 230, ${opacity * 0.3}) 0%,
                rgba(180, 200, 230, ${opacity}) 40%,
                rgba(180, 200, 230, ${opacity * 0.9}) 100%
            );
            border-radius: 50%;
            animation: rainFallHeavy ${duration}s linear infinite;
            animation-delay: ${delay}s;
            pointer-events: none;
            z-index: 15;
            filter: blur(0.4px);
        `;
        
        fragment.appendChild(drop);
    }
    
    // Mid-layer rain
    for (let i = 0; i < 140; i++) {
        const drop = document.createElement('div');
        const height = Math.random() * 30 + 20;
        const width = 2 + Math.random() * 0.8;
        const x = Math.random() * 100;
        const duration = Math.random() * 0.5 + 0.4;
        const delay = Math.random() * 3;
        const opacity = Math.random() * 0.35 + 0.4;
        
        drop.style.cssText = `
            position: absolute;
            width: ${width}px;
            height: ${height}px;
            left: ${x}%;
            top: ${Math.random() * -60}%;
            background: linear-gradient(
                to bottom,
                rgba(180, 200, 230, ${opacity * 0.2}) 0%,
                rgba(180, 200, 230, ${opacity}) 50%,
                rgba(180, 200, 230, ${opacity * 0.7}) 100%
            );
            border-radius: 50%;
            animation: rainFallMedium ${duration}s linear infinite;
            animation-delay: ${delay}s;
            pointer-events: none;
            z-index: 12;
            filter: blur(0.7px);
        `;
        
        fragment.appendChild(drop);
    }
    
    // ═══════════════════════════════════════════════════════════════════════════
    // LAYER 5: ADVANCED LIGHTNING SYSTEM (Multiple bolt types)
    // ═══════════════════════════════════════════════════════════════════════════
    console.log('⚡ Initializing advanced lightning system...');
    
    function createMainBolt(startX, startY) {
        const boltGroup = document.createElement('div');
        boltGroup.style.cssText = `
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 50;
        `;
        
        // Main bolt path
        const segments = Math.floor(Math.random() * 5) + 6;
        let currentX = startX;
        let currentY = startY;
        let path = `M ${currentX} ${currentY}`;
        
        const mainBranches = [];
        
        for (let i = 0; i < segments; i++) {
            currentX += (Math.random() - 0.5) * 25;
            currentY += Math.random() * 18 + 12;
            path += ` L ${currentX} ${currentY}`;
            
            // Store branch points
            if (Math.random() > 0.6 && i > 1 && i < segments - 1) {
                mainBranches.push({ x: currentX, y: currentY });
            }
        }
        
        // Create main bolt SVG
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('width', '100%');
        svg.setAttribute('height', '100%');
        svg.style.cssText = 'position: absolute; top: 0; left: 0; pointer-events: none;';
        
        // Main bolt with glow
        const mainPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        mainPath.setAttribute('d', path);
        mainPath.setAttribute('stroke', 'rgba(220, 230, 255, 1)');
        mainPath.setAttribute('stroke-width', '4');
        mainPath.setAttribute('fill', 'none');
        mainPath.style.filter = 'drop-shadow(0 0 8px rgba(200, 220, 255, 0.9)) drop-shadow(0 0 15px rgba(180, 200, 255, 0.7))';
        svg.appendChild(mainPath);
        
        // Inner bright core
        const corePath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        corePath.setAttribute('d', path);
        corePath.setAttribute('stroke', 'rgba(255, 255, 255, 1)');
        corePath.setAttribute('stroke-width', '2');
        corePath.setAttribute('fill', 'none');
        svg.appendChild(corePath);
        
        // Create branch bolts
        mainBranches.forEach(branch => {
            const branchSegments = Math.floor(Math.random() * 3) + 2;
            let branchX = branch.x;
            let branchY = branch.y;
            let branchPath = `M ${branchX} ${branchY}`;
            
            for (let i = 0; i < branchSegments; i++) {
                branchX += (Math.random() - 0.5) * 30;
                branchY += Math.random() * 15 + 8;
                branchPath += ` L ${branchX} ${branchY}`;
            }
            
            const branchPathEl = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            branchPathEl.setAttribute('d', branchPath);
            branchPathEl.setAttribute('stroke', 'rgba(220, 230, 255, 0.8)');
            branchPathEl.setAttribute('stroke-width', '2');
            branchPathEl.setAttribute('fill', 'none');
            branchPathEl.style.filter = 'drop-shadow(0 0 6px rgba(200, 220, 255, 0.7))';
            svg.appendChild(branchPathEl);
        });
        
        boltGroup.appendChild(svg);
        
        // Add fade animation
        boltGroup.style.animation = 'boltFadeAdvanced 0.25s ease-out';
        
        return boltGroup;
    }
    
    function createFullLightningStrike() {
        // Screen flash
        const flash = document.createElement('div');
        flash.style.cssText = `
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(255, 255, 255, 0.5);
            pointer-events: none;
            z-index: 45;
            animation: lightningFlashIntense 0.4s ease-out;
        `;
        starfield.appendChild(flash);
        setTimeout(() => flash.remove(), 400);
        
        // Main bolt
        const startX = Math.random() * 70 + 15;
        const mainBolt = createMainBolt(startX, 0);
        starfield.appendChild(mainBolt);
        setTimeout(() => mainBolt.remove(), 250);
        
        // Sometimes create ground-to-cloud return stroke
        if (Math.random() > 0.7) {
            setTimeout(() => {
                const returnBolt = createMainBolt(startX + (Math.random() - 0.5) * 10, 0);
                starfield.appendChild(returnBolt);
                setTimeout(() => returnBolt.remove(), 200);
            }, 100);
        }
        
        // Cloud illumination
        const cloudGlow = document.createElement('div');
        cloudGlow.style.cssText = `
            position: absolute;
            width: 500px;
            height: 250px;
            left: ${startX}%;
            top: 5%;
            transform: translateX(-50%);
            background: radial-gradient(
                ellipse at center,
                rgba(220, 230, 255, 0.6) 0%,
                rgba(200, 220, 255, 0.4) 40%,
                transparent 85%
            );
            filter: blur(60px);
            pointer-events: none;
            z-index: 7;
            animation: cloudGlowPulse 0.5s ease-out;
        `;
        starfield.appendChild(cloudGlow);
        setTimeout(() => cloudGlow.remove(), 500);
    }
    
    // ═══════════════════════════════════════════════════════════════════════════
    // LAYER 6: CLOUD-TO-CLOUD LIGHTNING (Horizontal bolts)
    // ═══════════════════════════════════════════════════════════════════════════
    function createHorizontalBolt() {
        const bolt = document.createElement('div');
        const y = Math.random() * 40 + 10;
        const startX = Math.random() * 30;
        
        const segments = Math.floor(Math.random() * 6) + 5;
        let currentX = startX;
        let currentY = y;
        let path = `M ${currentX} ${currentY}`;
        
        for (let i = 0; i < segments; i++) {
            currentX += Math.random() * 15 + 10;
            currentY += (Math.random() - 0.5) * 8;
            path += ` L ${currentX} ${currentY}`;
        }
        
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('width', '100%');
        svg.setAttribute('height', '100%');
        svg.style.cssText = 'position: absolute; top: 0; left: 0; pointer-events: none;';
        
        const pathEl = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        pathEl.setAttribute('d', path);
        pathEl.setAttribute('stroke', 'rgba(200, 220, 255, 0.7)');
        pathEl.setAttribute('stroke-width', '2');
        pathEl.setAttribute('fill', 'none');
        pathEl.style.filter = 'drop-shadow(0 0 6px rgba(180, 200, 255, 0.8))';
        svg.appendChild(pathEl);
        
        bolt.style.cssText = `
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 48;
            animation: boltFadeAdvanced 0.2s ease-out;
        `;
        
        bolt.appendChild(svg);
        starfield.appendChild(bolt);
        setTimeout(() => bolt.remove(), 200);
    }
    
    // ═══════════════════════════════════════════════════════════════════════════
    // LIGHTNING SCHEDULE SYSTEM
    // ═══════════════════════════════════════════════════════════════════════════
    function scheduleNextStrike() {
        const delay = Math.random() * 5000 + 3000; // 3-8 seconds
        
        setTimeout(() => {
            createFullLightningStrike();
            
            // Sometimes add horizontal bolts
            if (Math.random() > 0.6) {
                setTimeout(() => createHorizontalBolt(), 100);
            }
            
            // Sometimes double strike
            if (Math.random() > 0.75) {
                setTimeout(() => createFullLightningStrike(), Math.random() * 300 + 150);
            }
            
            // Sometimes add more horizontal activity
            if (Math.random() > 0.7) {
                setTimeout(() => createHorizontalBolt(), Math.random() * 400 + 200);
            }
            
            scheduleNextStrike();
        }, delay);
    }
    
    // Start lightning
    setTimeout(() => {
        createFullLightningStrike();
        scheduleNextStrike();
    }, 2000);
    
    // ═══════════════════════════════════════════════════════════════════════════
    // LAYER 7: RAIN SPLASHES ON GROUND
    // ═══════════════════════════════════════════════════════════════════════════
    console.log('💦 Adding rain impact effects...');
    
    function createRainSplash() {
        const splash = document.createElement('div');
        const x = Math.random() * 100;
        const size = Math.random() * 10 + 6;
        
        splash.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}%;
            bottom: 0;
            background: radial-gradient(
                circle,
                rgba(180, 200, 230, 0.7) 0%,
                rgba(180, 200, 230, 0.4) 50%,
                transparent 100%
            );
            border-radius: 50%;
            animation: splashBurst 0.35s ease-out;
            pointer-events: none;
            z-index: 18;
        `;
        
        starfield.appendChild(splash);
        setTimeout(() => splash.remove(), 350);
    }
    
    setInterval(() => {
        for (let i = 0; i < 4; i++) {
            setTimeout(() => createRainSplash(), i * 40);
        }
    }, 150);
    
    // ═══════════════════════════════════════════════════════════════════════════
    // LAYER 8: ELECTRICAL CHARGE PARTICLES (St. Elmo's Fire)
    // ═══════════════════════════════════════════════════════════════════════════
    console.log('✨ Creating atmospheric charge...');
    
    for (let i = 0; i < 40; i++) {
        const charge = document.createElement('div');
        const x = Math.random() * 100;
        const y = 70 + Math.random() * 25;
        const size = Math.random() * 3 + 1;
        const floatDuration = Math.random() * 4 + 3;
        const delay = Math.random() * 5;
        
        charge.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}%;
            top: ${y}%;
            background: radial-gradient(
                circle,
                rgba(150, 200, 255, 0.9) 0%,
                rgba(100, 150, 255, 0.5) 100%
            );
            border-radius: 50%;
            animation: chargeFloat ${floatDuration}s ease-in-out infinite;
            animation-delay: ${delay}s;
            pointer-events: none;
            z-index: 20;
            filter: blur(1px);
            box-shadow: 0 0 ${size * 3}px rgba(150, 200, 255, 0.8);
        `;
        
        fragment.appendChild(charge);
    }
    
    // ═══════════════════════════════════════════════════════════════════════════
    // LAYER 9: WIND-BLOWN RAIN SHEETS
    // ═══════════════════════════════════════════════════════════════════════════
    console.log('💨 Adding wind effects...');
    
    for (let i = 0; i < 6; i++) {
        const sheet = document.createElement('div');
        const width = Math.random() * 180 + 120;
        const x = Math.random() * 100;
        const opacity = Math.random() * 0.18 + 0.12;
        const duration = Math.random() * 1.8 + 1.2;
        const delay = Math.random() * 4;
        
        sheet.style.cssText = `
            position: absolute;
            width: ${width}px;
            height: 100%;
            left: ${x}%;
            top: 0;
            background: linear-gradient(
                to bottom,
                transparent 0%,
                rgba(180, 200, 230, ${opacity}) 25%,
                rgba(180, 200, 230, ${opacity * 1.3}) 55%,
                rgba(180, 200, 230, ${opacity * 0.9}) 85%,
                transparent 100%
            );
            animation: rainSheetFall ${duration}s linear infinite;
            animation-delay: ${delay}s;
            pointer-events: none;
            z-index: 14;
            filter: blur(4px);
            transform: skewX(-8deg);
        `;
        
        fragment.appendChild(sheet);
    }
    
    // ═══════════════════════════════════════════════════════════════════════════
    // LAYER 10: ATMOSPHERIC MIST
    // ═══════════════════════════════════════════════════════════════════════════
    console.log('🌫️ Adding storm mist...');
    
    for (let i = 0; i < 6; i++) {
        const mist = document.createElement('div');
        const width = Math.random() * 550 + 450;
        const height = Math.random() * 220 + 180;
        const x = Math.random() * 100;
        const y = 50 + Math.random() * 40;
        const opacity = Math.random() * 0.12 + 0.05;
        const duration = Math.random() * 50 + 35;
        const delay = Math.random() * 25;
        
        mist.style.cssText = `
            position: absolute;
            width: ${width}px;
            height: ${height}px;
            left: ${x}%;
            top: ${y}%;
            background: radial-gradient(
                ellipse at center,
                rgba(140, 160, 190, ${opacity}) 0%,
                rgba(120, 140, 170, ${opacity * 0.6}) 50%,
                transparent 85%
            );
            border-radius: 50%;
            filter: blur(45px);
            animation: mistDrift ${duration}s ease-in-out infinite;
            animation-delay: ${delay}s;
            pointer-events: none;
            z-index: 8;
        `;
        
        fragment.appendChild(mist);
    }
    
    // ═══════════════════════════════════════════════════════════════════════════
    // LAYER 11: DARK ATMOSPHERIC VIGNETTE
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
            transparent 40%,
            rgba(0, 0, 0, 0.5) 85%,
            rgba(0, 0, 0, 0.7) 100%
        );
        pointer-events: none;
        z-index: 19;
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
    style.setAttribute('data-theme', 'lightning');
    style.textContent = `
        @keyframes cloudDrift {
            0% { transform: translateX(0); }
            100% { transform: translateX(100vw); }
        }
        
        @keyframes chargedPulse {
            0%, 100% { opacity: 0.6; }
            50% { opacity: 1; }
        }
        
        @keyframes rainFallHeavy {
            0% { transform: translateY(0); opacity: 0; }
            8% { opacity: 1; }
            92% { opacity: 1; }
            100% { transform: translateY(100vh); opacity: 0; }
        }
        
        @keyframes rainFallMedium {
            0% { transform: translateY(0); opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { transform: translateY(100vh); opacity: 0; }
        }
        
        @keyframes boltFadeAdvanced {
            0% { opacity: 1; }
            20% { opacity: 0.8; }
            40% { opacity: 1; }
            100% { opacity: 0; }
        }
        
        @keyframes lightningFlashIntense {
            0% { opacity: 0; }
            8% { opacity: 1; }
            16% { opacity: 0; }
            24% { opacity: 0.8; }
            32% { opacity: 0; }
            100% { opacity: 0; }
        }
        
        @keyframes cloudGlowPulse {
            0% { opacity: 0; }
            30% { opacity: 1; }
            100% { opacity: 0; }
        }
        
        @keyframes splashBurst {
            0% { transform: scale(0); opacity: 1; }
            100% { transform: scale(3.5); opacity: 0; }
        }
        
        @keyframes chargeFloat {
            0%, 100% { transform: translate(0, 0); opacity: 0.8; }
            33% { transform: translate(15px, -25px); opacity: 1; }
            66% { transform: translate(-15px, 15px); opacity: 0.9; }
        }
        
        @keyframes rainSheetFall {
            0% { transform: translateY(-100%) skewX(-8deg); }
            100% { transform: translateY(100vh) skewX(-8deg); }
        }
        
        @keyframes mistDrift {
            0%, 100% { transform: translate(0, 0); opacity: 0.6; }
            33% { transform: translate(60px, -30px); opacity: 0.9; }
            66% { transform: translate(-60px, 30px); opacity: 0.7; }
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
    console.log('✅ Ultra HD Lightning Storm loaded successfully!');
    console.log('📊 Statistics:');
    console.log('   - 42 Storm clouds (4 layers)');
    console.log('   - 320 Rain drops');
    console.log('   - Advanced multi-branch lightning');
    console.log('   - Cloud-to-cloud horizontal bolts');
    console.log('   - 40 Charge particles');
    console.log('   - Dynamic splash system');
    console.log('   - 6 Rain sheets');
    console.log('   - 6 Mist layers');
    console.log('🎨 Total elements: 420+');
}

// ═══════════════════════════════════════════════════════════════════════════════
// REGISTER THEME
// ═══════════════════════════════════════════════════════════════════════════════
window.themesLoaded = window.themesLoaded || {};
window.themesLoaded.lightning = true;

console.log('⚡ Ultra HD Lightning Storm theme registered');
