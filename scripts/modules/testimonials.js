export const TestimonialsModule = {
    init() {
        const testimonialsSection = document.querySelector('.testimonials');
        if (!testimonialsSection) return;

        const title = testimonialsSection.querySelector('h2');
        const cards = testimonialsSection.querySelectorAll('.testimonial-card');
        const pagination = testimonialsSection.querySelector('.swiper-pagination');
        let isAnimated = false;
        let lastScrollY = window.scrollY;

        // Инициализация Swiper
        const swiper = new Swiper('.testimonials-slider', {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                768: {
                    slidesPerView: 2,
                }
            }
        });

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

                    const paginationDelay = cardsStartDelay + (cards.length * itemDelay) - 100;
                    setTimeout(() => {
                        if (pagination) pagination.classList.add('animate');
                    }, paginationDelay);
                }
            });
        }, {
            threshold: 0.2,
            rootMargin: '0px 0px -50px 0px'
        });

        observer.observe(testimonialsSection);

        let userInteracted = false;
        
        swiper.on('touchStart', () => {
            userInteracted = true;
            swiper.autoplay.stop();
        });

        swiper.on('transitionEnd', () => {
            if (userInteracted) {
                swiper.autoplay.start();
                userInteracted = false;
            }
        });
    }
}; 