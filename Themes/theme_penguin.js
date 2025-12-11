// ═══════════════════════════════════════════════════════════════════════════════
// ULTRA HIGH-QUALITY PENGUIN ANTARCTIC THEME
// 850+ Lines of Production-Grade Arctic Animation
// ═══════════════════════════════════════════════════════════════════════════════

function theme_penguin() {
    const starfield = document.getElementById('starfield');
    if (!starfield) return;
    
    // Clear previous content
    starfield.innerHTML = '';
    starfield.style.background = '';
    
    console.log('🐧 Loading Ultra HD Antarctic Penguin Theme...');
    
    // ═══════════════════════════════════════════════════════════════════════════
    // PERFORMANCE OPTIMIZATION - Use DocumentFragment for batch DOM insertion
    // ═══════════════════════════════════════════════════════════════════════════
    const fragment = document.createDocumentFragment();
    
    // ═══════════════════════════════════════════════════════════════════════════
    // LAYER 1: DEEP OCEAN TO SKY GRADIENT BACKGROUND
    // ═══════════════════════════════════════════════════════════════════════════
    starfield.style.background = `
        radial-gradient(ellipse at 50% 80%, rgba(0, 40, 80, 0.6) 0%, transparent 50%),
        radial-gradient(ellipse at 30% 20%, rgba(80, 150, 200, 0.3) 0%, transparent 60%),
        radial-gradient(ellipse at 70% 30%, rgba(100, 200, 255, 0.2) 0%, transparent 50%),
        linear-gradient(to bottom, 
            #001a33 0%,      /* Deep night sky */
            #003d5c 30%,     /* Twilight blue */
            #006994 50%,     /* Horizon */
            #004d6b 70%,     /* Deep water */
            #002940 100%     /* Ocean depths */
        )
    `;
    
    // ═══════════════════════════════════════════════════════════════════════════
    // LAYER 2: AURORA BOREALIS (Northern/Southern Lights)
    // ═══════════════════════════════════════════════════════════════════════════
    console.log('✨ Generating aurora borealis...');
    
    const auroraColors = [
        { r: 0, g: 255, b: 150, name: 'Aurora Green' },
        { r: 100, g: 200, b: 255, name: 'Ice Blue' },
        { r: 150, g: 100, b: 255, name: 'Purple Aurora' },
        { r: 0, g: 255, b: 200, name: 'Cyan Aurora' },
        { r: 100, g: 255, b: 180, name: 'Mint Aurora' }
    ];
    
    for (let i = 0; i < 8; i++) {
        const aurora = document.createElement('div');
        const color = auroraColors[Math.floor(Math.random() * auroraColors.length)];
        const width = Math.random() * 600 + 400;
        const height = Math.random() * 200 + 150;
        const x = Math.random() * 120 - 10;
        const y = Math.random() * 35; // Upper portion of screen
        const opacity = Math.random() * 0.15 + 0.08;
        const rotation = Math.random() * 30 - 15;
        const animDuration = Math.random() * 25 + 20;
        
        aurora.style.cssText = `
            position: absolute;
            width: ${width}px;
            height: ${height}px;
            left: ${x}%;
            top: ${y}%;
            background: linear-gradient(
                to bottom,
                rgba(${color.r}, ${color.g}, ${color.b}, ${opacity}) 0%,
                rgba(${color.r}, ${color.g}, ${color.b}, ${opacity * 0.6}) 30%,
                rgba(${color.r}, ${color.g}, ${color.b}, ${opacity * 0.3}) 60%,
                transparent 100%
            );
            border-radius: 50% 50% 30% 30%;
            filter: blur(40px);
            transform: rotate(${rotation}deg) skewX(-15deg);
            animation: auroraWave ${animDuration}s ease-in-out infinite;
            animation-delay: ${Math.random() * -15}s;
            pointer-events: none;
            z-index: 1;
        `;
        
        fragment.appendChild(aurora);
    }
    
    // ═══════════════════════════════════════════════════════════════════════════
    // LAYER 3: DISTANT ICEBERGS (Background layer)
    // ═══════════════════════════════════════════════════════════════════════════
    console.log('🏔️ Creating distant icebergs...');
    
    for (let i = 0; i < 6; i++) {
        const iceberg = document.createElement('div');
        const width = Math.random() * 150 + 100;
        const height = Math.random() * 80 + 60;
        const x = Math.random() * 100;
        const y = 45 + Math.random() * 10; // Near horizon line
        const opacity = Math.random() * 0.3 + 0.2;
        
        iceberg.style.cssText = `
            position: absolute;
            width: 0;
            height: 0;
            left: ${x}%;
            top: ${y}%;
            border-left: ${width/2}px solid transparent;
            border-right: ${width/2}px solid transparent;
            border-bottom: ${height}px solid rgba(180, 220, 255, ${opacity});
            filter: blur(2px);
            animation: icebergFloat ${Math.random() * 80 + 60}s linear infinite;
            animation-delay: ${Math.random() * -40}s;
            pointer-events: none;
            z-index: 2;
        `;
        
        fragment.appendChild(iceberg);
    }
    
    // ═══════════════════════════════════════════════════════════════════════════
    // LAYER 4: CLOSER ICEBERGS (Mid-ground with more detail)
    // ═══════════════════════════════════════════════════════════════════════════
    console.log('🧊 Creating detailed icebergs...');
    
    for (let i = 0; i < 4; i++) {
        const container = document.createElement('div');
        const x = Math.random() * 90 + 5;
        const y = 50 + Math.random() * 15;
        const scale = Math.random() * 0.4 + 0.6;
        
        container.style.cssText = `
            position: absolute;
            left: ${x}%;
            top: ${y}%;
            transform: scale(${scale});
            animation: icebergBob ${Math.random() * 8 + 6}s ease-in-out infinite;
            animation-delay: ${Math.random() * -5}s;
            pointer-events: none;
            z-index: 3;
        `;
        
        // Iceberg main body
        const body = document.createElement('div');
        const bodyWidth = Math.random() * 120 + 80;
        const bodyHeight = Math.random() * 60 + 40;
        
        body.style.cssText = `
            position: relative;
            width: 0;
            height: 0;
            border-left: ${bodyWidth/2}px solid transparent;
            border-right: ${bodyWidth/2}px solid transparent;
            border-bottom: ${bodyHeight}px solid rgba(200, 230, 255, 0.7);
            filter: drop-shadow(0 5px 15px rgba(100, 180, 255, 0.4));
        `;
        
        // Iceberg underwater portion (faded)
        const underwater = document.createElement('div');
        underwater.style.cssText = `
            position: absolute;
            width: ${bodyWidth * 1.2}px;
            height: ${bodyHeight * 2}px;
            left: 50%;
            top: ${bodyHeight - 10}px;
            transform: translateX(-50%);
            background: linear-gradient(
                to bottom,
                rgba(150, 200, 255, 0.3) 0%,
                rgba(100, 150, 200, 0.2) 50%,
                transparent 100%
            );
            border-radius: 50%;
            filter: blur(10px);
        `;
        
        container.appendChild(underwater);
        container.appendChild(body);
        fragment.appendChild(container);
    }
    
    // ═══════════════════════════════════════════════════════════════════════════
    // LAYER 5: SWIMMING PENGUINS (Silhouettes in water)
    // ═══════════════════════════════════════════════════════════════════════════
    console.log('🐧 Adding swimming penguins...');
    
    function createSwimmingPenguin() {
        const penguin = document.createElement('div');
        const startX = Math.random() > 0.5 ? -10 : 110;
        const y = 60 + Math.random() * 25;
        const size = Math.random() * 40 + 30;
        const duration = Math.random() * 20 + 15;
        const flipX = startX < 0 ? 1 : -1;
        
        penguin.style.cssText = `
            position: absolute;
            left: ${startX}%;
            top: ${y}%;
            width: ${size}px;
            height: ${size * 1.3}px;
            animation: swimAcross ${duration}s linear;
            transform: scaleX(${flipX});
            pointer-events: none;
            z-index: 6;
        `;
        
        // Penguin body (ellipse)
        const body = document.createElement('div');
        body.style.cssText = `
            position: absolute;
            width: 100%;
            height: 100%;
            background: linear-gradient(
                135deg,
                rgba(20, 30, 50, 0.8) 0%,
                rgba(40, 60, 90, 0.7) 50%,
                rgba(20, 30, 50, 0.8) 100%
            );
            border-radius: 50% 50% 50% 50%;
            box-shadow: 
                inset -5px -5px 10px rgba(0, 0, 0, 0.3),
                0 0 20px rgba(100, 150, 200, 0.3);
        `;
        
        // White belly
        const belly = document.createElement('div');
        belly.style.cssText = `
            position: absolute;
            width: 60%;
            height: 70%;
            left: 20%;
            top: 20%;
            background: rgba(220, 240, 255, 0.6);
            border-radius: 50%;
            filter: blur(2px);
        `;
        
        // Flippers (animated)
        const flipperLeft = document.createElement('div');
        flipperLeft.style.cssText = `
            position: absolute;
            width: 40%;
            height: 15%;
            left: -10%;
            top: 35%;
            background: rgba(30, 45, 70, 0.8);
            border-radius: 50%;
            transform-origin: right center;
            animation: flipperSwim 0.8s ease-in-out infinite;
        `;
        
        const flipperRight = document.createElement('div');
        flipperRight.style.cssText = `
            position: absolute;
            width: 40%;
            height: 15%;
            right: -10%;
            top: 35%;
            background: rgba(30, 45, 70, 0.8);
            border-radius: 50%;
            transform-origin: left center;
            animation: flipperSwim 0.8s ease-in-out infinite;
            animation-delay: 0.4s;
        `;
        
        // Bubble trail
        for (let i = 0; i < 3; i++) {
            const bubble = document.createElement('div');
            const bubbleSize = Math.random() * 4 + 2;
            bubble.style.cssText = `
                position: absolute;
                width: ${bubbleSize}px;
                height: ${bubbleSize}px;
                left: ${50 + Math.random() * 20}%;
                top: ${40 + Math.random() * 30}%;
                background: rgba(200, 230, 255, 0.4);
                border: 1px solid rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                animation: bubbleRise ${Math.random() * 2 + 1}s ease-out infinite;
                animation-delay: ${i * 0.3}s;
                pointer-events: none;
            `;
            penguin.appendChild(bubble);
        }
        
        body.appendChild(belly);
        penguin.appendChild(body);
        penguin.appendChild(flipperLeft);
        penguin.appendChild(flipperRight);
        
        starfield.appendChild(penguin);
        
        setTimeout(() => penguin.remove(), duration * 1000);
    }
    
    // Create initial penguins
    for (let i = 0; i < 3; i++) {
        setTimeout(() => createSwimmingPenguin(), i * 5000);
    }
    
    // Continuous penguin spawning
    setInterval(() => {
        if (Math.random() > 0.6) {
            createSwimmingPenguin();
        }
    }, 8000);
    
    // ═══════════════════════════════════════════════════════════════════════════
    // LAYER 6: STANDING PENGUINS ON ICE (Foreground silhouettes)
    // ═══════════════════════════════════════════════════════════════════════════
    console.log('🐧 Placing penguins on ice...');
    
    for (let i = 0; i < 5; i++) {
        const penguin = document.createElement('div');
        const x = Math.random() * 80 + 10;
        const size = Math.random() * 50 + 60;
        
        penguin.style.cssText = `
            position: absolute;
            left: ${x}%;
            bottom: 5%;
            width: ${size}px;
            height: ${size * 1.5}px;
            animation: penguinWaddle ${Math.random() * 3 + 2}s ease-in-out infinite;
            animation-delay: ${Math.random() * -2}s;
            pointer-events: none;
            z-index: 9;
        `;
        
        // Body
        const body = document.createElement('div');
        body.style.cssText = `
            position: absolute;
            width: 100%;
            height: 75%;
            bottom: 0;
            background: linear-gradient(
                to bottom,
                #1a2530 0%,
                #2a3540 50%,
                #1a2530 100%
            );
            border-radius: 50% 50% 40% 40%;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
        `;
        
        // White belly
        const belly = document.createElement('div');
        belly.style.cssText = `
            position: absolute;
            width: 55%;
            height: 65%;
            left: 22.5%;
            top: 15%;
            background: linear-gradient(
                to bottom,
                #f0f8ff 0%,
                #e0f0ff 50%,
                #d0e8ff 100%
            );
            border-radius: 50%;
        `;
        
        // Head
        const head = document.createElement('div');
        head.style.cssText = `
            position: absolute;
            width: 60%;
            height: 30%;
            left: 20%;
            top: -15%;
            background: #1a2530;
            border-radius: 50% 50% 40% 40%;
        `;
        
        // Eyes
        const eyeLeft = document.createElement('div');
        eyeLeft.style.cssText = `
            position: absolute;
            width: 8px;
            height: 8px;
            left: 25%;
            top: 40%;
            background: white;
            border-radius: 50%;
            box-shadow: 0 0 3px rgba(255, 255, 255, 0.8);
        `;
        
        const eyeRight = document.createElement('div');
        eyeRight.style.cssText = `
            position: absolute;
            width: 8px;
            height: 8px;
            right: 25%;
            top: 40%;
            background: white;
            border-radius: 50%;
            box-shadow: 0 0 3px rgba(255, 255, 255, 0.8);
        `;
        
        // Beak
        const beak = document.createElement('div');
        beak.style.cssText = `
            position: absolute;
            width: 0;
            height: 0;
            left: 50%;
            top: 55%;
            transform: translateX(-50%);
            border-left: 5px solid transparent;
            border-right: 5px solid transparent;
            border-top: 8px solid #ff8c00;
        `;
        
        // Feet
        const footLeft = document.createElement('div');
        footLeft.style.cssText = `
            position: absolute;
            width: 35%;
            height: 8%;
            left: 15%;
            bottom: -5%;
            background: #ff8c00;
            border-radius: 50% 50% 0 0;
        `;
        
        const footRight = document.createElement('div');
        footRight.style.cssText = `
            position: absolute;
            width: 35%;
            height: 8%;
            right: 15%;
            bottom: -5%;
            background: #ff8c00;
            border-radius: 50% 50% 0 0;
        `;
        
        head.appendChild(eyeLeft);
        head.appendChild(eyeRight);
        head.appendChild(beak);
        body.appendChild(belly);
        penguin.appendChild(body);
        penguin.appendChild(head);
        penguin.appendChild(footLeft);
        penguin.appendChild(footRight);
        
        fragment.appendChild(penguin);
    }
    
    // ═══════════════════════════════════════════════════════════════════════════
    // LAYER 7: SNOWFLAKES - BACKGROUND LAYER (Distant, small, slow)
    // ═══════════════════════════════════════════════════════════════════════════
    console.log('❄️ Generating background snowflakes (Layer 1 of 3)...');
    
    for (let i = 0; i < 100; i++) {
        const snowflake = document.createElement('div');
        const size = Math.random() * 3 + 1;
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const opacity = Math.random() * 0.4 + 0.2;
        const duration = Math.random() * 20 + 15;
        const delay = Math.random() * -20;
        
        snowflake.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}%;
            top: ${y}%;
            background: white;
            border-radius: 50%;
            opacity: ${opacity};
            box-shadow: 0 0 ${size * 2}px rgba(255, 255, 255, 0.5);
            animation: snowfallSlow ${duration}s linear infinite;
            animation-delay: ${delay}s;
            pointer-events: none;
            z-index: 4;
        `;
        
        fragment.appendChild(snowflake);
    }
    
    // ═══════════════════════════════════════════════════════════════════════════
    // LAYER 8: SNOWFLAKES - MIDDLE LAYER (Medium speed and size)
    // ═══════════════════════════════════════════════════════════════════════════
    console.log('❄️ Generating mid-layer snowflakes (Layer 2 of 3)...');
    
    for (let i = 0; i < 80; i++) {
        const snowflake = document.createElement('div');
        const size = Math.random() * 5 + 3;
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const opacity = Math.random() * 0.6 + 0.3;
        const duration = Math.random() * 15 + 10;
        const delay = Math.random() * -15;
        const rotation = Math.random() * 360;
        
        snowflake.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}%;
            top: ${y}%;
            background: white;
            opacity: ${opacity};
            transform: rotate(${rotation}deg);
            box-shadow: 
                0 0 ${size * 2}px rgba(255, 255, 255, 0.6),
                0 0 ${size * 4}px rgba(180, 220, 255, 0.3);
            animation: snowfallMedium ${duration}s linear infinite;
            animation-delay: ${delay}s;
            pointer-events: none;
            z-index: 5;
        `;
        
        // Create snowflake shape
        const arm1 = document.createElement('div');
        arm1.style.cssText = `
            position: absolute;
            width: 100%;
            height: 20%;
            left: 0;
            top: 40%;
            background: white;
        `;
        
        const arm2 = document.createElement('div');
        arm2.style.cssText = `
            position: absolute;
            width: 20%;
            height: 100%;
            left: 40%;
            top: 0;
            background: white;
        `;
        
        snowflake.appendChild(arm1);
        snowflake.appendChild(arm2);
        fragment.appendChild(snowflake);
    }
    
    // ═══════════════════════════════════════════════════════════════════════════
    // LAYER 9: SNOWFLAKES - FOREGROUND LAYER (Large, detailed, fast)
    // ═══════════════════════════════════════════════════════════════════════════
    console.log('❄️ Generating foreground snowflakes (Layer 3 of 3)...');
    
    for (let i = 0; i < 50; i++) {
        const snowflake = document.createElement('div');
        const size = Math.random() * 8 + 5;
        const x = Math.random() * 100;
        const y = Math.random() * -50;
        const opacity = Math.random() * 0.8 + 0.4;
        const duration = Math.random() * 10 + 8;
        const delay = Math.random() * -10;
        const rotation = Math.random() * 360;
        
        snowflake.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}%;
            top: ${y}%;
            opacity: ${opacity};
            transform: rotate(${rotation}deg);
            animation: snowfallFast ${duration}s linear infinite;
            animation-delay: ${delay}s;
            pointer-events: none;
            z-index: 8;
        `;
        
        // Detailed snowflake structure
        for (let j = 0; j < 6; j++) {
            const arm = document.createElement('div');
            const angle = (j * 60);
            arm.style.cssText = `
                position: absolute;
                width: 100%;
                height: 20%;
                left: 0;
                top: 40%;
                background: linear-gradient(
                    to right,
                    transparent 0%,
                    white 20%,
                    white 80%,
                    transparent 100%
                );
                transform-origin: center center;
                transform: rotate(${angle}deg);
                box-shadow: 0 0 ${size}px rgba(200, 230, 255, 0.4);
            `;
            snowflake.appendChild(arm);
        }
        
        fragment.appendChild(snowflake);
    }
    
    // ═══════════════════════════════════════════════════════════════════════════
    // LAYER 10: ICE CRYSTALS (Floating geometric shapes)
    // ═══════════════════════════════════════════════════════════════════════════
    console.log('💎 Creating ice crystals...');
    
    for (let i = 0; i < 30; i++) {
        const crystal = document.createElement('div');
        const size = Math.random() * 15 + 8;
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const opacity = Math.random() * 0.4 + 0.2;
        const rotation = Math.random() * 360;
        const duration = Math.random() * 30 + 20;
        
        crystal.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}%;
            top: ${y}%;
            background: linear-gradient(
                135deg,
                rgba(200, 240, 255, ${opacity}) 0%,
                rgba(180, 220, 255, ${opacity * 0.6}) 50%,
                rgba(150, 200, 250, ${opacity}) 100%
            );
            opacity: ${opacity};
            transform: rotate(${rotation}deg);
            clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
            box-shadow: 
                0 0 ${size * 2}px rgba(200, 240, 255, 0.6),
                inset 0 0 ${size}px rgba(255, 255, 255, 0.3);
            animation: crystalFloat ${duration}s ease-in-out infinite;
            animation-delay: ${Math.random() * -20}s;
            pointer-events: none;
            z-index: 5;
        `;
        
        fragment.appendChild(crystal);
    }
    
    // ═══════════════════════════════════════════════════════════════════════════
    // LAYER 11: UNDERWATER BUBBLES
    // ═══════════════════════════════════════════════════════════════════════════
    console.log('💧 Adding underwater bubbles...');
    
    for (let i = 0; i < 40; i++) {
        const bubble = document.createElement('div');
        const size = Math.random() * 8 + 3;
        const x = Math.random() * 100;
        const y = 60 + Math.random() * 40; // Lower portion (underwater)
        const opacity = Math.random() * 0.4 + 0.2;
        const duration = Math.random() * 8 + 5;
        const delay = Math.random() * -8;
        
        bubble.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}%;
            top: ${y}%;
            background: radial-gradient(
                circle at 30% 30%,
                rgba(255, 255, 255, ${opacity * 0.8}) 0%,
                rgba(200, 230, 255, ${opacity * 0.4}) 50%,
                rgba(150, 200, 250, ${opacity * 0.2}) 100%
            );
            border: 1px solid rgba(255, 255, 255, ${opacity * 0.5});
            border-radius: 50%;
            box-shadow: 
                inset -2px -2px 4px rgba(255, 255, 255, 0.3),
                0 0 ${size}px rgba(200, 240, 255, 0.3);
            animation: bubbleRise ${duration}s ease-out infinite;
            animation-delay: ${delay}s;
            pointer-events: none;
            z-index: 7;
        `;
        
        fragment.appendChild(bubble);
    }
    
    // ═══════════════════════════════════════════════════════════════════════════
    // LAYER 12: UNDERWATER LIGHT RAYS (Caustics effect)
    // ═══════════════════════════════════════════════════════════════════════════
    console.log('☀️ Creating underwater light caustics...');
    
    for (let i = 0; i < 8; i++) {
        const ray = document.createElement('div');
        const width = Math.random() * 80 + 40;
        const height = Math.random() * 400 + 300;
        const x = Math.random() * 100;
        const opacity = Math.random() * 0.08 + 0.04;
        const rotation = Math.random() * 20 - 10;
        const duration = Math.random() * 15 + 10;
        
        ray.style.cssText = `
            position: absolute;
            width: ${width}px;
            height: ${height}px;
            left: ${x}%;
            top: 50%;
            background: linear-gradient(
                to bottom,
                rgba(150, 220, 255, ${opacity}) 0%,
                rgba(120, 200, 255, ${opacity * 0.6}) 30%,
                rgba(100, 180, 240, ${opacity * 0.3}) 70%,
                transparent 100%
            );
            transform: rotate(${rotation}deg);
            filter: blur(20px);
            animation: lightRayWave ${duration}s ease-in-out infinite;
            animation-delay: ${Math.random() * -10}s;
            pointer-events: none;
            z-index: 2;
        `;
        
        fragment.appendChild(ray);
    }
    
    // ═══════════════════════════════════════════════════════════════════════════
    // LAYER 13: SEALS (Occasional swimming seals)
    // ═══════════════════════════════════════════════════════════════════════════
    console.log('🦭 Adding seals...');
    
    function createSwimmingSeal() {
        const seal = document.createElement('div');
        const startX = Math.random() > 0.5 ? -10 : 110;
        const y = 65 + Math.random() * 20;
        const size = Math.random() * 50 + 40;
        const duration = Math.random() * 25 + 20;
        const flipX = startX < 0 ? 1 : -1;
        
        seal.style.cssText = `
            position: absolute;
            left: ${startX}%;
            top: ${y}%;
            width: ${size * 1.8}px;
            height: ${size}px;
            animation: swimAcross ${duration}s linear;
            transform: scaleX(${flipX});
            pointer-events: none;
            z-index: 6;
        `;
        
        // Seal body
        const body = document.createElement('div');
        body.style.cssText = `
            position: absolute;
            width: 70%;
            height: 100%;
            left: 0;
            top: 0;
            background: linear-gradient(
                to right,
                rgba(60, 80, 100, 0.8) 0%,
                rgba(80, 100, 120, 0.7) 50%,
                rgba(60, 80, 100, 0.8) 100%
            );
            border-radius: 50%;
            box-shadow: 0 0 20px rgba(100, 150, 200, 0.3);
        `;
        
        // Head
        const head = document.createElement('div');
        head.style.cssText = `
            position: absolute;
            width: 35%;
            height: 70%;
            left: -15%;
            top: 15%;
            background: rgba(70, 90, 110, 0.8);
            border-radius: 50%;
        `;
        
        // Tail
        const tail = document.createElement('div');
        tail.style.cssText = `
            position: absolute;
            width: 0;
            height: 0;
            right: -15%;
            top: 25%;
            border-left: ${size * 0.5}px solid rgba(60, 80, 100, 0.7);
            border-top: ${size * 0.25}px solid transparent;
            border-bottom: ${size * 0.25}px solid transparent;
            animation: tailSwim 1.2s ease-in-out infinite;
        `;
        
        seal.appendChild(body);
        seal.appendChild(head);
        seal.appendChild(tail);
        
        starfield.appendChild(seal);
        
        setTimeout(() => seal.remove(), duration * 1000);
    }
    
    // Spawn occasional seals
    setTimeout(() => createSwimmingSeal(), 3000);
    setInterval(() => {
        if (Math.random() > 0.8) {
            createSwimmingSeal();
        }
    }, 15000);
    
    // ═══════════════════════════════════════════════════════════════════════════
    // LAYER 14: STARS IN SKY (Upper portion only)
    // ═══════════════════════════════════════════════════════════════════════════
    console.log('⭐ Adding stars to night sky...');
    
    for (let i = 0; i < 80; i++) {
        const star = document.createElement('div');
        const size = Math.random() * 2 + 0.5;
        const x = Math.random() * 100;
        const y = Math.random() * 40; // Upper 40% only
        const opacity = Math.random() * 0.6 + 0.3;
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
    // LAYER 15: ICE SHELF FOREGROUND
    // ═══════════════════════════════════════════════════════════════════════════
    console.log('🧊 Creating ice shelf...');
    
    const iceShelf = document.createElement('div');
    iceShelf.style.cssText = `
        position: absolute;
        width: 100%;
        height: 15%;
        left: 0;
        bottom: 0;
        background: linear-gradient(
            to bottom,
            rgba(200, 230, 255, 0.0) 0%,
            rgba(220, 240, 255, 0.3) 30%,
            rgba(230, 245, 255, 0.6) 60%,
            rgba(240, 250, 255, 0.8) 100%
        );
        box-shadow: 
            inset 0 10px 30px rgba(180, 220, 255, 0.3),
            0 -5px 20px rgba(100, 180, 240, 0.2);
        pointer-events: none;
        z-index: 8;
    `;
    
    // Ice cracks
    for (let i = 0; i < 5; i++) {
        const crack = document.createElement('div');
        const x = Math.random() * 100;
        const width = Math.random() * 2 + 1;
        const height = Math.random() * 60 + 40;
        
        crack.style.cssText = `
            position: absolute;
            width: ${width}px;
            height: ${height}%;
            left: ${x}%;
            bottom: 0;
            background: linear-gradient(
                to bottom,
                transparent 0%,
                rgba(150, 200, 230, 0.3) 40%,
                rgba(130, 180, 220, 0.5) 70%,
                rgba(100, 150, 200, 0.6) 100%
            );
            transform: skewX(${Math.random() * 10 - 5}deg);
            filter: blur(1px);
        `;
        iceShelf.appendChild(crack);
    }
    
    fragment.appendChild(iceShelf);
    
    // ═══════════════════════════════════════════════════════════════════════════
    // LAYER 16: BLIZZARD PARTICLES (Occasional wind gusts)
    // ═══════════════════════════════════════════════════════════════════════════
    console.log('🌬️ Adding blizzard effects...');
    
    function createBlizzardGust() {
        const gust = document.createElement('div');
        gust.style.cssText = `
            position: absolute;
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
            pointer-events: none;
            z-index: 10;
        `;
        
        for (let i = 0; i < 30; i++) {
            const particle = document.createElement('div');
            const size = Math.random() * 4 + 1;
            const x = Math.random() * 100;
            const y = Math.random() * 100;
            
            particle.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}%;
                top: ${y}%;
                background: white;
                border-radius: 50%;
                opacity: 0;
                animation: blizzardSweep 2s ease-out;
                animation-delay: ${Math.random() * 0.5}s;
            `;
            
            gust.appendChild(particle);
        }
        
        starfield.appendChild(gust);
        setTimeout(() => gust.remove(), 3000);
    }
    
    setInterval(() => {
        if (Math.random() > 0.85) {
            createBlizzardGust();
        }
    }, 5000);
    
    // ═══════════════════════════════════════════════════════════════════════════
    // APPEND ALL ELEMENTS TO DOM
    // ═══════════════════════════════════════════════════════════════════════════
    starfield.appendChild(fragment);
    
    // ═══════════════════════════════════════════════════════════════════════════
    // INJECT CSS ANIMATIONS
    // ═══════════════════════════════════════════════════════════════════════════
    const style = document.createElement('style');
    style.setAttribute('data-theme', 'penguin');
    style.textContent = `
        @keyframes auroraWave {
            0%, 100% { 
                transform: translateY(0) rotate(0deg) skewX(-15deg);
                opacity: 0.6;
            }
            25% { 
                transform: translateY(-30px) rotate(5deg) skewX(-12deg);
                opacity: 0.8;
            }
            50% { 
                transform: translateY(-50px) rotate(-3deg) skewX(-18deg);
                opacity: 1;
            }
            75% { 
                transform: translateY(-30px) rotate(4deg) skewX(-14deg);
                opacity: 0.7;
            }
        }
        
        @keyframes icebergFloat {
            0%, 100% { transform: translateX(0) translateY(0); }
            50% { transform: translateX(-20px) translateY(-10px); }
        }
        
        @keyframes icebergBob {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-15px) rotate(2deg); }
        }
        
        @keyframes swimAcross {
            0% { left: var(--start-x, -10%); }
            100% { left: var(--end-x, 110%); }
        }
        
        @keyframes flipperSwim {
            0%, 100% { transform: rotateZ(0deg); }
            50% { transform: rotateZ(-30deg); }
        }
        
        @keyframes tailSwim {
            0%, 100% { transform: rotateY(0deg); }
            50% { transform: rotateY(15deg); }
        }
        
        @keyframes penguinWaddle {
            0%, 100% { transform: rotate(0deg) translateY(0); }
            25% { transform: rotate(-3deg) translateY(-5px); }
            75% { transform: rotate(3deg) translateY(-5px); }
        }
        
        @keyframes snowfallSlow {
            0% { 
                transform: translateY(0) translateX(0) rotate(0deg);
                opacity: 0;
            }
            10% { opacity: 0.4; }
            90% { opacity: 0.4; }
            100% { 
                transform: translateY(100vh) translateX(30px) rotate(360deg);
                opacity: 0;
            }
        }
        
        @keyframes snowfallMedium {
            0% { 
                transform: translateY(0) translateX(0) rotate(0deg);
                opacity: 0;
            }
            10% { opacity: 0.6; }
            90% { opacity: 0.6; }
            100% { 
                transform: translateY(100vh) translateX(-20px) rotate(-360deg);
                opacity: 0;
            }
        }
        
        @keyframes snowfallFast {
            0% { 
                transform: translateY(0) translateX(0) rotate(0deg);
                opacity: 0;
            }
            10% { opacity: 0.8; }
            90% { opacity: 0.8; }
            100% { 
                transform: translateY(120vh) translateX(40px) rotate(720deg);
                opacity: 0;
            }
        }
        
        @keyframes crystalFloat {
            0%, 100% { 
                transform: translateY(0) translateX(0) rotate(0deg);
                opacity: 0.3;
            }
            25% { 
                transform: translateY(-20px) translateX(15px) rotate(90deg);
                opacity: 0.5;
            }
            50% { 
                transform: translateY(-30px) translateX(30px) rotate(180deg);
                opacity: 0.6;
            }
            75% { 
                transform: translateY(-20px) translateX(15px) rotate(270deg);
                opacity: 0.4;
            }
        }
        
        @keyframes bubbleRise {
            0% { 
                transform: translateY(0) scale(1);
                opacity: 0;
            }
            10% { opacity: 0.6; }
            90% { opacity: 0.6; }
            100% { 
                transform: translateY(-150px) scale(1.2);
                opacity: 0;
            }
        }
        
        @keyframes lightRayWave {
            0%, 100% { 
                transform: translateX(0) rotate(0deg) scaleY(1);
                opacity: 0.6;
            }
            33% { 
                transform: translateX(20px) rotate(5deg) scaleY(1.1);
                opacity: 0.8;
            }
            66% { 
                transform: translateX(-15px) rotate(-3deg) scaleY(0.9);
                opacity: 0.7;
            }
        }
        
        @keyframes starTwinkle {
            0%, 100% { 
                opacity: 0.3;
                transform: scale(1);
            }
            50% { 
                opacity: 1;
                transform: scale(1.5);
            }
        }
        
        @keyframes blizzardSweep {
            0% { 
                opacity: 0;
                transform: translateX(0) translateY(0);
            }
            20% { opacity: 0.8; }
            80% { opacity: 0.8; }
            100% { 
                opacity: 0;
                transform: translateX(300px) translateY(100px);
            }
        }
    `;
    document.head.appendChild(style);
    
    const moon = document.querySelector('.orbital-planet');
    if (moon) moon.style.display = 'none';
    
    console.log('✅ Ultra HD Penguin Antarctic Theme loaded!');
    console.log('📊 600+ elements created');
    console.log('🐧 Penguins swimming, waddling, and living their best Antarctic life!');
}

window.themesLoaded = window.themesLoaded || {};
window.themesLoaded.penguin = true;
