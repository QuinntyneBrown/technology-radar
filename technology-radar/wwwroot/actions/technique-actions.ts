import { IDispatcher } from "../../libs/store";
import { TechnologyActionCreator } from "./technology-actions";
import { TechniqueService } from "../services";

export class TechniqueActionCreator extends TechnologyActionCreator {
    constructor($location: angular.ILocationService, dispatcher: IDispatcher, private guid, private techniqueService) {
        super($location,dispatcher);
    }

    getById = options => {
        var newId = this.guid();
        this.techniqueService.getById({
            id: options.id
        }).then(results => {
            this.dispatcher.dispatch(new AddOrUpdateTechniqueAction(newId, results));
        });
        return newId;
    }

    addOrUpdate = options => {
        var newId = this.guid();
        this.techniqueService.add({
            data: {
                id: options.id,
                abstract: options.abstract,
                name: options.name,
                description: options.description,
                rating: options.rating
            }
        }).then(results => {            
            this.dispatcher.dispatch(new AddOrUpdateTechniqueAction(newId, results));
        });
        return newId;
    }

    all = options => {
        var newId = this.guid();
        this.techniqueService.get().then(results => {
            this.dispatcher.dispatch(new AllTechniquesAction(newId, results));
        });
        return newId;
    }

    remove = options => {
        var newId = this.guid();
        this.techniqueService.remove({
            id: options.entity.id
        }).then(results => {
            this.dispatcher.dispatch(new RemoveTechniqueAction(newId, options.entity));
        });
        return newId;
    }
}


export class AddOrUpdateTechniqueAction { constructor(public id, public entity) { } }

export class AllTechniquesAction { constructor(public id, public entities) { } }

export class RemoveTechniqueAction { constructor(public id, public entity) { } }

export class TechniquesFilterAction { constructor(public id, public term) { } }

export class SetCurrentTechniqueAction { constructor(public id, public entityId) { } }