export const ContactAnimationModule = {
    init() {
        const contactSection = document.querySelector('.contact');
        if (!contactSection) return;

        const title = contactSection.querySelector('h2');
        const form = contactSection.querySelector('.contact-form');
        const infoContainer = contactSection.querySelector('.contact-info-container');
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
                    const formDelay = isFastScroll ? 100 : 300;
                    const infoDelay = isFastScroll ? 200 : 450;
                    
                    setTimeout(() => {
                        if (title) title.classList.add('animate');
                    }, titleDelay);
                    
                    setTimeout(() => {
                        form.classList.add('animate');
                    }, formDelay);

                    setTimeout(() => {
                        infoContainer.classList.add('animate');
                    }, infoDelay);
                }
            });
        }, {
            threshold: 0.2,
            rootMargin: '0px 0px -50px 0px'
        });

        observer.observe(contactSection);
    }
}; 