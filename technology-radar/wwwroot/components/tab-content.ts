export class TabContentComponent {
    constructor(private tabActionCreator) { }

    storeOnChange = state => { }

    onInit = () => this.tabActionCreator.tabChildLoaded();


    
}