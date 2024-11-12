export const ApplicationsModule = {
    init() {
        const applicationCards = document.querySelectorAll('.application-card');
        const title = document.querySelector('.applications h2');
        if (!applicationCards.length) return;

        this.initializeAnimations(title);
        this.initializeHoverEffects();
    },

    initializeAnimations(title) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (entry.target.tagName === 'H2') {
                        entry.target.classList.add('animate');
                    } else {
                        entry.target.classList.add('animate');
                    }
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.2
        });

        // Наблюдаем за заголовком
        if (title) {
            observer.observe(title);
        }

        // Наблюдаем за карточками
        document.querySelectorAll('.application-card').forEach(card => {
            observer.observe(card);
        });
    },

    initializeHoverEffects() {
        document.querySelectorAll('.application-card').forEach(card => {
            const icons = card.querySelectorAll('.application-icon img');
            
            card.addEventListener('mouseenter', () => {
                icons.forEach(icon => {
                    if (icon.classList.contains('agriculture-drone-icon')) {
                        icon.style.transform = 'translateY(-10px)';
                    } else if (icon.classList.contains('agriculture-drop1-icon')) {
                        icon.style.transform = 'translateY(5px)';
                    } else if (icon.classList.contains('agriculture-drop2-icon')) {
                        icon.style.transform = 'translateY(8px)';
                    }
                    // Добавьте другие специфические анимации для других иконок
                });
            });

            card.addEventListener('mouseleave', () => {
                icons.forEach(icon => {
                    icon.style.transform = 'translateY(0)';
                });
            });
        });
    }
}; 