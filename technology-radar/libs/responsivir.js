/// <reference path="formencode.ts" />
var Responsivir = (function () {
    function Responsivir($window) {
        var _this = this;
        this.$window = $window;
        this.removeResponsiveClasses = function () {
            _this.$window.document.body.classList.remove("small");
            _this.$window.document.body.classList.remove("midSmall");
            _this.$window.document.body.classList.remove("medium");
            _this.$window.document.body.classList.remove("large");
            _this.$window.document.body.classList.remove("extraLarge");
        };
        this.updateResponsiveClass = function (className) {
            _this.removeResponsiveClasses();
            _this.$window.document.body.classList.add(className);
        };
        $window.document.addEventListener("DOMContentLoaded", function (event) { return _this.onChange(event); });
        $window.addEventListener("resize", function (event) { return _this.onChange(event); });
        $window.addEventListener("orientationchange", function (event) { return _this.onChange(event); });
        this.onChange(null);
    }
    Responsivir.prototype.onChange = function (event) {
        var _this = this;
        if (this.timeoutId)
            this.$window.clearTimeout(this.timeoutId);
        this.timeoutId = this.$window.setTimeout(function () {
            var innerWidth = _this.$window.innerWidth;
            switch (true) {
                case (innerWidth < 480):
                    _this.updateResponsiveClass("small");
                    break;
                case (innerWidth < 752):
                    _this.updateResponsiveClass("midSmall");
                    break;
                case (innerWidth < 960):
                    _this.updateResponsiveClass("medium");
                    break;
                case (innerWidth < 1280):
                    _this.updateResponsiveClass("large");
                    break;
                default:
                    _this.updateResponsiveClass("extraLarge");
                    break;
            }
        }, 100);
    };
    return Responsivir;
})();
exports.Responsivir = Responsivir;
