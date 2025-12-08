// Snowfall Theme - Animated falling snow
function theme_snowfall() {
    const starfield = document.getElementById('starfield');
    if (!starfield) return;
    
    starfield.innerHTML = '';
    starfield.style.background = 'linear-gradient(to bottom, #1a2a3a 0%, #0d1620 100%)';
    
    const snowCount = 80;
    for (let i = 0; i < snowCount; i++) {
        const flake = document.createElement('div');
        flake.textContent = '❄';
        flake.style.position = 'absolute';
        flake.style.color = 'white';
        flake.style.fontSize = Math.random() * 15 + 10 + 'px';
        flake.style.left = Math.random() * 100 + '%';
        flake.style.top = Math.random() * -100 + '%';
        flake.style.opacity = Math.random() * 0.6 + 0.3;
        flake.style.animation = `snowFall ${Math.random() * 3 + 4}s linear infinite`;
        flake.style.animationDelay = Math.random() * 5 + 's';
        starfield.appendChild(flake);
    }
    
    const style = document.createElement('style');
    style.setAttribute('data-theme', 'snow');
    style.textContent = `
        @keyframes snowFall {
            to {
                transform: translateY(100vh) rotate(360deg);
            }
        }
    `;
    document.head.appendChild(style);
    
    const moon = document.querySelector('.orbital-planet');
    if (moon) moon.style.display = 'none';
    
    console.log('❄️ Snowfall loaded');
}

window.themesLoaded = window.themesLoaded || {};
window.themesLoaded.snow = true;
