export const PreloaderModule = {
    init() {
        const preloader = document.querySelector('.preloader');
        if (!preloader) return;
        
        // Функция для скрытия прелоадера
        const hidePreloader = () => {
            preloader.classList.add('hidden');
        };
        
        // Скрываем прелоадер после загрузки всех ресурсов
        window.addEventListener('load', () => {
            setTimeout(hidePreloader, 500);
        });
    }
}; 