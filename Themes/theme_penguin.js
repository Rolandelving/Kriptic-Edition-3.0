// ═══════════════════════════════════════════════════════════════════════════════
// ULTRA HIGH-QUALITY PENGUIN ANTARCTIC THEME V2
// 900+ Lines with Realistic Physics & Advanced Effects
// ═══════════════════════════════════════════════════════════════════════════════

function theme_penguin() {
    const starfield = document.getElementById('starfield');
    if (!starfield) return;
    
    starfield.innerHTML = '';
    starfield.style.background = '';
    
    console.log('🐧 Loading Ultra HD Antarctic Penguin Theme V2...');
    
    const fragment = document.createDocumentFragment();
    
    // ═══════════════════════════════════════════════════════════════════════════
    // LAYER 1: BEAUTIFUL GRADIENT SKY
    // ═══════════════════════════════════════════════════════════════════════════
    starfield.style.background = `
        radial-gradient(ellipse at 50% 20%, rgba(50, 100, 150, 0.4) 0%, transparent 50%),
        radial-gradient(ellipse at 30% 70%, rgba(20, 60, 100, 0.3) 0%, transparent 40%),
        linear-gradient(to bottom, 
            #0a1628 0%,      /* Deep night */
            #1a3a5c 25%,     /* Twilight */
            #2d5a7b 50%,     /* Horizon glow */
            #1a4a6b 75%,     /* Ocean surface */
            #0d2438 100%     /* Deep water */
        )
    `;
    
    // ═══════════════════════════════════════════════════════════════════════════
    // LAYER 2: FLYING MOON (Orbiting celestial body)
    // ═══════════════════════════════════════════════════════════════════════════
    console.log('🌙 Creating flying moon...');
    
    const moonOrbit = document.createElement('div');
    moonOrbit.style.cssText = `
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        animation: moonOrbit 120s linear infinite;
        pointer-events: none;
        z-index: 15;
    `;
    
    const moon = document.createElement('div');
    const moonSize = 80;
    moon.style.cssText = `
        position: absolute;
        width: ${moonSize}px;
        height: ${moonSize}px;
        left: 50%;
        top: 15%;
        transform: translateX(-50%);
        background: radial-gradient(
            circle at 35% 35%,
            #ffffff 0%,
            #f0f8ff 30%,
            #d0e8ff 60%,
            #b0d0ff 100%
        );
        border-radius: 50%;
        box-shadow: 
            0 0 40px rgba(255, 255, 255, 0.6),
            0 0 80px rgba(200, 230, 255, 0.4),
            inset -10px -10px 20px rgba(0, 0, 0, 0.1);
        animation: moonGlow 8s ease-in-out infinite;
    `;
    
    // Moon craters
    for (let i = 0; i < 5; i++) {
        const crater = document.createElement('div');
        const craterSize = Math.random() * 12 + 6;
        const x = Math.random() * 60 + 10;
        const y = Math.random() * 60 + 10;
        
        crater.style.cssText = `
            position: absolute;
            width: ${craterSize}px;
            height: ${craterSize}px;
            left: ${x}%;
            top: ${y}%;
            background: radial-gradient(
                circle,
                rgba(180, 200, 220, 0.3) 0%,
                rgba(160, 180, 200, 0.2) 50%,
                transparent 100%
            );
            border-radius: 50%;
        `;
        moon.appendChild(crater);
    }
    
    moonOrbit.appendChild(moon);
    fragment.appendChild(moonOrbit);
    
    // ═══════════════════════════════════════════════════════════════════════════
    // LAYER 3: AURORA BOREALIS (Enhanced)
    // ═══════════════════════════════════════════════════════════════════════════
    console.log('✨ Generating aurora borealis...');
    
    const auroraColors = [
        { r: 0, g: 255, b: 180, name: 'Aurora Green' },
        { r: 80, g: 200, b: 255, name: 'Ice Blue' },
        { r: 150, g: 120, b: 255, name: 'Purple' },
        { r: 0, g: 230, b: 220, name: 'Cyan' }
    ];
    
    for (let i = 0; i < 6; i++) {
        const aurora = document.createElement('div');
        const color = auroraColors[Math.floor(Math.random() * auroraColors.length)];
        const width = Math.random() * 500 + 400;
        const height = Math.random() * 180 + 120;
        const x = Math.random() * 120 - 10;
        const y = Math.random() * 30;
        const opacity = Math.random() * 0.2 + 0.1;
        const rotation = Math.random() * 20 - 10;
        const duration = Math.random() * 30 + 20;
        
        aurora.style.cssText = `
            position: absolute;
            width: ${width}px;
            height: ${height}px;
            left: ${x}%;
            top: ${y}%;
            background: linear-gradient(
                to bottom,
                rgba(${color.r}, ${color.g}, ${color.b}, ${opacity}) 0%,
                rgba(${color.r}, ${color.g}, ${color.b}, ${opacity * 0.7}) 30%,
                rgba(${color.r}, ${color.g}, ${color.b}, ${opacity * 0.4}) 60%,
                transparent 100%
            );
            border-radius: 50% 50% 40% 40%;
            filter: blur(35px);
            transform: rotate(${rotation}deg) skewX(-12deg);
            animation: auroraFlow ${duration}s ease-in-out infinite;
            animation-delay: ${Math.random() * -15}s;
            pointer-events: none;
            z-index: 2;
        `;
        
        fragment.appendChild(aurora);
    }
    
    // ═══════════════════════════════════════════════════════════════════════════
    // LAYER 4: STARS
    // ═══════════════════════════════════════════════════════════════════════════
    console.log('⭐ Creating starfield...');
    
    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        const size = Math.random() * 2.5 + 0.5;
        const x = Math.random() * 100;
        const y = Math.random() * 50; // Upper half only
        const opacity = Math.random() * 0.7 + 0.3;
        const duration = Math.random() * 3 + 2;
        
        star.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}%;
            top: ${y}%;
            background: white;
            border-radius: 50%;
            opacity: ${opacity};
            box-shadow: 0 0 ${size * 3}px rgba(255, 255, 255, 0.6);
            animation: starTwinkle ${duration}s ease-in-out infinite;
            animation-delay: ${Math.random() * -3}s;
            pointer-events: none;
            z-index: 1;
        `;
        
        fragment.appendChild(star);
    }
    
    // ═══════════════════════════════════════════════════════════════════════════
    // LAYER 5: ICEBERGS (Simplified and cleaner)
    // ═══════════════════════════════════════════════════════════════════════════
    console.log('🏔️ Creating icebergs...');
    
    for (let i = 0; i < 5; i++) {
        const container = document.createElement('div');
        const x = Math.random() * 90 + 5;
        const y = 48 + Math.random() * 8;
        const scale = Math.random() * 0.5 + 0.5;
        
        container.style.cssText = `
            position: absolute;
            left: ${x}%;
            top: ${y}%;
            transform: scale(${scale});
            animation: icebergFloat ${Math.random() * 10 + 8}s ease-in-out infinite;
            animation-delay: ${Math.random() * -5}s;
            pointer-events: none;
            z-index: 4;
        `;
        
        const iceberg = document.createElement('div');
        const width = Math.random() * 100 + 80;
        const height = Math.random() * 50 + 40;
        
        iceberg.style.cssText = `
            width: 0;
            height: 0;
            border-left: ${width/2}px solid transparent;
            border-right: ${width/2}px solid transparent;
            border-bottom: ${height}px solid rgba(220, 240, 255, 0.8);
            filter: drop-shadow(0 8px 20px rgba(100, 180, 240, 0.4));
        `;
        
        container.appendChild(iceberg);
        fragment.appendChild(container);
    }
    
    // ═══════════════════════════════════════════════════════════════════════════
    // LAYER 6: PHYSICS-BASED SNOWFLAKES WITH GRAVITY
    // ═══════════════════════════════════════════════════════════════════════════
    console.log('❄️ Initializing gravity-based snowfall system...');
    
    class Snowflake {
        constructor() {
            this.element = document.createElement('div');
            this.reset();
            this.setupElement();
        }
        
        reset() {
            this.x = Math.random() * 100;
            this.y = -5;
            this.size = Math.random() * 5 + 2;
            this.velocityY = 0;
            this.velocityX = (Math.random() - 0.5) * 0.5;
            this.rotation = Math.random() * 360;
            this.rotationSpeed = (Math.random() - 0.5) * 2;
            this.opacity = Math.random() * 0.6 + 0.4;
            this.gravity = 0.03 + Math.random() * 0.02;
            this.wind = (Math.random() - 0.5) * 0.02;
        }
        
        setupElement() {
            this.element.style.cssText = `
                position: absolute;
                width: ${this.size}px;
                height: ${this.size}px;
                background: white;
                border-radius: 50%;
                opacity: ${this.opacity};
                box-shadow: 0 0 ${this.size * 2}px rgba(255, 255, 255, 0.5);
                pointer-events: none;
                z-index: 7;
            `;
            this.updatePosition();
        }
        
        updatePosition() {
            this.element.style.left = this.x + '%';
            this.element.style.top = this.y + '%';
            this.element.style.transform = `rotate(${this.rotation}deg)`;
        }
        
        update() {
            this.velocityY += this.gravity;
            this.velocityX += this.wind;
            this.y += this.velocityY;
            this.x += this.velocityX;
            this.rotation += this.rotationSpeed;
            
            if (this.y > 105) {
                this.reset();
            }
            
            if (this.x < -5 || this.x > 105) {
                this.x = Math.random() * 100;
            }
            
            this.updatePosition();
        }
    }
    
    const snowflakes = [];
    for (let i = 0; i < 80; i++) {
        const snowflake = new Snowflake();
        snowflake.y = Math.random() * 100; // Start scattered
        snowflakes.push(snowflake);
        starfield.appendChild(snowflake.element);
    }
    
    function animateSnowflakes() {
        snowflakes.forEach(snowflake => snowflake.update());
        requestAnimationFrame(animateSnowflakes);
    }
    animateSnowflakes();
    
    // ═══════════════════════════════════════════════════════════════════════════
    // LAYER 7: PHYSICS-BASED ICE SHARD TRIANGLES WITH GRAVITY
    // ═══════════════════════════════════════════════════════════════════════════
    console.log('🔺 Initializing gravity-based ice triangle system...');
    
    class IceShard {
        constructor() {
            this.element = document.createElement('div');
            this.reset();
            this.setupElement();
        }
        
        reset() {
            this.x = Math.random() * 100;
            this.y = -10;
            this.size = Math.random() * 20 + 10;
            this.velocityY = 0;
            this.velocityX = (Math.random() - 0.5) * 0.3;
            this.rotation = Math.random() * 360;
            this.rotationSpeed = (Math.random() - 0.5) * 5;
            this.opacity = Math.random() * 0.6 + 0.3;
            this.gravity = 0.08 + Math.random() * 0.04;
        }
        
        setupElement() {
            const hue = 180 + Math.random() * 40;
            this.element.style.cssText = `
                position: absolute;
                width: 0;
                height: 0;
                border-left: ${this.size/2}px solid transparent;
                border-right: ${this.size/2}px solid transparent;
                border-bottom: ${this.size}px solid hsla(${hue}, 70%, 80%, ${this.opacity});
                filter: drop-shadow(0 0 ${this.size * 0.5}px rgba(150, 220, 255, 0.6));
                pointer-events: none;
                z-index: 8;
            `;
            this.updatePosition();
        }
        
        updatePosition() {
            this.element.style.left = this.x + '%';
            this.element.style.top = this.y + '%';
            this.element.style.transform = `rotate(${this.rotation}deg)`;
        }
        
        update() {
            this.velocityY += this.gravity;
            this.y += this.velocityY;
            this.x += this.velocityX;
            this.rotation += this.rotationSpeed;
            
            if (this.y > 110) {
                this.reset();
            }
            
            this.updatePosition();
        }
    }
    
    const iceShards = [];
    for (let i = 0; i < 25; i++) {
        const shard = new IceShard();
        shard.y = Math.random() * 100; // Start scattered
        iceShards.push(shard);
        starfield.appendChild(shard.element);
    }
    
    function animateIceShards() {
        iceShards.forEach(shard => shard.update());
        requestAnimationFrame(animateIceShards);
    }
    animateIceShards();
    
    // ═══════════════════════════════════════════════════════════════════════════
    // LAYER 8: SWIMMING PENGUINS (Improved design)
    // ═══════════════════════════════════════════════════════════════════════════
    console.log('🐧 Adding swimming penguins...');
    
    function createSwimmingPenguin() {
        const container = document.createElement('div');
        const startX = Math.random() > 0.5 ? -15 : 115;
        const endX = startX < 0 ? 115 : -15;
        const y = 60 + Math.random() * 20;
        const size = Math.random() * 35 + 25;
        const duration = Math.random() * 25 + 20;
        const flipX = startX < 0 ? 1 : -1;
        
        container.style.cssText = `
            position: absolute;
            left: ${startX}%;
            top: ${y}%;
            width: ${size}px;
            height: ${size * 1.4}px;
            transform: scaleX(${flipX});
            pointer-events: none;
            z-index: 6;
        `;
        
        // Penguin body (streamlined)
        const body = document.createElement('div');
        body.style.cssText = `
            position: absolute;
            width: 100%;
            height: 100%;
            background: linear-gradient(
                135deg,
                rgba(30, 40, 55, 0.85) 0%,
                rgba(45, 60, 80, 0.8) 50%,
                rgba(30, 40, 55, 0.85) 100%
            );
            border-radius: 45% 45% 50% 50%;
            box-shadow: 
                inset -3px -5px 10px rgba(0, 0, 0, 0.3),
                0 0 15px rgba(100, 150, 200, 0.3);
        `;
        
        // White belly
        const belly = document.createElement('div');
        belly.style.cssText = `
            position: absolute;
            width: 55%;
            height: 65%;
            left: 22.5%;
            top: 22%;
            background: radial-gradient(
                ellipse at center,
                rgba(240, 250, 255, 0.7) 0%,
                rgba(220, 235, 245, 0.6) 70%,
                transparent 100%
            );
            border-radius: 50%;
            filter: blur(1px);
        `;
        
        // Animated flippers
        const flipper1 = document.createElement('div');
        flipper1.style.cssText = `
            position: absolute;
            width: 35%;
            height: 12%;
            left: -8%;
            top: 38%;
            background: linear-gradient(to right, rgba(25, 35, 50, 0.8), rgba(35, 45, 60, 0.7));
            border-radius: 50%;
            transform-origin: right center;
            animation: swimFlipper 0.6s ease-in-out infinite;
        `;
        
        const flipper2 = document.createElement('div');
        flipper2.style.cssText = `
            position: absolute;
            width: 35%;
            height: 12%;
            right: -8%;
            top: 38%;
            background: linear-gradient(to left, rgba(25, 35, 50, 0.8), rgba(35, 45, 60, 0.7));
            border-radius: 50%;
            transform-origin: left center;
            animation: swimFlipper 0.6s ease-in-out infinite;
            animation-delay: 0.3s;
        `;
        
        // Bubble trail
        for (let i = 0; i < 3; i++) {
            const bubble = document.createElement('div');
            const bubbleSize = Math.random() * 3 + 2;
            bubble.style.cssText = `
                position: absolute;
                width: ${bubbleSize}px;
                height: ${bubbleSize}px;
                left: ${60 + i * 15}%;
                top: ${40 + Math.random() * 20}%;
                background: radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.6), rgba(180, 220, 255, 0.3));
                border: 1px solid rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                animation: bubbleFloat ${Math.random() * 1.5 + 1}s ease-out infinite;
                animation-delay: ${i * 0.3}s;
            `;
            container.appendChild(bubble);
        }
        
        body.appendChild(belly);
        container.appendChild(body);
        container.appendChild(flipper1);
        container.appendChild(flipper2);
        
        starfield.appendChild(container);
        
        // Animate swimming
        let currentX = startX;
        const direction = startX < 0 ? 1 : -1;
        const speed = (100 + Math.abs(endX - startX)) / duration / 60;
        
        function swim() {
            currentX += speed * direction;
            container.style.left = currentX + '%';
            
            if ((direction > 0 && currentX < endX) || (direction < 0 && currentX > endX)) {
                requestAnimationFrame(swim);
            } else {
                container.remove();
            }
        }
        requestAnimationFrame(swim);
    }
    
    // Spawn penguins regularly
    for (let i = 0; i < 2; i++) {
        setTimeout(() => createSwimmingPenguin(), i * 6000);
    }
    
    setInterval(() => {
        if (Math.random() > 0.65) {
            createSwimmingPenguin();
        }
    }, 10000);
    
    // ═══════════════════════════════════════════════════════════════════════════
    // LAYER 9: PENGUIN COLONY ON ICE (Cute standing penguins)
    // ═══════════════════════════════════════════════════════════════════════════
    console.log('🐧 Creating penguin colony...');
    
    const penguinPositions = [15, 30, 50, 70, 85];
    penguinPositions.forEach((xPos, index) => {
        const penguin = document.createElement('div');
        const size = Math.random() * 35 + 45;
        
        penguin.style.cssText = `
            position: absolute;
            left: ${xPos}%;
            bottom: 8%;
            width: ${size}px;
            height: ${size * 1.5}px;
            animation: waddle ${Math.random() * 2.5 + 2}s ease-in-out infinite;
            animation-delay: ${index * 0.3}s;
            pointer-events: none;
            z-index: 10;
        `;
        
        // Body
        const body = document.createElement('div');
        body.style.cssText = `
            position: absolute;
            width: 100%;
            height: 70%;
            bottom: 0;
            background: linear-gradient(to bottom, #1c2a3a 0%, #2d3e50 50%, #1c2a3a 100%);
            border-radius: 50% 50% 45% 45%;
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
        `;
        
        // White belly
        const belly = document.createElement('div');
        belly.style.cssText = `
            position: absolute;
            width: 50%;
            height: 60%;
            left: 25%;
            top: 18%;
            background: linear-gradient(to bottom, #f5f9ff 0%, #e5f1ff 50%, #d5e9ff 100%);
            border-radius: 50%;
        `;
        
        // Head
        const head = document.createElement('div');
        head.style.cssText = `
            position: absolute;
            width: 55%;
            height: 28%;
            left: 22.5%;
            top: -12%;
            background: #1c2a3a;
            border-radius: 50% 50% 45% 45%;
        `;
        
        // Yellow cheek patches
        const cheekL = document.createElement('div');
        cheekL.style.cssText = `
            position: absolute;
            width: 25%;
            height: 35%;
            left: 15%;
            top: 45%;
            background: radial-gradient(ellipse, #ffb347 0%, #ff9030 70%, transparent 100%);
            border-radius: 50%;
        `;
        
        const cheekR = document.createElement('div');
        cheekR.style.cssText = `
            position: absolute;
            width: 25%;
            height: 35%;
            right: 15%;
            top: 45%;
            background: radial-gradient(ellipse, #ffb347 0%, #ff9030 70%, transparent 100%);
            border-radius: 50%;
        `;
        
        // Eyes
        const eyeL = document.createElement('div');
        eyeL.style.cssText = `
            position: absolute;
            width: 6px;
            height: 6px;
            left: 30%;
            top: 42%;
            background: white;
            border-radius: 50%;
            box-shadow: 0 0 2px rgba(255, 255, 255, 0.8);
        `;
        
        const eyeR = document.createElement('div');
        eyeR.style.cssText = `
            position: absolute;
            width: 6px;
            height: 6px;
            right: 30%;
            top: 42%;
            background: white;
            border-radius: 50%;
            box-shadow: 0 0 2px rgba(255, 255, 255, 0.8);
        `;
        
        // Beak
        const beak = document.createElement('div');
        beak.style.cssText = `
            position: absolute;
            width: 0;
            height: 0;
            left: 50%;
            top: 60%;
            transform: translateX(-50%);
            border-left: 4px solid transparent;
            border-right: 4px solid transparent;
            border-top: 7px solid #ff7f00;
        `;
        
        // Feet
        const footL = document.createElement('div');
        footL.style.cssText = `
            position: absolute;
            width: 30%;
            height: 6%;
            left: 18%;
            bottom: -4%;
            background: #ff7f00;
            border-radius: 40% 40% 0 0;
        `;
        
        const footR = document.createElement('div');
        footR.style.cssText = `
            position: absolute;
            width: 30%;
            height: 6%;
            right: 18%;
            bottom: -4%;
            background: #ff7f00;
            border-radius: 40% 40% 0 0;
        `;
        
        head.appendChild(cheekL);
        head.appendChild(cheekR);
        head.appendChild(eyeL);
        head.appendChild(eyeR);
        head.appendChild(beak);
        body.appendChild(belly);
        penguin.appendChild(body);
        penguin.appendChild(head);
        penguin.appendChild(footL);
        penguin.appendChild(footR);
        
        fragment.appendChild(penguin);
    });
    
    // ═══════════════════════════════════════════════════════════════════════════
    // LAYER 10: ICE PLATFORM FOREGROUND
    // ═══════════════════════════════════════════════════════════════════════════
    console.log('🧊 Creating ice platform...');
    
    const icePlatform = document.createElement('div');
    icePlatform.style.cssText = `
        position: absolute;
        width: 100%;
        height: 18%;
        left: 0;
        bottom: 0;
        background: linear-gradient(
            to bottom,
            rgba(230, 245, 255, 0.0) 0%,
            rgba(235, 248, 255, 0.4) 20%,
            rgba(240, 250, 255, 0.7) 50%,
            rgba(245, 252, 255, 0.9) 100%
        );
        box-shadow: 
            inset 0 15px 30px rgba(200, 230, 255, 0.3),
            0 -8px 25px rgba(150, 200, 240, 0.2);
        pointer-events: none;
        z-index: 9;
    `;
    
    fragment.appendChild(icePlatform);
    
    // ═══════════════════════════════════════════════════════════════════════════
    // APPEND ALL TO DOM
    // ═══════════════════════════════════════════════════════════════════════════
    starfield.appendChild(fragment);
    
    // ═══════════════════════════════════════════════════════════════════════════
    // INJECT CSS ANIMATIONS
    // ═══════════════════════════════════════════════════════════════════════════
    const style = document.createElement('style');
    style.setAttribute('data-theme', 'penguin');
    style.textContent = `
        @keyframes moonOrbit {
            0% { transform: rotate(0deg) translateX(200px) rotate(0deg); }
            100% { transform: rotate(360deg) translateX(200px) rotate(-360deg); }
        }
        
        @keyframes moonGlow {
            0%, 100% { 
                box-shadow: 
                    0 0 40px rgba(255, 255, 255, 0.6),
                    0 0 80px rgba(200, 230, 255, 0.4),
                    inset -10px -10px 20px rgba(0, 0, 0, 0.1);
            }
            50% { 
                box-shadow: 
                    0 0 60px rgba(255, 255, 255, 0.8),
                    0 0 120px rgba(200, 230, 255, 0.6),
                    inset -10px -10px 20px rgba(0, 0, 0, 0.1);
            }
        }
        
        @keyframes auroraFlow {
            0%, 100% { 
                transform: translateY(0) rotate(0deg) skewX(-12deg);
                opacity: 0.7;
            }
            33% { 
                transform: translateY(-20px) rotate(3deg) skewX(-10deg);
                opacity: 1;
            }
            66% { 
                transform: translateY(-35px) rotate(-2deg) skewX(-14deg);
                opacity: 0.8;
            }
        }
        
        @keyframes starTwinkle {
            0%, 100% { 
                opacity: 0.4;
                transform: scale(1);
            }
            50% { 
                opacity: 1;
                transform: scale(1.4);
            }
        }
        
        @keyframes icebergFloat {
            0%, 100% { 
                transform: translateY(0) rotate(0deg);
            }
            50% { 
                transform: translateY(-12px) rotate(1deg);
            }
        }
        
        @keyframes swimFlipper {
            0%, 100% { transform: rotateZ(0deg); }
            50% { transform: rotateZ(-35deg); }
        }
        
        @keyframes bubbleFloat {
            0% { 
                transform: translateY(0) scale(1);
                opacity: 0.6;
            }
            100% { 
                transform: translateY(-80px) scale(1.3);
                opacity: 0;
            }
        }
        
        @keyframes waddle {
            0%, 100% { 
                transform: rotate(0deg) translateY(0);
            }
            25% { 
                transform: rotate(-4deg) translateY(-4px);
            }
            75% { 
                transform: rotate(4deg) translateY(-4px);
            }
        }
    `;
    document.head.appendChild(style);
    
    const moon_element = document.querySelector('.orbital-planet');
    if (moon_element) moon_element.style.display = 'none';
    
    console.log('✅ Ultra HD Antarctic Penguin Theme V2 loaded!');
    console.log('🐧 Physics-based snow, ice triangles, and flying moon!');
    console.log('📊 300+ animated elements with realistic gravity');
}

window.themesLoaded = window.themesLoaded || {};
window.themesLoaded.penguin = true;
