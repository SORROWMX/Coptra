import { CONSTANTS } from './constants.js';

export const HeaderModule = {
    init() {
        const header = document.querySelector('header');
        window.addEventListener('scroll', () => {
            header.classList.toggle('scrolled', window.scrollY > CONSTANTS.SCROLL_THRESHOLD);
        });

        const navMenus = document.querySelectorAll('.docs-nav');

        navMenus.forEach(nav => {
            const dropdowns = nav.querySelectorAll('.dropdown');

            dropdowns.forEach(dropdown => {
                dropdown.addEventListener('mouseenter', () => {
                    if (window.innerWidth > 768) {
                        dropdowns.forEach(otherDropdown => {
                            otherDropdown.classList.remove('active');
                        });
                        dropdown.classList.add('active');
                    }
                });

                dropdown.addEventListener('mouseleave', () => {
                    if (window.innerWidth  > 768) {
                        dropdown.classList.remove('active');
                    }
                });

                const link = dropdown.querySelector('a');
                if (link) {
                    link.addEventListener('click', (e) => {
                        if (window.innerWidth > 768) {
                            e.preventDefault();
                            e.stopPropagation();
                            
                            dropdowns.forEach(otherDropdown => {
                                if (otherDropdown !== dropdown) {
                                    otherDropdown.classList.remove('active');
                                }
                            });
                            
                            dropdown.classList.toggle('active');
                        }
                    });
                }
            });

            document.addEventListener('click', (e) => {
                if (!e.target.closest('.dropdown')) {
                    dropdowns.forEach(dropdown => {
                        dropdown.classList.remove('active');
                    });
                }
            });
        });
    }
}; 