export function elementObserver(selector:string, animationClass:string){
    const element: HTMLElement | null = document.querySelector(selector);

    if (element) {
        // Crea un observador de intersección
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
            if (entry.isIntersecting) {
                element.classList.add(animationClass); // Agrega la clase para activar la animación
                observer.unobserve(entry.target); // Deja de observar el elemento una vez que se activa la animación
            }
            });
        });

        // Observa el elemento
        observer.observe(element);
    }
}