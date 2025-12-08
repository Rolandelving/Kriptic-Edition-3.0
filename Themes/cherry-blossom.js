// Cherry Blossom Theme - Falling sakura petals
function theme_cherry_blossom() {
    const starfield = document.getElementById('starfield');
    if (!starfield) return;
    
    starfield.innerHTML = '';
    starfield.style.background = 'linear-gradient(to bottom, #ffd1dc 0%, #ffb6c1 50%, #ff69b4 100%)';
    
    // Create cherry blossom petals
    for (let i = 0; i < 40; i++) {
        const petal = document.createElement('div');
        petal.textContent = '🌸';
        petal.style.position = 'absolute';
        petal.style.fontSize = Math.random() * 20 + 15 + 'px';
        petal.style.left = Math.random() * 100 + '%';
        petal.style.top = Math.random() * -100 + '%';
        petal.style.opacity = Math.random() * 0.5 + 0.4;
        petal.style.animation = `petalFall ${Math.random() * 5 + 5}s linear infinite`;
        petal.style.animationDelay = Math.random() * 5 + 's';
        starfield.appendChild(petal);
    }
    
    // Add tree branches silhouette at top
    const branches = document.createElement('div');
    branches.style.position = 'absolute';
    branches.style.top = '0';
    branches.style.left = '0';
    branches.style.width = '100%';
    branches.style.height = '200px';
    branches.style.background = 'linear-gradient(to bottom, rgba(139, 69, 19, 0.3) 0%, transparent 100%)';
    branches.style.pointerEvents = 'none';
    starfield.appendChild(branches);
    
    // Add some branches decoration
    for (let i = 0; i < 5; i++) {
        const branch = document.createElement('div');
        branch.style.position = 'absolute';
        branch.style.width = Math.random() * 150 + 100 + 'px';
        branch.style.height = '3px';
        branch.style.background = 'rgba(139, 69, 19, 0.6)';
        branch.style.top = Math.random() * 150 + 'px';
        branch.style.left = Math.random() * 100 + '%';
        branch.style.transform = `rotate(${Math.random() * 40 - 20}deg)`;
        branch.style.borderRadius = '2px';
        branches.appendChild(branch);
    }
    
    const style = document.createElement('style');
    style.setAttribute('data-theme', 'cherry');
    style.textContent = `
        @keyframes petalFall {
            0% {
                transform: translateY(0) rotateZ(0deg);
            }
            100% {
                transform: translateY(100vh) rotateZ(360deg) translateX(100px);
            }
        }
    `;
    document.head.appendChild(style);
    
    const moon = document.querySelector('.orbital-planet');
    if (moon) moon.style.display = 'none';
    
    console.log('🌸 Cherry Blossom loaded');
}

window.themesLoaded = window.themesLoaded || {};
window.themesLoaded.cherry = true;
