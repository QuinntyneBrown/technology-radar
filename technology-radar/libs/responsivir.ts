/// <reference path="formencode.ts" />
export class Responsivir {

    constructor(private $window) {
        $window.document.addEventListener("DOMContentLoaded", event => this.onChange(event));
        $window.addEventListener("resize", event => this.onChange(event));
        $window.addEventListener("orientationchange", event => this.onChange(event));
        this.onChange(null);
    }

    timeoutId; 

    removeResponsiveClasses = () => {
        this.$window.document.body.classList.remove("small");
        this.$window.document.body.classList.remove("midSmall");
        this.$window.document.body.classList.remove("medium");
        this.$window.document.body.classList.remove("large");
        this.$window.document.body.classList.remove("extraLarge");
    }

    updateResponsiveClass = (className) => {
        this.removeResponsiveClasses();
        this.$window.document.body.classList.add(className);
    }

    onChange(event) {
        if (this.timeoutId) this.$window.clearTimeout(this.timeoutId);
        this.timeoutId = this.$window.setTimeout(() => {
            var innerWidth = this.$window.innerWidth;
            switch (true) {
                case (innerWidth < 480):
                    this.updateResponsiveClass("small");
                    break;
                case (innerWidth < 752):
                    this.updateResponsiveClass("midSmall");
                    break;
                case (innerWidth < 960):
                    this.updateResponsiveClass("medium");
                    break;
                case (innerWidth < 1280):
                    this.updateResponsiveClass("large");
                    break;
                default:
                    this.updateResponsiveClass("extraLarge")
                    break;
            }
        }, 100);
    }
}


