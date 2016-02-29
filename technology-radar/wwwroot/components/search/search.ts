import { CanActivate, Component } from "../../../libs/component-decorators";
import { SearchActionCreator } from "../../actions";

@Component({
    route: "/search",
    templateUrl: "wwwroot/components/search/search.html",
    selector: "search",
    providers: ["$element","searchActionCreator"]
})
export class SearchComponent {
    constructor(private $element: angular.IAugmentedJQuery, private searchActionCreator: SearchActionCreator) { }

    storeOnChange = state => {
        (<HTMLInputElement>this.$element[0].querySelector("#search-input-field")).value = state.searchTerm;
        this.searchResults = state.searchResults;
    }

    ngOnInit = () => {        
        this.textChanged$.subscribe(term => this.searchActionCreator.query({ term: term }));
    }

    searchResults: Array<any>;

    textChanged$: Rx.Observable<any> = Rx.Observable.fromEvent(this.$element[0].querySelector("#search-input-field"), "keyup")
        .map(function (e: any) {
            return e.target.value;
        }).filter(function (text) {
            return text.length > 2;
        })
        .debounce(100)
        .distinctUntilChanged();

}