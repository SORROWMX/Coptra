export const MapModule = {
    init() {
        const mapContainer = document.getElementById('map');
        if (!mapContainer || typeof ymaps === 'undefined') return;

        ymaps.ready(() => {
            const myMap = new ymaps.Map(mapContainer, {
                center: [52.976048, 36.069789],
                zoom: 16,
                controls: ['zoomControl']
            });

            const myPlacemark = new ymaps.Placemark([52.976048, 36.069789], {
                balloonContent: 'КОПТРА<br>Наугорское шоссе, 29'
            }, {
                preset: 'islands#redDotIcon'
            });

            myMap.geoObjects.add(myPlacemark);

            // Отключаем скролл карты до клика
            myMap.behaviors.disable('scrollZoom');
            
            // Включаем скролл только после клика по карте
            mapContainer.addEventListener('click', () => {
                myMap.behaviors.enable('scrollZoom');
            });

            // Отключаем скролл при уходе с карты
            mapContainer.addEventListener('mouseleave', () => {
                myMap.behaviors.disable('scrollZoom');
            });
        });
    }
}; 