﻿export class LanguageListComponent {
    constructor(private $location: angular.ILocationService, private languageActionCreator) { }

    storeOnChange = state => this.entities = state.languages;

    entities;

    remove = entity => this.languageActionCreator.remove({ entity: entity });


    static canActivate = () => [
        "languageActionCreator", "invokeAsync",
        (languageActionCreator, invokeAsync) => invokeAsync(languageActionCreator.all)
    ]
}