﻿import { technologyType }  from "./technology-type";

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