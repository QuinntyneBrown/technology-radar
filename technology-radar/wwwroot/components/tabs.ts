export class TabsComponent {
    constructor(private $attrs: angular.IAttributes, private $element: angular.IAugmentedJQuery, private tabActionCreator) {
        
    }

    storeOnChange = state => {        
        this.currentIndex = state.tabIndex[this.$attrs["tabsName"]] || 0;       
        var titleElements = angular.element(this.$element[0].querySelectorAll('.tab-title'));
        for (var i = 0; i < titleElements.length; i++) {
            
            titleElements[i].setAttribute("index", i.toString());
            titleElements[i].setAttribute("tabs-name", this.$attrs["tabsName"]);
            if (i != this.currentIndex) {
                titleElements[i].classList.remove("tabs-titleselected");
            } else {
                titleElements[i].classList.add("tabs-titleselected")
            }
        }
        var contentElements = angular.element(this.$element[0].querySelectorAll('.tab-content'));         
        for (var i = 0; i < contentElements.length; i++) {
            if (i != this.currentIndex) {
                contentElements[i].classList.add("tabs-contentInActive");
            } else {
                contentElements[i].classList.remove("tabs-contentInActive")
            }
        }
    }
    
    onInit = () => {
        // show all the titles
        //set first one to selected
        
    }

    get tabTitles() { return this.$element.find("tab-title"); }

    get tabContents() { return this.$element.find("tab-content"); }

    currentIndex = 0;
}