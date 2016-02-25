export class TabTitleComponent {
    constructor(private $attrs, private tabActionCreator) {}
    
    storeOnChange = state => { }

    ngOnInit = () => this.tabActionCreator.tabChildLoaded();

    onTabTitleClick = () => this.tabActionCreator.setCurrentTab({
        tabName: this.$attrs.$$element[0].getAttribute("tabs-name"),
        index: this.$attrs.$$element[0].getAttribute("index")
    });
}