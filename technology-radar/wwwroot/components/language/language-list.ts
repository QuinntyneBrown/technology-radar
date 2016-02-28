import { technologyType }  from "../technology/technology-type";
import { Component } from "../../../libs/component-decorator";

@Component({
    route: "/language/list",
    templateUrl: "wwwroot/components/language/language-list.html",
    selector: "language-list",
    providers: ["languageActionCreator"]
})
export class LanguageListComponent {
    constructor(private languageActionCreator) { }

    storeOnChange = state => this.entities = state.languages;

    entities;

    get technologyType() { return technologyType.language; }

    remove = entity => this.languageActionCreator.remove({ entity: entity });
    
    static canActivate = () => [
        "languageActionCreator", "invokeAsync",
        (languageActionCreator, invokeAsync) => invokeAsync(languageActionCreator.all)
    ]
}