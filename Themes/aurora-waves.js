// Aurora Waves Theme - Northern lights effect
function theme_aurora_waves() {
    const starfield = document.getElementById('starfield');
    if (!starfield) return;
    
    starfield.innerHTML = '';
    starfield.style.background = 'linear-gradient(to bottom, #0a0e1a 0%, #1a1a2e 100%)';
    
    // Create aurora waves
    const colors = [
        'rgba(0, 255, 136, 0.3)',
        'rgba(0, 255, 255, 0.3)',
        'rgba(136, 255, 0, 0.3)',
        'rgba(255, 0, 255, 0.2)'
    ];
    
    for (let i = 0; i < 4; i++) {
        const wave = document.createElement('div');
        wave.style.position = 'absolute';
        wave.style.width = '100%';
        wave.style.height = '300px';
        wave.style.background = `linear-gradient(to bottom, ${colors[i]}, transparent)`;
        wave.style.top = (i * 15) + '%';
        wave.style.filter = 'blur(40px)';
        wave.style.animation = `auroraWave ${Math.random() * 5 + 8}s ease-in-out infinite`;
        wave.style.animationDelay = i * 0.5 + 's';
        starfield.appendChild(wave);
    }
    
    // Add stars
    for (let i = 0; i < 80; i++) {
        const star = document.createElement('div');
        star.style.position = 'absolute';
        star.style.width = '2px';
        star.style.height = '2px';
        star.style.background = 'white';
        star.style.borderRadius = '50%';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.opacity = Math.random() * 0.6 + 0.2;
        starfield.appendChild(star);
    }
    
    const style = document.createElement('style');
    style.setAttribute('data-theme', 'aurora');
    style.textContent = `
        @keyframes auroraWave {
            0%, 100% { 
                transform: translateX(0) scaleY(1);
                opacity: 0.5;
            }
            50% { 
                transform: translateX(50px) scaleY(1.2);
                opacity: 0.8;
            }
        }
    `;
    document.head.appendChild(style);
    
    const moon = document.querySelector('.orbital-planet');
    if (moon) moon.style.display = 'none';
    
    console.log('🌈 Aurora Waves loaded');
}

window.themesLoaded = window.themesLoaded || {};
window.themesLoaded.aurora = true;
