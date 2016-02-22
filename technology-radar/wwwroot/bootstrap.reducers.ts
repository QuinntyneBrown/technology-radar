
import * as reducers from "./reducers";

var app = (<any>angular.module("reducers", ["store"]))
    .config(["reducersProvider", reducersProvider => {
        reducersProvider.configure(reducers.userLoggedInReducer);
        reducersProvider.configure(reducers.userLoggedOutReducer);

        reducersProvider.configure(reducers.allFrameworksReducer);
        reducersProvider.configure(reducers.addFrameworkReducer);
        reducersProvider.configure(reducers.removeFrameworkReducer);

        reducersProvider.configure(reducers.allLanguagesReducer);
        reducersProvider.configure(reducers.addLanguageReducer);
        reducersProvider.configure(reducers.removeLanguageReducer);

        reducersProvider.configure(reducers.allPlatformsReducer);
        reducersProvider.configure(reducers.addPlatformReducer);
        reducersProvider.configure(reducers.removePlatformReducer);

        reducersProvider.configure(reducers.allTechniquesReducer);
        reducersProvider.configure(reducers.addTechniqueReducer);
        reducersProvider.configure(reducers.removeTechniqueReducer);

        reducersProvider.configure(reducers.allToolsReducer);
        reducersProvider.configure(reducers.addToolReducer);
        reducersProvider.configure(reducers.removeToolReducer);

        reducersProvider.configure(reducers.setCurrentTabReducer);
}]);