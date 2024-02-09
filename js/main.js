document.addEventListener('DOMContentLoaded', () => {

    // Add smooth scrolling to all anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach( anchorLink => {
        anchorLink.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1); 
            const targetSection = document.getElementById(targetId); 
            if (targetSection) {
                const scrollDistance = targetSection.offsetTop - document.documentElement.scrollTop;
                window.scrollBy({ top: scrollDistance, left: 0, behavior: 'smooth' });
            }
        });
    });
    
});
