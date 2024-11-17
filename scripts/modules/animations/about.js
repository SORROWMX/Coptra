export const AboutAnimationModule = {
    init() {
        const aboutSection = document.querySelector('.about');
        if (!aboutSection) return;

        // Удаляем все существующие классы animate и очищаем стили
        aboutSection.querySelectorAll('.animate').forEach(el => {
            el.classList.remove('animate');
            el.style.animationDelay = '';
        });

        const title = aboutSection.querySelector('h2');
        const description = aboutSection.querySelector('.company-description');
        const timelineItems = aboutSection.querySelectorAll('.timeline-item:not(.animated)');
        
        // Анимируем заголовок и описание
        requestAnimationFrame(() => {
            if (title) title.classList.add('animate');
            
            if (description) {
                setTimeout(() => {
                    description.classList.add('animate');
                }, 200);
            }
        });
        
        // Один observer для timeline элементов
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const element = entry.target;
                    
                    // Проверяем, не была ли уже применена анимация
                    if (!element.hasAttribute('data-animated')) {
                        element.setAttribute('data-animated', 'true');
                        element.classList.add('animate');
                        
                        if (element.classList.contains('timeline-item')) {
                            const index = Array.from(timelineItems).indexOf(element);
                            element.style.animationDelay = `${0.1 * index}s`;
                        }
                        
                        observer.unobserve(element);
                    }
                }
            });
        }, {
            threshold: 0.2,
            rootMargin: '0px 0px -50px 0px'
        });

        // Наблюдаем только за элементами, которые еще не были анимированы
        timelineItems.forEach(item => {
            if (!item.hasAttribute('data-animated')) {
                observer.observe(item);
            }
        });
    }
};