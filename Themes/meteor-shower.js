// Meteor Shower Theme - Shooting stars
function theme_meteor_shower() {
    const starfield = document.getElementById('starfield');
    if (!starfield) return;
    
    starfield.innerHTML = '';
    starfield.style.background = 'radial-gradient(ellipse at top, #0a0e27, #000000)';
    
    // Background stars
    for (let i = 0; i < 120; i++) {
        const star = document.createElement('div');
        star.style.position = 'absolute';
        star.style.width = '2px';
        star.style.height = '2px';
        star.style.background = 'white';
        star.style.borderRadius = '50%';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.opacity = Math.random() * 0.7 + 0.3;
        starfield.appendChild(star);
    }
    
    // Create meteors
    function createMeteor() {
        const meteor = document.createElement('div');
        meteor.style.position = 'absolute';
        meteor.style.width = '2px';
        meteor.style.height = '2px';
        meteor.style.background = 'white';
        meteor.style.borderRadius = '50%';
        meteor.style.boxShadow = '0 0 10px white, 0 0 20px white, 0 0 30px white';
        meteor.style.left = Math.random() * 100 + '%';
        meteor.style.top = Math.random() * 50 + '%';
        
        const duration = Math.random() * 1 + 0.5;
        meteor.style.animation = `meteorFall ${duration}s linear`;
        
        starfield.appendChild(meteor);
        
        setTimeout(() => meteor.remove(), duration * 1000);
    }
    
    // Create meteors periodically
    setInterval(createMeteor, 800);
    
    const style = document.createElement('style');
    style.setAttribute('data-theme', 'meteor');
    style.textContent = `
        @keyframes meteorFall {
            0% {
                transform: translate(0, 0);
                opacity: 1;
            }
            100% {
                transform: translate(200px, 200px);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
    
    const moon = document.querySelector('.orbital-planet');
    if (moon) moon.style.display = 'block';
    
    console.log('☄️ Meteor Shower loaded');
}

window.themesLoaded = window.themesLoaded || {};
window.themesLoaded.meteor = true;
