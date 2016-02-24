import { technologyType } from "../components/technology-type";

export class TechnologyActionCreator {
    constructor(private $location: angular.ILocationService) { }

    edit = options => {        
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
}

