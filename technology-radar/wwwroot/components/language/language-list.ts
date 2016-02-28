import { technologyType }  from "../technology/technology-type";
import { CanActivate, Component } from "../../../libs/component-decorators";

@Component({
    route: "/language/list",
    templateUrl: "wwwroot/components/language/language-list.html",
    selector: "language-list",
    providers: ["languageActionCreator"]
})
@CanActivate([
    "languageActionCreator", "invokeAsync",
    (languageActionCreator, invokeAsync) => invokeAsync(languageActionCreator.all)
])
export class LanguageListComponent {
    constructor(private languageActionCreator) { }
    storeOnChange = state => this.entities = state.languages;
    entities;
    get technologyType() { return technologyType.language; }    
}