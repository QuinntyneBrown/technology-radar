export class TabContentComponent {
    constructor(private tabActionCreator) { }

    storeOnChange = state => { }

    ngOnInit = () => this.tabActionCreator.tabChildLoaded();
    
}