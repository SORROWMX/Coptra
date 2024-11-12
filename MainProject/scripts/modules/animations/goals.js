export const GoalsAnimationModule = {
    init() {
        const goalsSection = document.querySelector('.goals');
        if (!goalsSection) return;

        const title = goalsSection.querySelector('h2');
        const cards = goalsSection.querySelectorAll('.goal-card');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (entry.target.tagName.toLowerCase() === 'h2') {
                        entry.target.classList.add('animate');
                    } else if (entry.target.classList.contains('goal-card')) {
                        entry.target.classList.add('visible');
                        this.setProgress(entry.target);
                        
                        const steps = entry.target.querySelectorAll('.goal-step');
                        steps.forEach((step, index) => {
                            setTimeout(() => {
                                step.classList.add('visible');
                            }, 200 * (index + 1));
                        });
                    }
                }
            });
        }, {
            threshold: 0.2,
            rootMargin: '0px 0px -50px 0px'
        });

        if (title) observer.observe(title);
        cards.forEach(card => observer.observe(card));
    },

    setProgress(card) {
        const circle = card.querySelector('.progress-ring__circle');
        const progress = card.dataset.progress;
        const radius = circle.r.baseVal.value;
        const circumference = radius * 2 * Math.PI;
        
        circle.style.strokeDasharray = `${circumference} ${circumference}`;
        setTimeout(() => {
            circle.style.strokeDashoffset = circumference - (progress / 100) * circumference;
        }, 100);
    }
}; 