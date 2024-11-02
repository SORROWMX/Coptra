export const FAQAnimationModule = {
    init() {
        const faqSection = document.querySelector('.faq');
        if (!faqSection) return;

        const title = faqSection.querySelector('h2');
        const faqItems = faqSection.querySelectorAll('.faq-item');
        let isAnimated = false;
        let lastScrollY = window.scrollY;

        window.addEventListener('scroll', () => {
            lastScrollY = window.scrollY;
        });

        // Обработчики кликов для FAQ
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            const answer = item.querySelector('.faq-answer');

            question.addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                
                faqItems.forEach(q => {
                    q.classList.remove('active');
                    q.querySelector('.faq-answer').style.maxHeight = null;
                });

                if (!isActive) {
                    item.classList.add('active');
                    answer.style.maxHeight = `${answer.scrollHeight + 20}px`;
                }
            });
        });

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !isAnimated) {
                    isAnimated = true;
                    
                    const scrollSpeed = Math.abs(window.scrollY - lastScrollY);
                    const isFastScroll = scrollSpeed > 50;
                    
                    const titleDelay = isFastScroll ? 0 : 0;
                    const itemsStartDelay = isFastScroll ? 100 : 500;
                    const itemDelay = isFastScroll ? 50 : 100;
                    
                    setTimeout(() => {
                        if (title) title.classList.add('animate');
                    }, titleDelay);
                    
                    faqItems.forEach((item, index) => {
                        setTimeout(() => {
                            item.classList.add('animate');
                        }, itemsStartDelay + (index * itemDelay));
                    });
                }
            });
        }, {
            threshold: 0.2,
            rootMargin: '0px 0px -50px 0px'
        });

        observer.observe(faqSection);
    }
}; 