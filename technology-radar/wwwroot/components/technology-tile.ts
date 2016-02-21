import { technologyType } from "./technology-type";

export class TechnologyTileComponent {  
    
    constructor(private $location:angular.ILocationService) { }
      
    onClick = () => {
        switch (this.technology.technologyType) {
            case (technologyType.framework):
                this.$location.path("/technology/framework/" + this.technology.id);
                break;

            case (technologyType.language):
                this.$location.path("/technology/language/" + this.technology.id);
                break;

            case (technologyType.platform):
                this.$location.path("/technology/platform/" + this.technology.id);
                break;

            case (technologyType.technique):
                this.$location.path("/technology/technique/" + this.technology.id);
                break;

            case (technologyType.tool):
                this.$location.path("/technology/tool/" + this.technology.id);
                break;
            
        }
    }

    technology;

}