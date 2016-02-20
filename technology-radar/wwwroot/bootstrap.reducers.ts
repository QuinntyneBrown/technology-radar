
import { userLoggedInReducer,

allLanguagesReducer, addLanguageReducer, removeLanguageReducer,

allFrameworksReducer, addFrameworkReducer, removeFrameworkReducer,

allPlatformsReducer, addPlatformReducer, removePlatformReducer,

allTechniquesReducer, addTechniqueReducer, removeTechniqueReducer,

allToolsReducer, addToolReducer, removeToolReducer

} from "./reducers";

var app = (<any>angular.module("reducers", [
    "store"
])).config(["reducersProvider", reducersProvider => {
        reducersProvider.configure(userLoggedInReducer);

        reducersProvider.configure(allFrameworksReducer);
        reducersProvider.configure(addFrameworkReducer);
        reducersProvider.configure(removeFrameworkReducer);

        reducersProvider.configure(allLanguagesReducer);
        reducersProvider.configure(addLanguageReducer);
        reducersProvider.configure(removeLanguageReducer);

        reducersProvider.configure(allPlatformsReducer);
        reducersProvider.configure(addPlatformReducer);
        reducersProvider.configure(removePlatformReducer);

        reducersProvider.configure(allTechniquesReducer);
        reducersProvider.configure(addTechniqueReducer);
        reducersProvider.configure(removeTechniqueReducer);

        reducersProvider.configure(allToolsReducer);
        reducersProvider.configure(addToolReducer);
        reducersProvider.configure(removeToolReducer);
}]);