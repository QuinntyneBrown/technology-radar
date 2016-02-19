document.addEventListener("DOMContentLoaded", function (event) { return MasterControl.onChange(event); });
window.addEventListener("resize", function (event) { return MasterControl.onChange(event); });
window.addEventListener("orientationchange", function (event) { return MasterControl.onChange(event); });
var MasterControl = (function () {
    function MasterControl() {
    }
    MasterControl.onChange = function (event) {
        if (MasterControl.timeoutId)
            clearTimeout(MasterControl.timeoutId);
        MasterControl.timeoutId = setTimeout(function () {
            var screenWidth = window.screen.width;
            switch (true) {
                case (screenWidth < 480):
                    MasterControl.updateResponsiveClass("small");
                    break;
                case (screenWidth < 752):
                    MasterControl.updateResponsiveClass("midSmall");
                    break;
                case (screenWidth < 960):
                    MasterControl.updateResponsiveClass("medium");
                    break;
                case (screenWidth < 1280):
                    MasterControl.updateResponsiveClass("large");
                    break;
                default:
                    MasterControl.updateResponsiveClass("extraLarge");
                    break;
            }
        }, 100);
    };
    MasterControl.removeResponsiveClasses = function () {
        document.body.classList.remove("small");
        document.body.classList.remove("midSmall");
        document.body.classList.remove("medium");
        document.body.classList.remove("large");
        document.body.classList.remove("extraLarge");
    };
    MasterControl.updateResponsiveClass = function (className) {
        MasterControl.removeResponsiveClasses();
        document.body.classList.add(className);
    };
    return MasterControl;
})();
