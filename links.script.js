document.addEventListener('DOMContentLoaded', () => {
    // --- PARTE 1: Animación de entrada para los enlaces ---
    const linkCards = document.querySelectorAll('.link-card');
    linkCards.forEach((card, index) => {
        card.style.animation = `fadeIn 0.5s ease forwards ${index / 7 + 0.3}s`;
    });

    // --- PARTE 2: Seguimiento de clics para Google Analytics ---
    linkCards.forEach(card => {
        card.addEventListener('click', (event) => {
            // Prevenimos la redirección inmediata para dar tiempo a que se envíe el evento
            event.preventDefault(); 

            const linkId = card.id; // El ID que pusimos en el HTML (ej: 'website_link')
            const linkUrl = card.href; // La URL de destino

            // Verificamos que la función de Google Analytics (gtag) esté disponible
            if (typeof gtag === 'function') {
                // Enviamos el evento a Google Analytics
                gtag('event', 'link_click', {
                    'event_category': 'Links Page',
                    'event_label': linkId, // Así sabrás qué enlace específico se pulsó
                    'value': 1
                });
            }
            
            // Esperamos 300 milisegundos para asegurar que el evento se envíe y luego abrimos el enlace
            setTimeout(() => {
                window.open(linkUrl, '_blank');
            }, 300);
        });
    });
});
