class Responsivir {

    static timeoutId; 

    static removeResponsiveClasses = () => {
        document.body.classList.remove("small");
        document.body.classList.remove("midSmall");
        document.body.classList.remove("medium");
        document.body.classList.remove("large");
        document.body.classList.remove("extraLarge");
    }

    static updateResponsiveClass = (className) => {
        Responsivir.removeResponsiveClasses();
        document.body.classList.add(className);
    }

    static onChange(event) {
        if (Responsivir.timeoutId) clearTimeout(Responsivir.timeoutId);
        Responsivir.timeoutId = setTimeout(() => {
            var screenWidth = window.screen.width;
            switch (true) {
                case (screenWidth < 480):
                    Responsivir.updateResponsiveClass("small");
                    break;
                case (screenWidth < 752):
                    Responsivir.updateResponsiveClass("midSmall");
                    break;
                case (screenWidth < 960):
                    Responsivir.updateResponsiveClass("medium");
                    break;
                case (screenWidth < 1280):
                    Responsivir.updateResponsiveClass("large");
                    break;
                default:
                    Responsivir.updateResponsiveClass("extraLarge")
                    break;
            }
        }, 100);
    }
}

document.addEventListener("DOMContentLoaded", event => Responsivir.onChange(event));

window.addEventListener("resize", event => Responsivir.onChange(event));

window.addEventListener("orientationchange", event => Responsivir.onChange(event));