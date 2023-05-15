const links = document.querySelectorAll('.bouncelinks');

bouncelinks.forEach(bounce => {
    bounce.addEventListener('mouseover', () => {
        bounce.style.transform = 'translateY(-5px)';
        bounce.style.transition = 'transform 0.2s ease-out';
    });

bouncelinks.forEach(bounce => {
    bounce.addEventListener('mouseout', () => {
        bounce.style.transform('translateY(0)');
        bounce.style.transition('transform 0.2s ease-out')
    })
    });
})

