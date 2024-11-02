export const HeroAnimationModule = {
    init() {
        const hero = document.querySelector('.hero');
        if (!hero) return;

        // Анимация текста заголовка
        const title = hero.querySelector('h1');
        if (title) {
            const words = title.textContent.split(' ');
            title.textContent = '';
            
            words.forEach((word, wordIndex) => {
                const wordSpan = document.createElement('span');
                wordSpan.className = 'word';
                
                word.split('').forEach((char, charIndex) => {
                    const letterSpan = document.createElement('span');
                    letterSpan.textContent = char;
                    letterSpan.style.animationDelay = `${0.3 + (wordIndex * word.length + charIndex) * 0.05}s`;
                    letterSpan.style.animation = 'letterFadeIn 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards';
                    wordSpan.appendChild(letterSpan);
                });
                
                title.appendChild(wordSpan);
                if (wordIndex < words.length - 1) {
                    title.appendChild(document.createTextNode(' '));
                }
            });
        }

        // Анимация плавающих элементов
        const floatingElements = hero.querySelectorAll('.floating-element');
        floatingElements.forEach((element, index) => {
            element.style.animation = `float ${3 + index * 0.5}s ease-in-out infinite`;
            element.style.animationDelay = `${index * 0.2}s`;
        });
    }
}; 