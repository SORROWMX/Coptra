export const PartnersAnimationModule = {
    init() {
        const partnersSection = document.querySelector('.partners');
        if (!partnersSection) return;

        const title = partnersSection.querySelector('h2');
        const partners = partnersSection.querySelectorAll('.partner-item');
        let isAnimated = false;
        let lastScrollY = window.scrollY;

        window.addEventListener('scroll', () => {
            lastScrollY = window.scrollY;
        });

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !isAnimated) {
                    isAnimated = true;
                    
                    const scrollSpeed = Math.abs(window.scrollY - lastScrollY);
                    const isFastScroll = scrollSpeed > 50;
                    
                    const titleDelay = isFastScroll ? 0 : 0;
                    const partnersStartDelay = isFastScroll ? 100 : 300;
                    const itemDelay = isFastScroll ? 50 : 150;
                    
                    setTimeout(() => {
                        if (title) title.classList.add('animate');
                    }, titleDelay);
                    
                    partners.forEach((partner, index) => {
                        setTimeout(() => {
                            partner.classList.add('animate');
                        }, partnersStartDelay + (index * itemDelay));
                    });
                }
            });
        }, {
            threshold: 0.2,
            rootMargin: '0px 0px -50px 0px'
        });

        observer.observe(partnersSection);
    }
}; 