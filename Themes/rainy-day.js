/**
 * RAIN THEME - Rainy Day Background
 */

export function create() {
    const starfield = document.getElementById('starfield');
    if (!starfield) return;
    
    starfield.innerHTML = '';
    starfield.style.background = 'linear-gradient(180deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)';
    
    // Hide moon
    const moon = document.querySelector('.orbital-planet');
    if (moon) moon.style.display = 'none';
    
    // Performance settings
    const isLowEnd = window.PerformanceManager?.reducedParticleMode || false;
    const dropCount = isLowEnd ? 50 : 150;
    const cloudCount = isLowEnd ? 4 : 8;
    
    // Add clouds
    for (let i = 0; i < cloudCount; i++) {
        const cloud = document.createElement('div');
        cloud.style.cssText = `
            position: absolute;
            width: ${Math.random() * 150 + 100}px;
            height: 60px;
            background: rgba(40, 50, 70, 0.6);
            border-radius: 50px;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 30}%;
            filter: blur(${isLowEnd ? '8px' : '15px'});
            animation: cloudDrift ${Math.random() * 20 + 30}s linear infinite;
            will-change: transform;
        `;
        starfield.appendChild(cloud);
    }

    // Add rain drops
    for (let i = 0; i < dropCount; i++) {
        const drop = document.createElement('div');
        drop.style.cssText = `
            position: absolute;
            width: 2px;
            height: ${Math.random() * 30 + 15}px;
            background: linear-gradient(180deg, rgba(150,180,255,0.8), rgba(100,150,255,0.2));
            left: ${Math.random() * 100}%;
            top: ${-Math.random() * 100}%;
            animation: rainFall ${Math.random() * 0.8 + 0.4}s linear infinite;
            animation-delay: ${Math.random() * 2}s;
            opacity: ${Math.random() * 0.4 + 0.4};
            will-change: transform;
        `;
        starfield.appendChild(drop);
    }

    // Add splash effects (only on high-end devices)
    if (!isLowEnd) {
        for (let i = 0; i < 20; i++) {
            const splash = document.createElement('div');
            splash.style.cssText = `
                position: absolute;
                width: 4px;
                height: 4px;
                border-radius: 50%;
                background: rgba(150,180,255,0.5);
                left: ${Math.random() * 100}%;
                bottom: 0;
                animation: splash ${Math.random() * 1 + 0.5}s ease-out infinite;
                animation-delay: ${Math.random() * 2}s;
            `;
            starfield.appendChild(splash);
        }
    }

    // Add animations if not already added
    if (!document.getElementById('rainAnimation')) {
        const style = document.createElement('style');
        style.id = 'rainAnimation';
        style.setAttribute('data-theme', 'rain');
        style.textContent = `
            @keyframes rainFall {
                0% { transform: translateY(-100px); opacity: 1; }
                100% { transform: translateY(100vh); opacity: 0.2; }
            }
            @keyframes cloudDrift {
                0% { transform: translateX(-150px); }
                100% { transform: translateX(calc(100vw + 150px)); }
            }
            @keyframes splash {
                0% { transform: translateY(0) scale(0); opacity: 1; }
                100% { transform: translateY(-20px) scale(1.5); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
    }
    
    console.log('🌧️ Rain theme activated');
}

export const metadata = {
    name: 'Rainy Day',
    description: 'Peaceful rain with clouds and splashes',
    author: 'Kriptic Edition',
    performanceImpact: 'medium'
};