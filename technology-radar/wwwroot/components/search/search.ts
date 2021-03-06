﻿import { Component } from "../../../libs/component-decorators";
import { SearchActionCreator } from "../../actions";

@Component({
    templateUrl: "wwwroot/components/search/search.html",
    selector: "search",
    providers: ["$element","searchActionCreator"]
})
export class SearchComponent {
    constructor(private $element: angular.IAugmentedJQuery, private searchActionCreator: SearchActionCreator) { }

    storeOnChange = state => [this.searchInputElement.value, this.searchResults] = [this.searchInputElement.value ? this.searchInputElement.value : state.searchTerm, state.searchResults];

    ngOnInit = () => { this.inputChanged$.subscribe(term => this.searchActionCreator.query({ term: term })); }

    searchResults: Array<any>;

    inputChanged$: Rx.Observable<any> = Rx.Observable.fromEvent(this.searchInputElement, "keyup")
        .map(e => { return (<any>e).target.value; })
        .filter(text => text.length > 1)
        .debounce(100)
        .distinctUntilChanged();
    
    get searchInputElement(): HTMLInputElement { return <HTMLInputElement>this.$element[0].querySelector("#search-input-field"); }
}