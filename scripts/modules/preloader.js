export const PreloaderModule = {
    init() {
        const preloader = document.querySelector('.preloader');
        if (!preloader) return;
        
        // Функция для скрытия прелоадера
        const hidePreloader = () => {
            preloader.classList.add('hidden');
            // Удаляем прелоадер из DOM после анимации
            setTimeout(() => {
                preloader.remove();
            }, 300);
        };

        // Комбинированный подход к скрытию прелоадера
        const startPreloaderHide = () => {
            // Сразу запускаем таймер
            const timeoutId = setTimeout(hidePreloader, 3000);

            // Пытаемся отловить загрузку страницы
            window.addEventListener('load', () => {
                clearTimeout(timeoutId); // Очищаем таймер если успели поймать load
                hidePreloader();
            }, { once: true }); // Используем once для автоматического удаления слушателя
        };

        // Запускаем процесс скрытия прелоадера
        if (document.readyState === 'complete') {
            hidePreloader();
        } else {
            startPreloaderHide();
        }
    }
}; 