export const AboutAnimationModule = {
    init() {
        const aboutSection = document.querySelector('.about');
        if (!aboutSection) return;

        const animatedElements = aboutSection.querySelectorAll('h2, .company-description, .timeline-item, .goals-section');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                    
                    if (entry.target.classList.contains('timeline-item')) {
                        const index = Array.from(entry.target.parentNode.children).indexOf(entry.target);
                        entry.target.style.animationDelay = `${0.1 * index}s`;
                    }
                }
            });
        }, {
            threshold: 0.2,
            rootMargin: '0px 0px -50px 0px'
        });

        animatedElements.forEach(element => observer.observe(element));
    }
};