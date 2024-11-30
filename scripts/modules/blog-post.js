export const BlogPostModule = {
    init() {
        this.initRelatedPostsSlider();
        this.initRelatedPostsAnimation();
        this.initCopyLinkButton();
    },

    initRelatedPostsAnimation() {
        const relatedSection = document.querySelector('.related-posts');
        if (!relatedSection) return;

        const title = relatedSection.querySelector('h2');
        const newsItems = relatedSection.querySelectorAll('.news-item');
        let isAnimated = false;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !isAnimated) {
                    isAnimated = true;
                    
                    if (title) {
                        title.classList.add('animate');
                    }
                    
                    newsItems.forEach((item, index) => {
                        setTimeout(() => {
                            item.classList.add('animate');
                        }, 100 + (index * 100));
                    });
                }
            });
        }, {
            threshold: 0.2
        });

        observer.observe(relatedSection);
    },

    initRelatedPostsSlider() {
        try {
            const slider = document.querySelector('.related-posts-slider');
            if (!slider) {
                console.warn('Slider element not found');
                return;
            }

            const swiper = new Swiper(slider, {
                slidesPerView: 1,
                spaceBetween: 30,
                loop: false,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                breakpoints: {
                    1024: {
                        slidesPerView: 2,
                    }
                },
                on: {
                    init: function() {
                        const pagination = slider.querySelector('.swiper-pagination');
                        if (pagination) {
                            setTimeout(() => {
                                pagination.classList.add('animate');
                            }, 500);
                        }
                    }
                }
            });

        } catch (error) {
            console.error('Error initializing slider:', error);
        }
    },

    initCopyLinkButton() {
        const copyButton = document.querySelector('.article-end-share-button.copy-link');
        if (!copyButton) return;

        copyButton.addEventListener('click', async () => {
            try {
                // Получаем текущий URL страницы
                const currentUrl = window.location.href;
                await navigator.clipboard.writeText(currentUrl);

                // Добавляем класс для визуальной обратной связи
                copyButton.classList.add('copied');
                
                // Временно меняем иконку на галочку
                const icon = copyButton.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-link');
                    icon.classList.add('fa-check');
                }

                // Возвращаем исходное состояние через 2 секунды
                setTimeout(() => {
                    copyButton.classList.remove('copied');
                    if (icon) {
                        icon.classList.remove('fa-check');
                        icon.classList.add('fa-link');
                    }
                }, 2000);

            } catch (err) {
                console.error('Failed to copy URL:', err);
                // Можно добавить обработку ошибки, например показать уведомление
            }
        });
    }
};