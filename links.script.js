document.addEventListener('DOMContentLoaded', () => {
    const linkCards = document.querySelectorAll('.link-card');

    linkCards.forEach((card, index) => {
        card.style.animation = `fadeIn 0.5s ease forwards ${index / 7 + 0.3}s`;
    });
});