// Lightning Storm Theme - Electric storm with lightning
function theme_lightning_storm() {
    const starfield = document.getElementById('starfield');
    if (!starfield) return;
    
    starfield.innerHTML = '';
    starfield.style.background = 'linear-gradient(to bottom, #1a1a2e 0%, #0f0f1e 100%)';
    
    // Create storm clouds
    for (let i = 0; i < 8; i++) {
        const cloud = document.createElement('div');
        cloud.style.position = 'absolute';
        cloud.style.width = Math.random() * 200 + 150 + 'px';
        cloud.style.height = '80px';
        cloud.style.background = 'rgba(40, 40, 60, 0.6)';
        cloud.style.borderRadius = '50px';
        cloud.style.left = Math.random() * 100 + '%';
        cloud.style.top = Math.random() * 40 + '%';
        cloud.style.filter = 'blur(20px)';
        cloud.style.animation = `cloudDrift ${Math.random() * 20 + 15}s linear infinite`;
        starfield.appendChild(cloud);
    }
    
    // Create lightning function
    function createLightning() {
        const lightning = document.createElement('div');
        lightning.style.position = 'absolute';
        lightning.style.width = '3px';
        lightning.style.height = Math.random() * 200 + 100 + 'px';
        lightning.style.background = 'linear-gradient(to bottom, #ffffff, #00d9ff, transparent)';
        lightning.style.left = Math.random() * 100 + '%';
        lightning.style.top = Math.random() * 30 + '%';
        lightning.style.boxShadow = '0 0 20px #00d9ff, 0 0 40px #00d9ff';
        lightning.style.animation = 'lightningFlash 0.2s ease-out';
        lightning.style.filter = 'blur(1px)';
        lightning.style.transform = `rotate(${Math.random() * 20 - 10}deg)`;
        
        starfield.appendChild(lightning);
        
        // Flash effect on whole screen
        starfield.style.background = 'rgba(255, 255, 255, 0.3)';
        setTimeout(() => {
            starfield.style.background = 'linear-gradient(to bottom, #1a1a2e 0%, #0f0f1e 100%)';
        }, 100);
        
        setTimeout(() => lightning.remove(), 200);
    }
    
    // Random lightning strikes
    setInterval(() => {
        if (Math.random() > 0.7) {
            createLightning();
        }
    }, 1500);
    
    const style = document.createElement('style');
    style.setAttribute('data-theme', 'lightning');
    style.textContent = `
        @keyframes cloudDrift {
            from { transform: translateX(-100px); }
            to { transform: translateX(calc(100vw + 100px)); }
        }
        @keyframes lightningFlash {
            0% { opacity: 0; }
            50% { opacity: 1; }
            100% { opacity: 0; }
        }
    `;
    document.head.appendChild(style);
    
    const moon = document.querySelector('.orbital-planet');
    if (moon) moon.style.display = 'none';
    
    console.log('⚡ Lightning Storm loaded');
}

window.themesLoaded = window.themesLoaded || {};
window.themesLoaded.lightning = true;
