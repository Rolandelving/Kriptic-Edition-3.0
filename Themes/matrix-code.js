// Matrix Code Theme - Falling green code
function theme_matrix_code() {
    const starfield = document.getElementById('starfield');
    if (!starfield) return;
    
    starfield.innerHTML = '';
    starfield.style.background = '#000000';
    
    const columns = Math.floor(window.innerWidth / 20);
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()';
    
    for (let i = 0; i < columns; i++) {
        const column = document.createElement('div');
        column.style.position = 'absolute';
        column.style.left = i * 20 + 'px';
        column.style.top = '0';
        column.style.width = '20px';
        column.style.height = '100%';
        column.style.color = '#00ff00';
        column.style.fontFamily = 'monospace';
        column.style.fontSize = '14px';
        column.style.overflow = 'hidden';
        column.style.animation = `matrixRain ${Math.random() * 3 + 2}s linear infinite`;
        column.style.animationDelay = Math.random() * 2 + 's';
        
        let text = '';
        for (let j = 0; j < 50; j++) {
            text += chars[Math.floor(Math.random() * chars.length)] + '<br>';
        }
        column.innerHTML = text;
        
        starfield.appendChild(column);
    }
    
    const style = document.createElement('style');
    style.setAttribute('data-theme', 'matrix');
    style.textContent = `
        @keyframes matrixRain {
            0% { transform: translateY(-100%); opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { transform: translateY(100vh); opacity: 0; }
        }
    `;
    document.head.appendChild(style);
    
    const moon = document.querySelector('.orbital-planet');
    if (moon) moon.style.display = 'none';
    
    console.log('💻 Matrix Code loaded');
}

window.themesLoaded = window.themesLoaded || {};
window.themesLoaded.matrix = true;
