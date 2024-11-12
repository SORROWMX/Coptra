export const LazyLoadingModule = {
    init() {
        // Настройка наблюдателя за изображениями
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    this.loadImage(img);
                    observer.unobserve(img);
                }
            });
        }, {
            rootMargin: '50px 0px'
        });

        // Находим все изображения с data-src
        const lazyImages = document.querySelectorAll('img[data-src]');
        lazyImages.forEach(img => imageObserver.observe(img));

        // Настройка наблюдателя за фоновыми изображениями
        const bgObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const element = entry.target;
                    this.loadBackground(element);
                    observer.unobserve(element);
                }
            });
        }, {
            rootMargin: '50px 0px'
        });

        // Находим все элементы с data-background
        const lazyBackgrounds = document.querySelectorAll('[data-background]');
        lazyBackgrounds.forEach(el => bgObserver.observe(el));
    },

    loadImage(img) {
        const src = img.getAttribute('data-src');
        if (!src) return;

        img.src = src;
        img.removeAttribute('data-src');
        img.classList.add('loaded');
    },

    loadBackground(element) {
        const src = element.getAttribute('data-background');
        if (!src) return;

        element.style.backgroundImage = `url(${src})`;
        element.removeAttribute('data-background');
        element.classList.add('loaded');
    }
}; 