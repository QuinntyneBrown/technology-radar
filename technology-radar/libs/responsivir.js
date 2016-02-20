var Responsivir = (function () {
    function Responsivir() {
    }
    Responsivir.onChange = function (event) {
        if (Responsivir.timeoutId)
            clearTimeout(Responsivir.timeoutId);
        Responsivir.timeoutId = setTimeout(function () {
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
                    Responsivir.updateResponsiveClass("extraLarge");
                    break;
            }
        }, 100);
    };
    Responsivir.removeResponsiveClasses = function () {
        document.body.classList.remove("small");
        document.body.classList.remove("midSmall");
        document.body.classList.remove("medium");
        document.body.classList.remove("large");
        document.body.classList.remove("extraLarge");
    };
    Responsivir.updateResponsiveClass = function (className) {
        Responsivir.removeResponsiveClasses();
        document.body.classList.add(className);
    };
    return Responsivir;
})();
document.addEventListener("DOMContentLoaded", function (event) { return Responsivir.onChange(event); });
window.addEventListener("resize", function (event) { return Responsivir.onChange(event); });
window.addEventListener("orientationchange", function (event) { return Responsivir.onChange(event); });
//# sourceMappingURL=responsivir.js.map