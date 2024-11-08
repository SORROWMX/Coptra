export const PreloaderModule = {
    init() {
        const preloader = document.querySelector('.preloader');
        if (!preloader) return;
        
        // Функция для скрытия прелоадера
        const hidePreloader = () => {
            preloader.classList.add('hidden');
        };
        
        // Основной обработчик загрузки
        window.addEventListener('load', () => {
            setTimeout(hidePreloader, 500);
        });

        // Страховочный таймер
        document.addEventListener('DOMContentLoaded', () => {
            setTimeout(() => {
                if (!preloader.classList.contains('hidden')) {
                    hidePreloader();
                }
            }, 5000);
        });
    }
}; 