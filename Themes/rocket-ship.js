// Rocket Ship Theme - Animated rocket flying
function theme_rocket_ship() {
    const starfield = document.getElementById('starfield');
    if (!starfield) return;
    
    starfield.innerHTML = '';
    starfield.style.background = 'radial-gradient(ellipse at center, #0a0e27 0%, #000000 100%)';
    
    // Add stars
    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.style.position = 'absolute';
        star.style.width = '2px';
        star.style.height = '2px';
        star.style.background = 'white';
        star.style.borderRadius = '50%';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.opacity = Math.random() * 0.5 + 0.3;
        starfield.appendChild(star);
    }
    
    // Create rocket
    const rocket = document.createElement('div');
    rocket.style.position = 'absolute';
    rocket.style.fontSize = '3rem';
    rocket.textContent = '🚀';
    rocket.style.left = '-60px';
    rocket.style.top = '50%';
    rocket.style.transform = 'translateY(-50%)';
    rocket.style.animation = 'rocketFly 8s linear infinite';
    starfield.appendChild(rocket);
    
    const style = document.createElement('style');
    style.setAttribute('data-theme', 'rocket');
    style.textContent = `
        @keyframes rocketFly {
            0% {
                left: -60px;
                top: 80%;
            }
            50% {
                left: 50%;
                top: 30%;
            }
            100% {
                left: 110%;
                top: 20%;
            }
        }
    `;
    document.head.appendChild(style);
    
    const moon = document.querySelector('.orbital-planet');
    if (moon) moon.style.display = 'block';
    
    console.log('🚀 Rocket Ship loaded');
}

window.themesLoaded = window.themesLoaded || {};
window.themesLoaded.rocket = true;
