import { CONSTANTS } from './constants.js';

export const ScrollToTopModule = {
    init() {
        const scrollToTopBtn = document.createElement('button');
        scrollToTopBtn.classList.add('scroll-to-top');
        scrollToTopBtn.innerHTML = '&uarr;'; // Up arrow
        document.body.appendChild(scrollToTopBtn);

        window.addEventListener('scroll', () => {
            if (window.scrollY > CONSTANTS.SCROLL_THRESHOLD) {
                scrollToTopBtn.classList.add('visible');
            } else {
                scrollToTopBtn.classList.remove('visible');
            }
        });

        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
};
