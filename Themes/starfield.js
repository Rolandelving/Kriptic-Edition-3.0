/**
 * STARFIELD THEME (Default)
 */

window.theme_starfield = {
    create: function() {
        const starfield = document.getElementById('starfield');
        if (!starfield) return;
        
        starfield.innerHTML = '';
        starfield.style.background = '';
        
        const starCount = 150;

        for (let i = 0; i < starCount; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            
            const size = Math.random() * 2.5 + 0.5;
            star.style.cssText = `
                position: absolute;
                background: white;
                border-radius: 50%;
                width: ${size}px;
                height: ${size}px;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                animation: twinkle ${2 + Math.random() * 3}s linear infinite;
                animation-delay: ${Math.random() * 3}s;
                box-shadow: 0 0 4px rgba(255, 255, 255, 0.8);
            `;
            
            starfield.appendChild(star);
        }
        
        // Show moon
        const moon = document.querySelector('.orbital-planet');
        if (moon) moon.style.display = 'block';
        
        console.log('✨ Starfield theme activated');
    },
    
    cleanup: function() {
        // Nothing specific to clean
    },
    
    metadata: {
        name: 'Starfield',
        description: 'Classic twinkling stars',
        performanceImpact: 'low'
    }
};