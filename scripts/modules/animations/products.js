export const ProductsAnimationModule = {
    init() {
        const productsSections = document.querySelectorAll('.products, .product-category');
        if (!productsSections.length) return;

        let lastScrollY = window.scrollY;

        window.addEventListener('scroll', () => {
            lastScrollY = window.scrollY;
        });

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const section = entry.target;
                    const title = section.querySelector('h2, .product-category__title');
                    const description = section.querySelector('.product-category__description');
                    const viewAllBtn = section.querySelector('.product-category__view-all');
                    const cards = section.querySelectorAll('.product-card');
                    
                    const scrollSpeed = Math.abs(window.scrollY - lastScrollY);
                    const isFastScroll = scrollSpeed > 50;
                    
                    const titleDelay = isFastScroll ? 0 : 0;
                    const cardsStartDelay = isFastScroll ? 200 : 300;
                    const itemDelay = isFastScroll ? 100 : 200;
                    
                    if (title) {
                        setTimeout(() => {
                            title.classList.add('animate');
                        }, titleDelay);
                    }
                    
                    if (description) {
                        setTimeout(() => {
                            description.classList.add('animate');
                        }, titleDelay + 100);
                    }
                    
                    if (viewAllBtn) {
                        setTimeout(() => {
                            viewAllBtn.classList.add('animate');
                        }, titleDelay + 200);
                    }
                    
                    cards.forEach((card, index) => {
                        setTimeout(() => {
                            card.classList.add('animate');
                        }, cardsStartDelay + (index * itemDelay));
                    });

                    observer.unobserve(section);
                }
            });
        }, {
            threshold: 0.2,
            rootMargin: '0px 0px -50px 0px'
        });

        productsSections.forEach(section => {
            observer.observe(section);
        });
    }
}; 