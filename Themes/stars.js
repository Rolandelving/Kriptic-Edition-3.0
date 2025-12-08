/**
 * STARS THEME - Starfield with Parallax
 */

export function create() {
    const starfield = document.getElementById('starfield');
    if (!starfield) return;
    
    starfield.innerHTML = '';
    starfield.style.background = '';
    
    // Performance check
    const isLowEnd = window.PerformanceManager?.reducedParticleMode || false;
    const starCount = isLowEnd ? 60 : 150;

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        const size = Math.random() * 2.5 + 0.5;
        const depth = Math.random();
        
        star.style.width = size + 'px';
        star.style.height = size + 'px';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDuration = (2 + Math.random() * 3) + 's';
        star.style.animationDelay = Math.random() * 3 + 's';
        star.dataset.depth = depth;
        star.style.willChange = 'opacity, transform';
        
        starfield.appendChild(star);
    }
    
    // Show orbital planet for stars only
    const moon = document.querySelector('.orbital-planet');
    if (moon && !window.PerformanceManager?.isMobile) {
        moon.style.display = 'block';
    }
    
    console.log('✨ Stars theme activated');
}

export const metadata = {
    name: 'Starfield',
    description: 'Classic twinkling stars with parallax effect',
    author: 'Kriptic Edition',
    performanceImpact: 'low'
};