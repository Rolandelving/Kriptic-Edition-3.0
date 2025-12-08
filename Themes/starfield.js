// Starfield Theme - Default animated starfield
function theme_starfield() {
    const starfield = document.getElementById('starfield');
    if (!starfield) return;
    
    starfield.innerHTML = '';
    starfield.style.background = '';
    
    const starCount = 150;
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        const size = Math.random() * 2.5 + 0.5;
        star.style.width = size + 'px';
        star.style.height = size + 'px';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDuration = (2 + Math.random() * 3) + 's';
        star.style.animationDelay = Math.random() * 3 + 's';
        starfield.appendChild(star);
    }
    
    const moon = document.querySelector('.orbital-planet');
    if (moon) moon.style.display = 'block';
    
    console.log('✨ Starfield loaded');
}

window.themesLoaded = window.themesLoaded || {};
window.themesLoaded.stars = true;
