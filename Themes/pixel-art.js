// Pixel Art Theme - Retro 8-bit style
function theme_pixel_art() {
    const starfield = document.getElementById('starfield');
    if (!starfield) return;
    
    starfield.innerHTML = '';
    starfield.style.background = '#1a1a2e';
    starfield.style.imageRendering = 'pixelated';
    
    // Create pixelated stars
    for (let i = 0; i < 60; i++) {
        const star = document.createElement('div');
        star.style.position = 'absolute';
        star.style.width = '8px';
        star.style.height = '8px';
        star.style.background = ['#ffffff', '#ffff00', '#00ffff', '#ff00ff'][Math.floor(Math.random() * 4)];
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.imageRendering = 'pixelated';
        star.style.boxShadow = '0 0 4px currentColor';
        star.style.animation = `pixelTwinkle ${Math.random() * 2 + 1}s steps(2) infinite`;
        star.style.animationDelay = Math.random() * 2 + 's';
        starfield.appendChild(star);
    }
    
    // Create pixel clouds
    for (let i = 0; i < 8; i++) {
        const cloud = document.createElement('div');
        cloud.style.position = 'absolute';
        cloud.style.width = '40px';
        cloud.style.height = '24px';
        cloud.style.background = `rgba(${Math.random() * 100 + 100}, ${Math.random() * 100 + 100}, ${Math.random() * 155 + 100}, 0.3)`;
        cloud.style.left = Math.random() * 100 + '%';
        cloud.style.top = Math.random() * 100 + '%';
        cloud.style.imageRendering = 'pixelated';
        cloud.style.borderRadius = '2px';
        cloud.style.animation = `pixelFloat ${Math.random() * 10 + 8}s linear infinite`;
        starfield.appendChild(cloud);
    }
    
    const style = document.createElement('style');
    style.setAttribute('data-theme', 'pixel');
    style.textContent = `
        @keyframes pixelTwinkle {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.3; }
        }
        @keyframes pixelFloat {
            from { transform: translateX(-100px); }
            to { transform: translateX(calc(100vw + 100px)); }
        }
    `;
    document.head.appendChild(style);
    
    const moon = document.querySelector('.orbital-planet');
    if (moon) moon.style.display = 'none';
    
    console.log('🎮 Pixel Art loaded');
}

window.themesLoaded = window.themesLoaded || {};
window.themesLoaded.pixel = true;
