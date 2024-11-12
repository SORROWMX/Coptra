export const TelegramAnimationModule = {
    init() {
        const telegramSection = document.querySelector('.telegram-community');
        if (!telegramSection) return;

        const telegramBlock = telegramSection.querySelector('.telegram-block');
        const icon = telegramSection.querySelector('.telegram-icon');
        const text = telegramSection.querySelector('.telegram-text');
        const button = telegramSection.querySelector('.telegram-button');
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
                    
                    const blockDelay = isFastScroll ? 0 : 200;
                    const elementDelay = isFastScroll ? 50 : 150;
                    
                    setTimeout(() => {
                        telegramBlock.classList.add('animate');
                    }, blockDelay);
                    
                    setTimeout(() => {
                        icon.classList.add('animate');
                    }, blockDelay + elementDelay);
                    
                    setTimeout(() => {
                        text.classList.add('animate');
                    }, blockDelay + (elementDelay * 2));
                    
                    setTimeout(() => {
                        button.classList.add('animate');
                    }, blockDelay + (elementDelay * 3));
                }
            });
        }, {
            threshold: 0.2,
            rootMargin: '0px 0px -50px 0px'
        });

        observer.observe(telegramSection);
    }
}; 