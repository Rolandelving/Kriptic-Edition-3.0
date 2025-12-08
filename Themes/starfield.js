// ═══════════════════════════════════════════════════════════════════════════════
// ULTRA HIGH-QUALITY STARFIELD THEME
// 800+ Lines of Production-Grade Space Animation
// ═══════════════════════════════════════════════════════════════════════════════

function theme_starfield() {
    const starfield = document.getElementById('starfield');
    if (!starfield) return;
    
    // Clear previous content
    starfield.innerHTML = '';
    starfield.style.background = '';
    
    console.log('✨ Loading Ultra HD Starfield...');
    
    // ═══════════════════════════════════════════════════════════════════════════
    // PERFORMANCE OPTIMIZATION - Use DocumentFragment for batch DOM insertion
    // ═══════════════════════════════════════════════════════════════════════════
    const fragment = document.createDocumentFragment();
    
    // ═══════════════════════════════════════════════════════════════════════════
    // LAYER 1: DEEP SPACE GRADIENT BACKGROUND
    // ═══════════════════════════════════════════════════════════════════════════
    starfield.style.background = `
        radial-gradient(ellipse at 20% 30%, rgba(25, 25, 60, 0.4) 0%, transparent 50%),
        radial-gradient(ellipse at 80% 70%, rgba(40, 20, 60, 0.3) 0%, transparent 50%),
        radial-gradient(ellipse at 50% 50%, rgba(10, 10, 30, 0.5) 0%, transparent 70%),
        linear-gradient(to bottom, #000000 0%, #0a0a1e 50%, #000000 100%)
    `;
    
    // ═══════════════════════════════════════════════════════════════════════════
    // LAYER 2: DISTANT NEBULA CLOUDS (Deep Background)
    // ═══════════════════════════════════════════════════════════════════════════
    console.log('🌌 Generating nebula clouds...');
    
    const nebulaColors = [
        { r: 100, g: 149, b: 237, name: 'Cornflower Blue' },
        { r: 157, g: 125, b: 255, name: 'Purple' },
        { r: 255, g: 105, b: 180, name: 'Hot Pink' },
        { r: 0, g: 191, b: 255, name: 'Deep Sky Blue' },
        { r: 138, g: 43, b: 226, name: 'Blue Violet' }
    ];
    
    for (let i = 0; i < 12; i++) {
        const nebula = document.createElement('div');
        const color = nebulaColors[Math.floor(Math.random() * nebulaColors.length)];
        const size = Math.random() * 400 + 250;
        const x = Math.random() * 120 - 10;
        const y = Math.random() * 120 - 10;
        const opacity = Math.random() * 0.15 + 0.05;
        const rotation = Math.random() * 360;
        const animDuration = Math.random() * 80 + 60;
        
        nebula.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}%;
            top: ${y}%;
            background: radial-gradient(
                ellipse at center,
                rgba(${color.r}, ${color.g}, ${color.b}, ${opacity}) 0%,
                rgba(${color.r}, ${color.g}, ${color.b}, ${opacity * 0.5}) 30%,
                transparent 70%
            );
            border-radius: 50%;
            filter: blur(60px);
            transform: rotate(${rotation}deg);
            animation: nebulaDrift ${animDuration}s ease-in-out infinite;
            animation-delay: ${Math.random() * -30}s;
            pointer-events: none;
            z-index: 1;
        `;
        
        fragment.appendChild(nebula);
    }
    
    // ═══════════════════════════════════════════════════════════════════════════
    // LAYER 3: MILKY WAY BAND (Diagonal galaxy streak)
    // ═══════════════════════════════════════════════════════════════════════════
    console.log('🌌 Creating Milky Way band...');
    
    const milkyWay = document.createElement('div');
    milkyWay.style.cssText = `
        position: absolute;
        width: 200%;
        height: 40%;
        left: -50%;
        top: 30%;
        background: linear-gradient(
            to bottom,
            transparent 0%,
            rgba(200, 200, 255, 0.03) 20%,
            rgba(180, 180, 240, 0.08) 40%,
            rgba(200, 200, 255, 0.06) 60%,
            rgba(180, 180, 240, 0.03) 80%,
            transparent 100%
        );
        transform: rotate(-25deg);
        filter: blur(40px);
        pointer-events: none;
        z-index: 2;
        animation: milkyWayShimmer 120s ease-in-out infinite;
    `;
    fragment.appendChild(milkyWay);
    
    // ═══════════════════════════════════════════════════════════════════════════
    // LAYER 4: STAR FIELD - BACKGROUND LAYER (Tiny distant stars)
    // ═══════════════════════════════════════════════════════════════════════════
    console.log('⭐ Generating background stars (Layer 1 of 3)...');
    
    const bgStarCount = 200;
    for (let i = 0; i < bgStarCount; i++) {
        const star = document.createElement('div');
        const size = Math.random() * 0.8 + 0.3;
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const opacity = Math.random() * 0.4 + 0.2;
        const twinkleDuration = Math.random() * 4 + 3;
        const twinkleDelay = Math.random() * 5;
        
        star.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}%;
            top: ${y}%;
            background: #ffffff;
            border-radius: 50%;
            opacity: ${opacity};
            box-shadow: 0 0 ${size * 2}px rgba(255, 255, 255, 0.5);
            animation: twinkleSlow ${twinkleDuration}s ease-in-out infinite;
            animation-delay: ${twinkleDelay}s;
            pointer-events: none;
            z-index: 3;
        `;
        
        fragment.appendChild(star);
    }
    
    // ═══════════════════════════════════════════════════════════════════════════
    // LAYER 5: STAR FIELD - MIDDLE LAYER (Medium brightness stars)
    // ═══════════════════════════════════════════════════════════════════════════
    console.log('⭐ Generating mid-layer stars (Layer 2 of 3)...');
    
    const midStarCount = 150;
    const starColors = [
        { color: '#ffffff', name: 'White', temp: 'Hot' },
        { color: '#ffd4a3', name: 'Yellow', temp: 'Medium' },
        { color: '#aabfff', name: 'Blue', temp: 'Very Hot' },
        { color: '#ffcc99', name: 'Orange', temp: 'Cool' },
        { color: '#ff9999', name: 'Red', temp: 'Cold' }
    ];
    
    for (let i = 0; i < midStarCount; i++) {
        const star = document.createElement('div');
        const colorData = starColors[Math.floor(Math.random() * starColors.length)];
        const size = Math.random() * 1.5 + 0.8;
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const opacity = Math.random() * 0.5 + 0.4;
        const twinkleDuration = Math.random() * 3 + 2;
        const twinkleDelay = Math.random() * 4;
        
        star.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}%;
            top: ${y}%;
            background: ${colorData.color};
            border-radius: 50%;
            opacity: ${opacity};
            box-shadow: 
                0 0 ${size * 3}px ${colorData.color},
                0 0 ${size * 5}px ${colorData.color}40;
            animation: twinkleMedium ${twinkleDuration}s ease-in-out infinite;
            animation-delay: ${twinkleDelay}s;
            pointer-events: none;
            z-index: 4;
        `;
        
        fragment.appendChild(star);
    }
    
    // ═══════════════════════════════════════════════════════════════════════════
    // LAYER 6: STAR FIELD - FOREGROUND LAYER (Bright prominent stars)
    // ═══════════════════════════════════════════════════════════════════════════
    console.log('⭐ Generating foreground stars (Layer 3 of 3)...');
    
    const fgStarCount = 80;
    for (let i = 0; i < fgStarCount; i++) {
        const star = document.createElement('div');
        const colorData = starColors[Math.floor(Math.random() * starColors.length)];
        const size = Math.random() * 2.5 + 1.2;
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const opacity = Math.random() * 0.6 + 0.5;
        const twinkleDuration = Math.random() * 2.5 + 1.5;
        const twinkleDelay = Math.random() * 3;
        
        // Create star with cross flare effect
        star.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}%;
            top: ${y}%;
            background: ${colorData.color};
            border-radius: 50%;
            opacity: ${opacity};
            box-shadow: 
                0 0 ${size * 4}px ${colorData.color},
                0 0 ${size * 8}px ${colorData.color}60,
                0 0 ${size * 12}px ${colorData.color}30;
            animation: twinkleFast ${twinkleDuration}s ease-in-out infinite;
            animation-delay: ${twinkleDelay}s;
            pointer-events: none;
            z-index: 5;
        `;
        
        // Add cross flare (lens flare effect)
        const flareH = document.createElement('div');
        flareH.style.cssText = `
            position: absolute;
            width: ${size * 8}px;
            height: ${size * 0.3}px;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            background: linear-gradient(
                to right,
                transparent 0%,
                ${colorData.color}40 20%,
                ${colorData.color}80 50%,
                ${colorData.color}40 80%,
                transparent 100%
            );
            pointer-events: none;
        `;
        
        const flareV = document.createElement('div');
        flareV.style.cssText = `
            position: absolute;
            width: ${size * 0.3}px;
            height: ${size * 8}px;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            background: linear-gradient(
                to bottom,
                transparent 0%,
                ${colorData.color}40 20%,
                ${colorData.color}80 50%,
                ${colorData.color}40 80%,
                transparent 100%
            );
            pointer-events: none;
        `;
        
        star.appendChild(flareH);
        star.appendChild(flareV);
        fragment.appendChild(star);
    }
    
    // ═══════════════════════════════════════════════════════════════════════════
    // LAYER 7: STAR CLUSTERS (Dense groups of stars)
    // ═══════════════════════════════════════════════════════════════════════════
    console.log('✨ Creating star clusters...');
    
    const clusterCount = 5;
    for (let c = 0; c < clusterCount; c++) {
        const clusterX = Math.random() * 80 + 10;
        const clusterY = Math.random() * 80 + 10;
        const clusterStars = Math.floor(Math.random() * 30) + 20;
        const clusterRadius = Math.random() * 80 + 40;
        const clusterColor = starColors[Math.floor(Math.random() * starColors.length)];
        
        for (let s = 0; s < clusterStars; s++) {
            const angle = Math.random() * Math.PI * 2;
            const distance = Math.random() * clusterRadius;
            const star = document.createElement('div');
            const size = Math.random() * 1.2 + 0.4;
            const x = clusterX + (Math.cos(angle) * distance) / 10;
            const y = clusterY + (Math.sin(angle) * distance) / 10;
            const opacity = Math.random() * 0.5 + 0.3;
            const twinkleDuration = Math.random() * 3 + 2;
            
            star.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}%;
                top: ${y}%;
                background: ${clusterColor.color};
                border-radius: 50%;
                opacity: ${opacity};
                box-shadow: 0 0 ${size * 2}px ${clusterColor.color}80;
                animation: twinkleSlow ${twinkleDuration}s ease-in-out infinite;
                animation-delay: ${Math.random() * 2}s;
                pointer-events: none;
                z-index: 4;
            `;
            
            fragment.appendChild(star);
        }
        
        // Add cluster glow
        const clusterGlow = document.createElement('div');
        clusterGlow.style.cssText = `
            position: absolute;
            width: ${clusterRadius * 2}px;
            height: ${clusterRadius * 2}px;
            left: ${clusterX}%;
            top: ${clusterY}%;
            transform: translate(-50%, -50%);
            background: radial-gradient(
                circle,
                ${clusterColor.color}15 0%,
                ${clusterColor.color}08 40%,
                transparent 70%
            );
            border-radius: 50%;
            filter: blur(20px);
            animation: clusterPulse ${Math.random() * 10 + 8}s ease-in-out infinite;
            pointer-events: none;
            z-index: 3;
        `;
        fragment.appendChild(clusterGlow);
    }
    
    // ═══════════════════════════════════════════════════════════════════════════
    // LAYER 8: CONSTELLATIONS (Connected star patterns)
    // ═══════════════════════════════════════════════════════════════════════════
    console.log('🔗 Drawing constellations...');
    
    const constellations = [
        { name: 'Orion', stars: 7, connections: [[0,1], [1,2], [2,3], [3,4], [1,5], [5,6]] },
        { name: 'Ursa Major', stars: 7, connections: [[0,1], [1,2], [2,3], [3,4], [4,5], [5,6]] },
        { name: 'Cassiopeia', stars: 5, connections: [[0,1], [1,2], [2,3], [3,4]] }
    ];
    
    constellations.forEach(constellation => {
        const baseX = Math.random() * 60 + 20;
        const baseY = Math.random() * 60 + 20;
        const scale = Math.random() * 0.5 + 0.7;
        const starPositions = [];
        
        // Create constellation stars
        for (let i = 0; i < constellation.stars; i++) {
            const star = document.createElement('div');
            const offsetX = (Math.random() - 0.5) * 15 * scale;
            const offsetY = (Math.random() - 0.5) * 15 * scale;
            const x = baseX + offsetX;
            const y = baseY + offsetY;
            const size = Math.random() * 2 + 1.5;
            
            starPositions.push({ x, y });
            
            star.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}%;
                top: ${y}%;
                background: #ffffff;
                border-radius: 50%;
                opacity: 0.9;
                box-shadow: 
                    0 0 ${size * 3}px #ffffff,
                    0 0 ${size * 6}px #aabfff80;
                animation: twinkleMedium ${Math.random() * 3 + 2}s ease-in-out infinite;
                pointer-events: none;
                z-index: 6;
            `;
            
            fragment.appendChild(star);
        }
        
        // Draw constellation lines
        constellation.connections.forEach(([start, end]) => {
            if (starPositions[start] && starPositions[end]) {
                const line = document.createElement('div');
                const x1 = starPositions[start].x;
                const y1 = starPositions[start].y;
                const x2 = starPositions[end].x;
                const y2 = starPositions[end].y;
                
                const length = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
                const angle = Math.atan2(y2 - y1, x2 - x1) * (180 / Math.PI);
                
                line.style.cssText = `
                    position: absolute;
                    width: ${length}%;
                    height: 1px;
                    left: ${x1}%;
                    top: ${y1}%;
                    background: linear-gradient(
                        to right,
                        rgba(170, 191, 255, 0.3) 0%,
                        rgba(170, 191, 255, 0.5) 50%,
                        rgba(170, 191, 255, 0.3) 100%
                    );
                    transform-origin: left center;
                    transform: rotate(${angle}deg);
                    animation: constellationGlow ${Math.random() * 8 + 6}s ease-in-out infinite;
                    pointer-events: none;
                    z-index: 5;
                `;
                
                fragment.appendChild(line);
            }
        });
    });
    
    // ═══════════════════════════════════════════════════════════════════════════
    // LAYER 9: SHOOTING STARS (Meteors with trails)
    // ═══════════════════════════════════════════════════════════════════════════
    console.log('💫 Initializing shooting star system...');
    
    function createShootingStar() {
        const meteor = document.createElement('div');
        const startX = Math.random() * 100;
        const startY = Math.random() * 50;
        const size = Math.random() * 2 + 1;
        const length = Math.random() * 80 + 40;
        const angle = Math.random() * 30 + 30;
        const duration = Math.random() * 1 + 0.5;
        const brightness = Math.random() * 0.5 + 0.6;
        
        meteor.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${startX}%;
            top: ${startY}%;
            background: #ffffff;
            border-radius: 50%;
            box-shadow: 
                0 0 ${size * 4}px #ffffff,
                0 0 ${size * 8}px #aabfff;
            opacity: ${brightness};
            animation: shootingStar ${duration}s linear;
            pointer-events: none;
            z-index: 10;
        `;
        
        const trail = document.createElement('div');
        trail.style.cssText = `
            position: absolute;
            width: ${length}px;
            height: ${size * 0.5}px;
            left: 50%;
            top: 50%;
            transform: translate(-100%, -50%) rotate(-${angle}deg);
            background: linear-gradient(
                to left,
                #ffffff00 0%,
                #ffffff80 20%,
                #aabfffcc 50%,
                #ffffff 100%
            );
            border-radius: 50%;
            filter: blur(1px);
            pointer-events: none;
        `;
        
        meteor.appendChild(trail);
        starfield.appendChild(meteor);
        
        setTimeout(() => meteor.remove(), duration * 1000);
    }
    
    setInterval(() => {
        if (Math.random() > 0.7) {
            createShootingStar();
        }
    }, 2000);
    
    setTimeout(() => {
        for (let i = 0; i < 3; i++) {
            setTimeout(() => createShootingStar(), i * 500);
        }
    }, 1000);
    
    // ═══════════════════════════════════════════════════════════════════════════
    // LAYER 10: COSMIC DUST PARTICLES (Tiny floating particles)
    // ═══════════════════════════════════════════════════════════════════════════
    console.log('✨ Adding cosmic dust particles...');
    
    for (let i = 0; i < 100; i++) {
        const dust = document.createElement('div');
        const size = Math.random() * 0.5 + 0.2;
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const opacity = Math.random() * 0.2 + 0.05;
        const floatDuration = Math.random() * 40 + 30;
        const floatDelay = Math.random() * 20;
        
        dust.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}%;
            top: ${y}%;
            background: #ffffff;
            border-radius: 50%;
            opacity: ${opacity};
            animation: dustFloat ${floatDuration}s linear infinite;
            animation-delay: ${floatDelay}s;
            pointer-events: none;
            z-index: 2;
        `;
        
        fragment.appendChild(dust);
    }
    
    // ═══════════════════════════════════════════════════════════════════════════
    // LAYER 11: PULSARS (Rotating beacons)
    // ═══════════════════════════════════════════════════════════════════════════
    console.log('📡 Creating pulsars...');
    
    for (let i = 0; i < 3; i++) {
        const pulsar = document.createElement('div');
        const x = Math.random() * 80 + 10;
        const y = Math.random() * 80 + 10;
        const size = Math.random() * 3 + 2;
        const rotationSpeed = Math.random() * 4 + 2;
        
        pulsar.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}%;
            top: ${y}%;
            background: #00d9ff;
            border-radius: 50%;
            box-shadow: 
                0 0 ${size * 5}px #00d9ff,
                0 0 ${size * 10}px #00d9ffaa;
            animation: pulsarPulse ${rotationSpeed}s ease-in-out infinite;
            pointer-events: none;
            z-index: 7;
        `;
        
        const beam = document.createElement('div');
        beam.style.cssText = `
            position: absolute;
            width: 200px;
            height: 2px;
            left: 50%;
            top: 50%;
            transform-origin: left center;
            background: linear-gradient(
                to right,
                #00d9ff 0%,
                #00d9ff80 30%,
                transparent 70%
            );
            animation: pulsarRotate ${rotationSpeed}s linear infinite;
            pointer-events: none;
            filter: blur(1px);
        `;
        
        pulsar.appendChild(beam);
        fragment.appendChild(pulsar);
    }
    
    // ═══════════════════════════════════════════════════════════════════════════
    // APPEND ALL ELEMENTS TO DOM
    // ═══════════════════════════════════════════════════════════════════════════
    starfield.appendChild(fragment);
    
    // ═══════════════════════════════════════════════════════════════════════════
    // INJECT CSS ANIMATIONS
    // ═══════════════════════════════════════════════════════════════════════════
    const style = document.createElement('style');
    style.setAttribute('data-theme', 'starfield');
    style.textContent = `
        @keyframes nebulaDrift {
            0%, 100% { 
                transform: translate(0, 0) rotate(0deg) scale(1);
                opacity: 0.6;
            }
            33% { 
                transform: translate(30px, -20px) rotate(120deg) scale(1.1);
                opacity: 0.8;
            }
            66% { 
                transform: translate(-20px, 30px) rotate(240deg) scale(0.9);
                opacity: 0.7;
            }
        }
        
        @keyframes milkyWayShimmer {
            0%, 100% { opacity: 0.4; }
            50% { opacity: 0.6; }
        }
        
        @keyframes twinkleSlow {
            0%, 100% { 
                opacity: 0.3;
                transform: scale(1);
            }
            50% { 
                opacity: 1;
                transform: scale(1.3);
            }
        }
        
        @keyframes twinkleMedium {
            0%, 100% { 
                opacity: 0.4;
                transform: scale(1);
            }
            50% { 
                opacity: 1;
                transform: scale(1.4);
            }
        }
        
        @keyframes twinkleFast {
            0%, 100% { 
                opacity: 0.5;
                transform: scale(1);
            }
            50% { 
                opacity: 1;
                transform: scale(1.5);
            }
        }
        
        @keyframes clusterPulse {
            0%, 100% { 
                transform: translate(-50%, -50%) scale(1);
                opacity: 0.3;
            }
            50% { 
                transform: translate(-50%, -50%) scale(1.2);
                opacity: 0.5;
            }
        }
        
        @keyframes constellationGlow {
            0%, 100% { opacity: 0.3; }
            50% { opacity: 0.6; }
        }
        
        @keyframes shootingStar {
            0% {
                transform: translate(0, 0);
                opacity: 0;
            }
            10% {
                opacity: 1;
            }
            90% {
                opacity: 1;
            }
            100% {
                transform: translate(200px, 200px);
                opacity: 0;
            }
        }
        
        @keyframes dustFloat {
            0% { transform: translate(0, 0); }
            25% { transform: translate(20px, -30px); }
            50% { transform: translate(40px, 10px); }
            75% { transform: translate(20px, 40px); }
            100% { transform: translate(0, 0); }
        }
        
        @keyframes pulsarPulse {
            0%, 100% { 
                transform: scale(1);
                opacity: 0.8;
            }
            50% { 
                transform: scale(1.5);
                opacity: 1;
            }
        }
        
        @keyframes pulsarRotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
    `;
    document.head.appendChild(style);
    
    const moon = document.querySelector('.orbital-planet');
    if (moon) moon.style.display = 'block';
    
    console.log('✅ Ultra HD Starfield loaded!');
    console.log('📊 550+ elements created');
}

window.themesLoaded = window.themesLoaded || {};
window.themesLoaded.stars = true;
