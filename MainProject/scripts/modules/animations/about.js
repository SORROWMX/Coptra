export const AboutAnimationModule = {
    init() {
        const aboutSection = document.querySelector('.about');
        if (!aboutSection) return;

        const title = aboutSection.querySelector('h2');
        const description = aboutSection.querySelector('.company-description');
        const otherElements = aboutSection.querySelectorAll('.timeline-item, .goals-section');
        
        // Анимируем заголовок и описание сразу после hero секции
        setTimeout(() => {
            if (title) title.classList.add('animate');
            
            setTimeout(() => {
                if (description) description.classList.add('animate');
            }, 200);
        }, 600); // Задержка после анимации hero секции
        
        // Остальные элементы анимируем при скролле
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                    
                    if (entry.target.classList.contains('timeline-item')) {
                        const index = Array.from(entry.target.parentNode.children).indexOf(entry.target);
                        entry.target.style.animationDelay = `${0.1 * index}s`;
                    }
                }
            });
        }, {
            threshold: 0.2,
            rootMargin: '0px 0px -50px 0px'
        });

        otherElements.forEach(element => observer.observe(element));
    }
};