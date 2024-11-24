export const NewsAnimationModule = {
    init() {
        const newsSection = document.querySelector('.news');
        if (!newsSection) return;

        const title = newsSection.querySelector('h2');
        const newsItems = newsSection.querySelectorAll('.news-item');
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
                    const itemsStartDelay = isFastScroll ? 100 : 300;
                    const itemDelay = isFastScroll ? 50 : 100;
                    
                    setTimeout(() => {
                        if (title) title.classList.add('animate');
                    }, titleDelay);
                    
                    newsItems.forEach((item, index) => {
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

        observer.observe(newsSection);
    }
}; 