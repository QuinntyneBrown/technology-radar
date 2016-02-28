import { CanActivate, Component } from "../../../libs/component-decorators";

@Component({
    route: "/language/edit/:id",
    templateUrl: "wwwroot/components/language/language-editor.html",
    selector: "language-editor",
    providers: ["$location", "$routeParams", "invokeAsync", "languageActionCreator"]
})
export class TechnologyMetaItemList {
    constructor() {

    }
}