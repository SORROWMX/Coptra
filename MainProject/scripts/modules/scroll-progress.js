export const ScrollProgressModule = {
    init() {
        const progressBar = document.createElement('div');
        progressBar.classList.add('scroll-progress');
        document.body.appendChild(progressBar);

        let ticking = false;
        window.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
                    const scrollProgress = (window.pageYOffset / scrollTotal) * 100;
                    progressBar.style.width = `${scrollProgress}%`;
                    ticking = false;
                });
                ticking = true;
            }
        });
    }
}; 