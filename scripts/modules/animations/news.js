export const NewsAnimationModule = {
    init() {
        return new Promise((resolve) => {
            const newsSection = document.querySelector('.news');
            if (!newsSection) {
                resolve();
                return;
            }

            const title = newsSection.querySelector('h2');
            const newsItems = Array.from(newsSection.querySelectorAll('.news-item'));
            let isAnimated = false;

            const animations = newsItems.map((item, index) => ({
                element: item,
                delay: 100 + (index * 50)
            }));

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting && !isAnimated) {
                        isAnimated = true;
                        
                        requestAnimationFrame(() => {
                            if (title) {
                                title.classList.add('animate');
                            }
                            
                            animations.forEach(({ element, delay }) => {
                                setTimeout(() => {
                                    requestAnimationFrame(() => {
                                        element.classList.add('animate');
                                    });
                                }, delay);
                            });
                        });
                    }
                });
            }, {
                threshold: 0.2,
                rootMargin: '0px 0px -50px 0px'
            });

            observer.observe(newsSection);
            
            // Разрешаем промис после инициализации
            resolve();

            // Возвращаем функцию очистки
            return () => observer.disconnect();
        });
    }
}; 