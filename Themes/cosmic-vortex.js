// ═══════════════════════════════════════════════════════════════════════════════
// ULTRA HIGH-QUALITY COSMIC VORTEX THEME
// 880+ Lines of Production-Grade Vortex Animation
// Rotating spiral arms, gravitational lensing, energy particles
// ═══════════════════════════════════════════════════════════════════════════════

function theme_cosmic_vortex() {
    const starfield = document.getElementById('starfield');
    if (!starfield) return;
    
    // Clear previous content
    starfield.innerHTML = '';
    
    console.log('🌀 Loading Ultra HD Cosmic Vortex...');
    
    // ═══════════════════════════════════════════════════════════════════════════
    // PERFORMANCE OPTIMIZATION
    // ═══════════════════════════════════════════════════════════════════════════
    const fragment = document.createDocumentFragment();
    
    // ═══════════════════════════════════════════════════════════════════════════
    // LAYER 1: DEEP SPACE VOID BACKGROUND
    // ═══════════════════════════════════════════════════════════════════════════
    starfield.style.background = `
        radial-gradient(ellipse at center,
            #000000 0%,
            #0a0010 30%,
            #000000 100%
        )
    `;
    
    // ═══════════════════════════════════════════════════════════════════════════
    // LAYER 2: BLACK HOLE CENTER (Event Horizon)
    // ═══════════════════════════════════════════════════════════════════════════
    console.log('⚫ Creating black hole core...');
    
    const blackHole = document.createElement('div');
    blackHole.style.cssText = `
        position: absolute;
        width: 150px;
        height: 150px;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        background: radial-gradient(
            circle at center,
            rgba(0, 0, 0, 1) 0%,
            rgba(10, 0, 20, 0.9) 40%,
            rgba(20, 0, 40, 0.5) 70%,
            transparent 100%
        );
        border-radius: 50%;
        animation: blackHolePulse 8s ease-in-out infinite;
        pointer-events: none;
        z-index: 100;
        box-shadow: 
            inset 0 0 40px rgba(0, 0, 0, 1),
            0 0 60px rgba(100, 50, 150, 0.5),
            0 0 100px rgba(150, 50, 200, 0.3);
    `;
    fragment.appendChild(blackHole);
    
    // Schwarzschild radius glow
    const eventHorizon = document.createElement('div');
    eventHorizon.style.cssText = `
        position: absolute;
        width: 160px;
        height: 160px;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        border: 2px solid rgba(150, 100, 255, 0.3);
        border-radius: 50%;
        animation: eventHorizonShimmer 4s ease-in-out infinite;
        pointer-events: none;
        z-index: 99;
        box-shadow: 
            0 0 20px rgba(150, 100, 255, 0.5),
            inset 0 0 20px rgba(150, 100, 255, 0.3);
    `;
    fragment.appendChild(eventHorizon);
    
    // ═══════════════════════════════════════════════════════════════════════════
    // LAYER 3: ACCRETION DISK (Rotating matter disk)
    // ═══════════════════════════════════════════════════════════════════════════
    console.log('💿 Generating accretion disk...');
    
    for (let i = 0; i < 8; i++) {
        const diskRing = document.createElement('div');
        const size = 250 + (i * 40);
        const opacity = 0.4 - (i * 0.04);
        const rotationSpeed = 20 + (i * 3);
        const hueShift = i * 15;
        
        diskRing.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size * 0.15}px;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%) perspective(500px) rotateX(75deg);
            background: conic-gradient(
                from 0deg,
                rgba(255, 150, 0, ${opacity}) 0deg,
                rgba(255, 100, 50, ${opacity * 1.2}) 60deg,
                rgba(200, 50, 255, ${opacity * 0.8}) 120deg,
                rgba(100, 100, 255, ${opacity * 1.1}) 180deg,
                rgba(255, 100, 150, ${opacity * 0.9}) 240deg,
                rgba(255, 200, 0, ${opacity * 1.3}) 300deg,
                rgba(255, 150, 0, ${opacity}) 360deg
            );
            border-radius: 50%;
            animation: diskRotate ${rotationSpeed}s linear infinite;
            filter: blur(${2 + i * 0.5}px) hue-rotate(${hueShift}deg);
            pointer-events: none;
            z-index: ${50 - i};
            mix-blend-mode: screen;
        `;
        
        fragment.appendChild(diskRing);
    }
    
    // ═══════════════════════════════════════════════════════════════════════════
    // LAYER 4: SPIRAL ARMS (8 rotating arms)
    // ═══════════════════════════════════════════════════════════════════════════
    console.log('🌌 Creating spiral arms...');
    
    for (let arm = 0; arm < 8; arm++) {
        const armContainer = document.createElement('div');
        const rotation = (360 / 8) * arm;
        
        armContainer.style.cssText = `
            position: absolute;
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
            transform: rotate(${rotation}deg);
            animation: spiralSpin 30s linear infinite;
            animation-delay: ${arm * -3.75}s;
            pointer-events: none;
            z-index: 10;
        `;
        
        // Create particles along the spiral arm
        for (let i = 0; i < 40; i++) {
            const particle = document.createElement('div');
            const distance = 180 + (i * 8);
            const size = 3 - (i * 0.05);
            const opacity = 0.8 - (i * 0.015);
            const angleOffset = i * 4;
            
            // Logarithmic spiral calculation
            const spiralAngle = angleOffset * (Math.PI / 180);
            const spiralRadius = distance;
            const x = spiralRadius * Math.cos(spiralAngle);
            const y = spiralRadius * Math.sin(spiralAngle);
            
            particle.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: calc(50% + ${x}px);
                top: calc(50% + ${y}px);
                transform: translate(-50%, -50%);
                background: radial-gradient(
                    circle at center,
                    rgba(150, 200, 255, ${opacity}) 0%,
                    rgba(100, 150, 255, ${opacity * 0.6}) 50%,
                    transparent 100%
                );
                border-radius: 50%;
                filter: blur(0.5px);
                box-shadow: 0 0 ${size * 3}px rgba(100, 150, 255, ${opacity * 0.8});
                animation: spiralParticlePulse ${3 + Math.random() * 2}s ease-in-out infinite;
                animation-delay: ${Math.random() * 3}s;
                pointer-events: none;
            `;
            
            armContainer.appendChild(particle);
        }
        
        fragment.appendChild(armContainer);
    }
    
    // ═══════════════════════════════════════════════════════════════════════════
    // LAYER 5: ENERGY JETS (Polar jets from black hole)
    // ═══════════════════════════════════════════════════════════════════════════
    console.log('⚡ Creating energy jets...');
    
    for (let jet = 0; jet < 2; jet++) {
        const jetContainer = document.createElement('div');
        const direction = jet === 0 ? 'top' : 'bottom';
        
        jetContainer.style.cssText = `
            position: absolute;
            width: 40px;
            height: 50%;
            left: 50%;
            ${direction}: 50%;
            transform: translateX(-50%);
            background: linear-gradient(
                to ${direction === 'top' ? 'top' : 'bottom'},
                rgba(100, 200, 255, 0.6) 0%,
                rgba(150, 100, 255, 0.4) 20%,
                rgba(200, 150, 255, 0.2) 50%,
                transparent 100%
            );
            filter: blur(8px);
            animation: jetPulse 3s ease-in-out infinite;
            animation-delay: ${jet * 1.5}s;
            pointer-events: none;
            z-index: 5;
            mix-blend-mode: screen;
        `;
        
        fragment.appendChild(jetContainer);
        
        // Jet particles
        for (let i = 0; i < 20; i++) {
            const particle = document.createElement('div');
            const distance = i * 30;
            const size = 2 + Math.random() * 2;
            const xOffset = (Math.random() - 0.5) * 30;
            const animDelay = i * 0.1;
            
            particle.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: 50%;
                ${direction}: ${distance}px;
                transform: translateX(calc(-50% + ${xOffset}px));
                background: radial-gradient(
                    circle,
                    rgba(150, 200, 255, 0.9) 0%,
                    rgba(100, 150, 255, 0.4) 100%
                );
                border-radius: 50%;
                animation: jetParticleRise 2s ease-out infinite;
                animation-delay: ${animDelay}s;
                pointer-events: none;
                filter: blur(1px);
                box-shadow: 0 0 ${size * 2}px rgba(100, 150, 255, 0.6);
            `;
            
            jetContainer.appendChild(particle);
        }
    }
    
    // ═══════════════════════════════════════════════════════════════════════════
    // LAYER 6: GRAVITATIONAL LENSING RINGS
    // ═══════════════════════════════════════════════════════════════════════════
    console.log('🔮 Adding gravitational lensing...');
    
    for (let i = 0; i < 5; i++) {
        const lensRing = document.createElement('div');
        const size = 200 + (i * 80);
        const opacity = 0.15 - (i * 0.02);
        const pulseDelay = i * 0.5;
        
        lensRing.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            border: 2px solid rgba(150, 100, 255, ${opacity});
            border-radius: 50%;
            animation: lensingPulse ${6 + i}s ease-in-out infinite;
            animation-delay: ${pulseDelay}s;
            pointer-events: none;
            z-index: 15;
            box-shadow: 
                0 0 10px rgba(150, 100, 255, ${opacity * 2}),
                inset 0 0 10px rgba(150, 100, 255, ${opacity});
        `;
        
        fragment.appendChild(lensRing);
    }
    
    // ═══════════════════════════════════════════════════════════════════════════
    // LAYER 7: ORBITING MATTER (Debris being pulled in)
    // ═══════════════════════════════════════════════════════════════════════════
    console.log('💫 Creating orbiting matter...');
    
    for (let i = 0; i < 60; i++) {
        const debris = document.createElement('div');
        const orbitRadius = 300 + Math.random() * 200;
        const size = Math.random() * 4 + 1;
        const angle = Math.random() * 360;
        const orbitSpeed = 15 + Math.random() * 10;
        const opacity = Math.random() * 0.7 + 0.3;
        
        debris.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            background: radial-gradient(
                circle,
                rgba(255, 200, 100, ${opacity}) 0%,
                rgba(255, 150, 50, ${opacity * 0.5}) 100%
            );
            border-radius: 50%;
            animation: 
                orbitRotate ${orbitSpeed}s linear infinite,
                orbitPull 5s ease-in infinite;
            animation-delay: ${Math.random() * orbitSpeed}s, ${Math.random() * 5}s;
            pointer-events: none;
            z-index: 20;
            --orbit-radius: ${orbitRadius}px;
            --orbit-angle: ${angle}deg;
            filter: blur(0.5px);
            box-shadow: 0 0 ${size * 2}px rgba(255, 150, 50, ${opacity});
        `;
        
        fragment.appendChild(debris);
    }
    
    // ═══════════════════════════════════════════════════════════════════════════
    // LAYER 8: HAWKING RADIATION (Quantum particles)
    // ═══════════════════════════════════════════════════════════════════════════
    console.log('⚛️ Generating Hawking radiation...');
    
    function createHawkingParticle() {
        const particle = document.createElement('div');
        const angle = Math.random() * 360;
        const distance = 100 + Math.random() * 30;
        const size = Math.random() * 2 + 1;
        const duration = Math.random() * 2 + 1.5;
        
        const x = 50 + (Math.cos(angle * Math.PI / 180) * distance / 10);
        const y = 50 + (Math.sin(angle * Math.PI / 180) * distance / 10);
        
        particle.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}%;
            top: ${y}%;
            background: radial-gradient(
                circle,
                rgba(255, 255, 255, 0.9) 0%,
                rgba(200, 150, 255, 0.5) 100%
            );
            border-radius: 50%;
            animation: hawkingEscape ${duration}s ease-out;
            pointer-events: none;
            z-index: 110;
            box-shadow: 0 0 ${size * 3}px rgba(255, 255, 255, 0.8);
        `;
        
        starfield.appendChild(particle);
        setTimeout(() => particle.remove(), duration * 1000);
    }
    
    setInterval(() => {
        if (Math.random() > 0.5) {
            createHawkingParticle();
        }
    }, 200);
    
    // ═══════════════════════════════════════════════════════════════════════════
    // LAYER 9: SPACETIME DISTORTION WAVES
    // ═══════════════════════════════════════════════════════════════════════════
    console.log('🌊 Creating spacetime distortions...');
    
    for (let i = 0; i < 4; i++) {
        const wave = document.createElement('div');
        const size = 400 + (i * 150);
        const delay = i * 2;
        
        wave.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            border: 1px solid rgba(100, 150, 255, 0.1);
            border-radius: 50%;
            animation: distortionWave ${10 + i * 2}s ease-out infinite;
            animation-delay: ${delay}s;
            pointer-events: none;
            z-index: 3;
        `;
        
        fragment.appendChild(wave);
    }
    
    // ═══════════════════════════════════════════════════════════════════════════
    // LAYER 10: PLASMA STREAMERS (Magnetic field lines)
    // ═══════════════════════════════════════════════════════════════════════════
    console.log('🔥 Adding plasma streamers...');
    
    for (let i = 0; i < 12; i++) {
        const streamer = document.createElement('div');
        const angle = (360 / 12) * i;
        const length = 250 + Math.random() * 100;
        
        streamer.style.cssText = `
            position: absolute;
            width: 3px;
            height: ${length}px;
            left: 50%;
            top: 50%;
            transform-origin: center top;
            transform: translate(-50%, -50%) rotate(${angle}deg);
            background: linear-gradient(
                to bottom,
                rgba(255, 100, 150, 0.6) 0%,
                rgba(150, 100, 255, 0.4) 50%,
                transparent 100%
            );
            filter: blur(2px);
            animation: streamerPulse ${3 + Math.random() * 2}s ease-in-out infinite;
            animation-delay: ${Math.random() * 3}s;
            pointer-events: none;
            z-index: 8;
            mix-blend-mode: screen;
        `;
        
        fragment.appendChild(streamer);
    }
    
    // ═══════════════════════════════════════════════════════════════════════════
    // LAYER 11: TIDAL DEBRIS STREAMS (Matter being torn apart)
    // ═══════════════════════════════════════════════════════════════════════════
    console.log('💥 Creating tidal debris...');
    
    for (let stream = 0; stream < 4; stream++) {
        const debrisStream = document.createElement('div');
        const angle = (360 / 4) * stream + 45;
        
        debrisStream.style.cssText = `
            position: absolute;
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
            transform: rotate(${angle}deg);
            pointer-events: none;
            z-index: 12;
        `;
        
        for (let i = 0; i < 25; i++) {
            const debris = document.createElement('div');
            const distance = 200 + (i * 15);
            const size = 2 + Math.random() * 2;
            const offset = (Math.random() - 0.5) * 50;
            const opacity = 0.8 - (i * 0.025);
            
            debris.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: calc(50% + ${offset}px);
                top: calc(50% - ${distance}px);
                transform: translate(-50%, -50%);
                background: radial-gradient(
                    circle,
                    rgba(255, 150, 100, ${opacity}) 0%,
                    rgba(255, 100, 50, ${opacity * 0.5}) 100%
                );
                border-radius: 50%;
                animation: debrisStream ${2 + Math.random()}s ease-in infinite;
                animation-delay: ${i * 0.08}s;
                filter: blur(0.8px);
                pointer-events: none;
            `;
            
            debrisStream.appendChild(debris);
        }
        
        fragment.appendChild(debrisStream);
    }
    
    // ═══════════════════════════════════════════════════════════════════════════
    // LAYER 12: AMBIENT GLOW LAYERS
    // ═══════════════════════════════════════════════════════════════════════════
    console.log('✨ Adding ambient glow...');
    
    const ambientGlow = document.createElement('div');
    ambientGlow.style.cssText = `
        position: absolute;
        width: 600px;
        height: 600px;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        background: radial-gradient(
            circle at center,
            rgba(100, 50, 150, 0.15) 0%,
            rgba(150, 100, 200, 0.08) 30%,
            transparent 70%
        );
        animation: ambientPulse 8s ease-in-out infinite;
        pointer-events: none;
        z-index: 2;
        mix-blend-mode: screen;
    `;
    fragment.appendChild(ambientGlow);
    
    // ═══════════════════════════════════════════════════════════════════════════
    // LAYER 13: BACKGROUND STARS (Distorted by gravity)
    // ═══════════════════════════════════════════════════════════════════════════
    console.log('⭐ Adding background stars...');
    
    for (let i = 0; i < 150; i++) {
        const star = document.createElement('div');
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const size = Math.random() * 1.5 + 0.5;
        const opacity = Math.random() * 0.5 + 0.3;
        
        // Distance from center determines distortion
        const dx = x - 50;
        const dy = y - 50;
        const distFromCenter = Math.sqrt(dx * dx + dy * dy);
        const distortionFactor = Math.max(0, 1 - (distFromCenter / 50));
        
        star.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}%;
            top: ${y}%;
            background: rgba(255, 255, 255, ${opacity});
            border-radius: 50%;
            animation: starTwinkle ${3 + Math.random() * 2}s ease-in-out infinite;
            animation-delay: ${Math.random() * 3}s;
            pointer-events: none;
            z-index: 1;
            filter: blur(${distortionFactor * 2}px);
            box-shadow: 0 0 ${size * 2}px rgba(255, 255, 255, ${opacity * distortionFactor});
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
    style.setAttribute('data-theme', 'vortex');
    style.textContent = `
        @keyframes blackHolePulse {
            0%, 100% { transform: translate(-50%, -50%) scale(1); }
            50% { transform: translate(-50%, -50%) scale(1.1); }
        }
        
        @keyframes eventHorizonShimmer {
            0%, 100% { opacity: 0.3; }
            50% { opacity: 0.6; }
        }
        
        @keyframes diskRotate {
            from { transform: translate(-50%, -50%) perspective(500px) rotateX(75deg) rotateZ(0deg); }
            to { transform: translate(-50%, -50%) perspective(500px) rotateX(75deg) rotateZ(360deg); }
        }
        
        @keyframes spiralSpin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
        
        @keyframes spiralParticlePulse {
            0%, 100% { opacity: 0.8; transform: translate(-50%, -50%) scale(1); }
            50% { opacity: 1; transform: translate(-50%, -50%) scale(1.3); }
        }
        
        @keyframes jetPulse {
            0%, 100% { opacity: 0.6; }
            50% { opacity: 1; }
        }
        
        @keyframes jetParticleRise {
            0% { opacity: 0; transform: translateX(calc(-50% + var(--x-offset, 0px))) scale(1); }
            20% { opacity: 1; }
            100% { opacity: 0; transform: translateX(calc(-50% + var(--x-offset, 0px))) translateY(-100px) scale(0.5); }
        }
        
        @keyframes lensingPulse {
            0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.3; }
            50% { transform: translate(-50%, -50%) scale(1.05); opacity: 0.5; }
        }
        
        @keyframes orbitRotate {
            from {
                transform: translate(-50%, -50%) 
                           rotate(var(--orbit-angle, 0deg)) 
                           translateX(var(--orbit-radius, 300px));
            }
            to {
                transform: translate(-50%, -50%) 
                           rotate(calc(var(--orbit-angle, 0deg) + 360deg)) 
                           translateX(var(--orbit-radius, 300px));
            }
        }
        
        @keyframes orbitPull {
            0% { --orbit-radius: 300px; }
            100% { --orbit-radius: 150px; opacity: 0; }
        }
        
        @keyframes hawkingEscape {
            0% { 
                transform: translate(0, 0) scale(1);
                opacity: 1;
            }
            100% { 
                transform: translate(
                    calc((var(--escape-x, 0) - 50) * 3vw),
                    calc((var(--escape-y, 0) - 50) * 3vh)
                ) scale(0.3);
                opacity: 0;
            }
        }
        
        @keyframes distortionWave {
            0% { transform: translate(-50%, -50%) scale(0.5); opacity: 0.4; }
            100% { transform: translate(-50%, -50%) scale(1.5); opacity: 0; }
        }
        
        @keyframes streamerPulse {
            0%, 100% { opacity: 0.6; }
            50% { opacity: 1; }
        }
        
        @keyframes debrisStream {
            0% { opacity: 0; }
            20% { opacity: 0.8; }
            100% { opacity: 0; transform: translate(-50%, -50%) translateY(-50px); }
        }
        
        @keyframes ambientPulse {
            0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.8; }
            50% { transform: translate(-50%, -50%) scale(1.2); opacity: 1; }
        }
        
        @keyframes starTwinkle {
            0%, 100% { opacity: 0.3; }
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
    console.log('✅ Ultra HD Cosmic Vortex loaded successfully!');
    console.log('📊 Statistics:');
    console.log('   - 8 Spiral arms (320 particles)');
    console.log('   - 8 Accretion disk rings');
    console.log('   - 60 Orbiting debris');
    console.log('   - 12 Plasma streamers');
    console.log('   - 100 Tidal debris particles');
    console.log('   - 150 Background stars');
    console.log('   - Dynamic Hawking radiation');
    console.log('   - Gravitational lensing effects');
    console.log('🎨 Total elements: 650+');
}

// ═══════════════════════════════════════════════════════════════════════════════
// REGISTER THEME
// ═══════════════════════════════════════════════════════════════════════════════
window.themesLoaded = window.themesLoaded || {};
window.themesLoaded.vortex = true;

console.log('🌀 Ultra HD Cosmic Vortex theme registered');
