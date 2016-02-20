import { IDispatcher } from "../../libs/store";


export class TechniqueActionCreator {
    constructor(private dispatcher: IDispatcher, private guid, private techniqueService) { }

    addOrUpdate = options => {
        var newId = this.guid();
        this.techniqueService.add({
            data: {
                id: options.id,
                name: options.name,
                description: options.description,
                rating: options.rating
            }
        }).then(results => {
            this.dispatcher.dispatch(new AddTechniqueAction(newId, results));
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


export class AddTechniqueAction { constructor(public id, public entity) { } }

export class AllTechniquesAction { constructor(public id, public entities) { } }

export class RemoveTechniqueAction { constructor(public id, public entity) { } }

export class TechniquesFilterAction { constructor(public id, public term) { } }

export class SetCurrentTechniqueAction { constructor(public id, public entityId) { } }