export const ProductsAnimationModule = {
    init() {
        const productsSection = document.querySelector('.products');
        if (!productsSection) return;

        const title = productsSection.querySelector('h2');
        const cards = productsSection.querySelectorAll('.product-card');
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
                    const cardsStartDelay = isFastScroll ? 200 : 300;
                    const itemDelay = isFastScroll ? 100 : 200;
                    
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

        observer.observe(productsSection);
    }
}; 