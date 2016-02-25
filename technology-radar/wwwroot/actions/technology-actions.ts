import { technologyType } from "../components/technology/technology-type";

export class TechnologyActionCreator {
    constructor(public $location: angular.ILocationService, public dispatcher) { }

    edit = options => {        

        this.dispatcher.dispatch(new SetCurrentTechnologyAction(options.entity));

        switch (options.entity.technologyType) {
            case technologyType.framework:
                this.$location.path("/framework/edit/" + options.entity.id);
                break;

            case technologyType.language:
                this.$location.path("/language/edit/" + options.entity.id);
                break;

            case technologyType.platform:
                this.$location.path("/platform/edit/" + options.entity.id);
                break;

            case technologyType.technique:
                this.$location.path("/technique/edit/" + options.entity.id);
                break;

            case technologyType.tool:
                this.$location.path("/tool/edit/" + options.entity.id);
                break;
        }
    }

    create = (options) => {
        this.dispatcher.dispatch(new SetCurrentTechnologyAction(null));

        switch (options.technologyType) {
            case technologyType.framework:
                this.$location.path("/framework/list");
                break;

            case technologyType.language:
                this.$location.path("/language/list");
                break;

            case technologyType.platform:
                this.$location.path("/platform/list");
                break;

            case technologyType.technique:
                this.$location.path("/technique/list");
                break;

            case technologyType.tool:
                this.$location.path("/tool/list");
                break;
        }
    }
}

export class SetCurrentTechnologyAction { constructor(public entity) { } }

export class CreateTechnologyAction { constructor(public technologyType) { } }
