export class TabsComponent {
    constructor(private $attrs: angular.IAttributes, private $element: angular.IAugmentedJQuery, private tabActionCreator) {
        
    }

    storeOnChange = state => {  }
    
    onInit = () => {
        // show all the titles
        //set first one to selected

        // hide all the contents except the first one
        this.tabContents[0].parentElement.removeChild(this.tabContents[0]);
    }

    get tabTitles() { return this.$element.find("tab-title"); }

    get tabContents() { return this.$element.find("tab-content"); }

    currentIndex = 0;
}