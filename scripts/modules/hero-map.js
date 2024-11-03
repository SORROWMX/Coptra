export const HeroMapModule = {
    init() {
        const heroMapContainer = document.getElementById('hero-map');
        if (!heroMapContainer || typeof ymaps === 'undefined') return;

        ymaps.ready(() => {
            const heroMap = new ymaps.Map(heroMapContainer, {
                center: [52.976048, 36.069789],
                zoom: 15,
            }, {
                suppressMapOpenBlock: true
            });

            // Создаем и добавляем маркер
            const placemark = new ymaps.Placemark([52.976048, 36.069789], {
                balloonContent: 'КОПТРА<br>Наугорское шоссе, 29'
            }, {
                preset: 'islands#redDotIcon'
            });

            heroMap.geoObjects.add(placemark);

            // Отключаем зум скроллом
            heroMap.behaviors.disable('scrollZoom');
            
            // Добавляем обработчики событий для мобильных устройств
            heroMapContainer.addEventListener('touchstart', () => {
                heroMap.behaviors.enable('drag');
            });

            heroMapContainer.addEventListener('touchend', () => {
                heroMap.behaviors.disable('drag');
            });

            // Оптимизация производительности
            heroMap.events.add('actionbegin', () => {
                heroMapContainer.style.pointerEvents = 'auto';
            });

            heroMap.events.add('actionend', () => {
                heroMapContainer.style.pointerEvents = 'none';
            });
        });
    }
}; 