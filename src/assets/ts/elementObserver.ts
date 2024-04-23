export function elementObserver(selector:string, animationClass:string){
    const elementList: NodeListOf<Element> | null = document.querySelectorAll(selector);

    if (elementList) {

        elementList.forEach((element)=>{
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
        })
    }
}