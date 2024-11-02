export const AdvantagesAnimationModule = {
    init() {
        const advantagesSection = document.querySelector('.advantages');
        if (!advantagesSection) return;

        const title = advantagesSection.querySelector('h2');
        const cards = advantagesSection.querySelectorAll('.advantage-card');
        let lastScrollY = window.scrollY;

        window.addEventListener('scroll', () => {
            lastScrollY = window.scrollY;
        });

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const scrollSpeed = Math.abs(window.scrollY - lastScrollY);
                    const isFastScroll = scrollSpeed > 50;
                    
                    const titleDelay = isFastScroll ? 0 : 0;
                    const cardsStartDelay = isFastScroll ? 100 : 200;
                    const itemDelay = isFastScroll ? 50 : 100;
                    
                    setTimeout(() => {
                        if (title) title.classList.add('animate');
                    }, titleDelay);
                    
                    cards.forEach((card, index) => {
                        setTimeout(() => {
                            card.classList.add('animate');
                        }, cardsStartDelay + (index * itemDelay));
                    });
                }
            });
        }, {
            threshold: 0.2,
            rootMargin: '0px 0px -50px 0px'
        });

        observer.observe(advantagesSection);
    }
}; 