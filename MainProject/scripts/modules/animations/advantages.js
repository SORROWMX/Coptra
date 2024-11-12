export const AdvantagesAnimationModule = {
    init() {
        const advantagesSection = document.querySelector('.advantages');
        if (!advantagesSection) return;

        const title = advantagesSection.querySelector('h2');
        const cards = advantagesSection.querySelectorAll('.advantage-card');
        let lastScrollY = window.scrollY;

        this.initializeCardFlip(cards);

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
    },

    initializeCardFlip(cards) {
        const isMobile = () => window.innerWidth <= 480;
        let activeCard = null;

        cards.forEach(card => {
            card.addEventListener('click', function() {
                if (isMobile()) {
                    if (activeCard && activeCard !== this) {
                        activeCard.classList.remove('is-flipped');
                    }

                    this.classList.toggle('is-flipped');
                    
                    activeCard = this.classList.contains('is-flipped') ? this : null;
                }
            });
        });

        window.addEventListener('resize', function() {
            if (!isMobile()) {
                cards.forEach(card => card.classList.remove('is-flipped'));
                activeCard = null;
            }
        });
    }
}; 