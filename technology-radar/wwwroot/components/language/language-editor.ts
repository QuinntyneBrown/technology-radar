﻿import { LanguageActionCreator, RemoveLanguageAction } from "../../actions";
import { technologyType }  from "../technology/technology-type";
import { CanActivate, Component } from "../../../libs/component-decorators";
import { RouteParams } from "../../../libs";

@Component({
    route: "/language/edit/:id",
    templateUrl: "wwwroot/components/language/language-editor.html",
    selector: "language-editor",
    providers: ["$location", "routeParams", "invokeAsync", "languageActionCreator"]
})
@CanActivate(["$route", "invokeAsync", "languageActionCreator", ($route, invokeAsync, languageActionCreator: LanguageActionCreator) => {
    var id = $route.current.params.id;
    return invokeAsync({
        action: languageActionCreator.getById,
        params: { id: id }
    });
}])
export class LanguageEditorComponent {
    constructor(private $location: angular.ILocationService, private routeParams: RouteParams, private invokeAsync, private languageActionCreator: LanguageActionCreator) {}

    storeOnChange = state => {
        if (state.lastTriggeredByAction == RemoveLanguageAction && this.entities.filter(entity => entity.id === this.id).length < 1)
            this.$location.path(this.baseUrl + "/list");
        this.entities = state.languages;
    };

    ngOnInit = () => {
        if (this.routeParams.get("id"))                       
            angular.extend(this, angular.copy(this.entities.filter(entity => entity.id == this.routeParams.get("id"))[0]));                                
    }

    addOrUpdate = () => {
        this.invokeAsync({
            action: this.languageActionCreator.addOrUpdate,
            params: {
                id: this.id,
                name: this.name,
                description: this.description,
                rating: this.rating,
                abstract: this.abstract
            }
        }).then(() => {
            if (!this.id && this.entities.filter(entity => entity.name === this.name).length > 0) {
                this.$location.path(this.baseUrl + "/edit/" + this.entities.filter(entity => entity.name === this.name)[0].id);
            }
            else {
                
            }
        });
    } 
            
    create = () => this.languageActionCreator.create({ technologyType: technologyType.language });

    get baseUrl() { return "/language"; }
    id;
    name;
    rating;
    description;
    abstract;
    entities;


}