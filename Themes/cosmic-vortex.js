// Cosmic Vortex Theme - Swirling galaxy vortex
function theme_cosmic_vortex() {
    const starfield = document.getElementById('starfield');
    if (!starfield) return;
    
    starfield.innerHTML = '';
    starfield.style.background = '#000000';
    
    // Create vortex center
    const vortexCenter = document.createElement('div');
    vortexCenter.style.position = 'absolute';
    vortexCenter.style.width = '200px';
    vortexCenter.style.height = '200px';
    vortexCenter.style.borderRadius = '50%';
    vortexCenter.style.background = 'radial-gradient(circle, #ffffff 0%, #6495ff 30%, transparent 70%)';
    vortexCenter.style.left = '50%';
    vortexCenter.style.top = '50%';
    vortexCenter.style.transform = 'translate(-50%, -50%)';
    vortexCenter.style.filter = 'blur(10px)';
    vortexCenter.style.animation = 'vortexPulse 3s ease-in-out infinite';
    starfield.appendChild(vortexCenter);
    
    // Create spiral arms
    for (let i = 0; i < 6; i++) {
        const arm = document.createElement('div');
        arm.style.position = 'absolute';
        arm.style.width = '600px';
        arm.style.height = '40px';
        arm.style.background = `linear-gradient(to right, 
            transparent 0%, 
            rgba(100, 149, 237, 0.6) 30%, 
            rgba(157, 125, 255, 0.4) 60%, 
            transparent 100%)`;
        arm.style.left = '50%';
        arm.style.top = '50%';
        arm.style.transformOrigin = 'left center';
        arm.style.transform = `translate(-50%, -50%) rotate(${i * 60}deg)`;
        arm.style.filter = 'blur(15px)';
        arm.style.animation = `vortexSpin ${15 + i}s linear infinite`;
        starfield.appendChild(arm);
    }
    
    // Create particles swirling
    for (let i = 0; i < 100; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        const size = Math.random() * 3 + 1;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particle.style.background = ['#ffffff', '#6495ff', '#9d7dff', '#00d9ff'][Math.floor(Math.random() * 4)];
        particle.style.borderRadius = '50%';
        particle.style.left = '50%';
        particle.style.top = '50%';
        
        const distance = Math.random() * 400 + 100;
        const angle = Math.random() * 360;
        const duration = Math.random() * 10 + 8;
        
        particle.style.animation = `vortexOrbit ${duration}s linear infinite`;
        particle.style.animationDelay = Math.random() * 5 + 's';
        particle.style.transform = `
            translate(-50%, -50%) 
            rotate(${angle}deg) 
            translateX(${distance}px)
        `;
        particle.style.boxShadow = `0 0 5px currentColor`;
        
        starfield.appendChild(particle);
    }
    
    const style = document.createElement('style');
    style.setAttribute('data-theme', 'vortex');
    style.textContent = `
        @keyframes vortexSpin {
            from { transform: translate(-50%, -50%) rotate(0deg); }
            to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @keyframes vortexOrbit {
            from { 
                transform: translate(-50%, -50%) rotate(0deg) translateX(var(--distance, 200px));
            }
            to { 
                transform: translate(-50%, -50%) rotate(360deg) translateX(var(--distance, 200px));
            }
        }
        @keyframes vortexPulse {
            0%, 100% { 
                transform: translate(-50%, -50%) scale(1);
                opacity: 0.8;
            }
            50% { 
                transform: translate(-50%, -50%) scale(1.2);
                opacity: 1;
            }
        }
    `;
    document.head.appendChild(style);
    
    const moon = document.querySelector('.orbital-planet');
    if (moon) moon.style.display = 'none';
    
    console.log('🌀 Cosmic Vortex loaded');
}

window.themesLoaded = window.themesLoaded || {};
window.themesLoaded.vortex = true;
