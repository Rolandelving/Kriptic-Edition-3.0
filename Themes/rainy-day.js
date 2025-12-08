// Rainy Day Theme - Animated rain drops
function theme_rainy_day() {
    const starfield = document.getElementById('starfield');
    if (!starfield) return;
    
    starfield.innerHTML = '';
    starfield.style.background = 'linear-gradient(to bottom, #1a1a2e 0%, #0f0f1e 100%)';
    
    const rainCount = 100;
    for (let i = 0; i < rainCount; i++) {
        const drop = document.createElement('div');
        drop.style.position = 'absolute';
        drop.style.width = '2px';
        drop.style.height = Math.random() * 20 + 10 + 'px';
        drop.style.background = 'linear-gradient(to bottom, rgba(174, 194, 224, 0), rgba(174, 194, 224, 0.8))';
        drop.style.left = Math.random() * 100 + '%';
        drop.style.top = Math.random() * -100 + '%';
        drop.style.animation = `rainFall ${Math.random() * 0.5 + 0.5}s linear infinite`;
        drop.style.animationDelay = Math.random() * 2 + 's';
        drop.style.opacity = Math.random() * 0.5 + 0.3;
        starfield.appendChild(drop);
    }
    
    const style = document.createElement('style');
    style.setAttribute('data-theme', 'rain');
    style.textContent = `
        @keyframes rainFall {
            to { transform: translateY(100vh); }
        }
    `;
    document.head.appendChild(style);
    
    const moon = document.querySelector('.orbital-planet');
    if (moon) moon.style.display = 'none';
    
    console.log('🌧️ Rainy Day loaded');
}

window.themesLoaded = window.themesLoaded || {};
window.themesLoaded.rain = true;
