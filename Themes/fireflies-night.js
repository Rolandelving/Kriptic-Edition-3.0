// Fireflies Night Theme - Glowing fireflies
function theme_fireflies_night() {
    const starfield = document.getElementById('starfield');
    if (!starfield) return;
    
    starfield.innerHTML = '';
    starfield.style.background = 'linear-gradient(to bottom, #0d1b2a 0%, #000000 100%)';
    
    // Create fireflies
    for (let i = 0; i < 50; i++) {
        const firefly = document.createElement('div');
        firefly.style.position = 'absolute';
        firefly.style.width = '4px';
        firefly.style.height = '4px';
        firefly.style.borderRadius = '50%';
        firefly.style.background = '#ffff00';
        firefly.style.boxShadow = '0 0 10px #ffff00, 0 0 20px #ffff00, 0 0 30px #ffff00';
        firefly.style.left = Math.random() * 100 + '%';
        firefly.style.top = Math.random() * 100 + '%';
        firefly.style.animation = `firefly ${Math.random() * 5 + 4}s ease-in-out infinite, fireflyGlow ${Math.random() * 2 + 1}s ease-in-out infinite`;
        firefly.style.animationDelay = Math.random() * 3 + 's';
        starfield.appendChild(firefly);
    }
    
    // Add dim stars
    for (let i = 0; i < 60; i++) {
        const star = document.createElement('div');
        star.style.position = 'absolute';
        star.style.width = '1px';
        star.style.height = '1px';
        star.style.background = 'white';
        star.style.borderRadius = '50%';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.opacity = Math.random() * 0.3 + 0.1;
        starfield.appendChild(star);
    }
    
    const style = document.createElement('style');
    style.setAttribute('data-theme', 'fireflies');
    style.textContent = `
        @keyframes firefly {
            0%, 100% { 
                transform: translate(0, 0);
            }
            25% { 
                transform: translate(50px, -30px);
            }
            50% { 
                transform: translate(30px, 40px);
            }
            75% { 
                transform: translate(-40px, 20px);
            }
        }
        @keyframes fireflyGlow {
            0%, 100% { 
                opacity: 0.3;
                filter: brightness(0.8);
            }
            50% { 
                opacity: 1;
                filter: brightness(1.5);
            }
        }
    `;
    document.head.appendChild(style);
    
    const moon = document.querySelector('.orbital-planet');
    if (moon) moon.style.display = 'none';
    
    console.log('🌟 Fireflies Night loaded');
}

window.themesLoaded = window.themesLoaded || {};
window.themesLoaded.fireflies = true;
