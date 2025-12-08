// Underwater Theme - Ocean depths with bubbles
function theme_underwater() {
    const starfield = document.getElementById('starfield');
    if (!starfield) return;
    
    starfield.innerHTML = '';
    starfield.style.background = 'linear-gradient(to bottom, #001f3f 0%, #000814 100%)';
    
    // Create light rays
    for (let i = 0; i < 5; i++) {
        const ray = document.createElement('div');
        ray.style.position = 'absolute';
        ray.style.width = '100px';
        ray.style.height = '100%';
        ray.style.background = `linear-gradient(to bottom, rgba(100, 149, 237, 0.2), transparent)`;
        ray.style.left = (i * 25) + '%';
        ray.style.top = '0';
        ray.style.filter = 'blur(20px)';
        ray.style.animation = `underwaterRay ${Math.random() * 8 + 6}s ease-in-out infinite`;
        ray.style.animationDelay = i * 0.5 + 's';
        ray.style.transformOrigin = 'top center';
        starfield.appendChild(ray);
    }
    
    // Create bubbles
    for (let i = 0; i < 30; i++) {
        const bubble = document.createElement('div');
        bubble.style.position = 'absolute';
        bubble.style.width = Math.random() * 20 + 5 + 'px';
        bubble.style.height = bubble.style.width;
        bubble.style.borderRadius = '50%';
        bubble.style.background = 'radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.8), rgba(100, 149, 237, 0.3))';
        bubble.style.border = '1px solid rgba(255, 255, 255, 0.3)';
        bubble.style.left = Math.random() * 100 + '%';
        bubble.style.bottom = '-50px';
        bubble.style.animation = `bubbleRise ${Math.random() * 5 + 4}s linear infinite`;
        bubble.style.animationDelay = Math.random() * 5 + 's';
        starfield.appendChild(bubble);
    }
    
    const style = document.createElement('style');
    style.setAttribute('data-theme', 'underwater');
    style.textContent = `
        @keyframes underwaterRay {
            0%, 100% { 
                opacity: 0.3;
                transform: scaleX(1);
            }
            50% { 
                opacity: 0.6;
                transform: scaleX(1.2);
            }
        }
        @keyframes bubbleRise {
            0% {
                bottom: -50px;
                opacity: 0.7;
            }
            100% {
                bottom: 110vh;
                opacity: 0;
                transform: translateX(50px);
            }
        }
    `;
    document.head.appendChild(style);
    
    const moon = document.querySelector('.orbital-planet');
    if (moon) moon.style.display = 'none';
    
    console.log('🌊 Underwater loaded');
}

window.themesLoaded = window.themesLoaded || {};
window.themesLoaded.underwater = true;
