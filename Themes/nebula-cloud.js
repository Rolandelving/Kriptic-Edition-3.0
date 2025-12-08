// Nebula Cloud Theme - Colorful swirling nebula
function theme_nebula_cloud() {
    const starfield = document.getElementById('starfield');
    if (!starfield) return;
    
    starfield.innerHTML = '';
    starfield.style.background = '#000000';
    
    // Add nebula clouds
    const colors = ['#6495ff', '#9d7dff', '#00d9ff', '#ff00ff', '#00ffff'];
    for (let i = 0; i < 5; i++) {
        const cloud = document.createElement('div');
        cloud.style.position = 'absolute';
        cloud.style.width = Math.random() * 300 + 200 + 'px';
        cloud.style.height = Math.random() * 300 + 200 + 'px';
        cloud.style.borderRadius = '50%';
        cloud.style.background = `radial-gradient(circle, ${colors[i]} 0%, transparent 70%)`;
        cloud.style.left = Math.random() * 100 + '%';
        cloud.style.top = Math.random() * 100 + '%';
        cloud.style.filter = 'blur(50px)';
        cloud.style.opacity = '0.4';
        cloud.style.animation = `nebulaFloat ${Math.random() * 20 + 15}s ease-in-out infinite`;
        cloud.style.animationDelay = Math.random() * 5 + 's';
        starfield.appendChild(cloud);
    }
    
    // Add stars
    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.style.position = 'absolute';
        star.style.width = Math.random() * 2 + 1 + 'px';
        star.style.height = star.style.width;
        star.style.background = 'white';
        star.style.borderRadius = '50%';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.opacity = Math.random() * 0.7 + 0.3;
        starfield.appendChild(star);
    }
    
    const style = document.createElement('style');
    style.setAttribute('data-theme', 'nebula');
    style.textContent = `
        @keyframes nebulaFloat {
            0%, 100% { transform: translate(0, 0) scale(1); }
            33% { transform: translate(30px, -30px) scale(1.1); }
            66% { transform: translate(-30px, 30px) scale(0.9); }
        }
    `;
    document.head.appendChild(style);
    
    const moon = document.querySelector('.orbital-planet');
    if (moon) moon.style.display = 'block';
    
    console.log('🌌 Nebula Cloud loaded');
}

window.themesLoaded = window.themesLoaded || {};
window.themesLoaded.nebula = true;
