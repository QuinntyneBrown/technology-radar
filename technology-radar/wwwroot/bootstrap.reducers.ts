
import * as reducers from "./reducers";

var app = (<any>angular.module("reducers", ["store"]))
    .config(["reducersProvider", reducersProvider => {
        reducersProvider.configure(reducers.userLoggedInReducer);
        reducersProvider.configure(reducers.userLoggedOutReducer);

        reducersProvider.configure(reducers.allFrameworksReducer);
        reducersProvider.configure(reducers.addOrUpdateFrameworkReducer);
        reducersProvider.configure(reducers.removeFrameworkReducer);

        reducersProvider.configure(reducers.allLanguagesReducer);
        reducersProvider.configure(reducers.addOrUpdateLanguageReducer);
        reducersProvider.configure(reducers.removeLanguageReducer);

        reducersProvider.configure(reducers.allPlatformsReducer);
        reducersProvider.configure(reducers.addOrUpdatePlatformReducer);
        reducersProvider.configure(reducers.removePlatformReducer);

        reducersProvider.configure(reducers.allTechniquesReducer);
        reducersProvider.configure(reducers.addOrUpdateTechniqueReducer);
        reducersProvider.configure(reducers.removeTechniqueReducer);

        reducersProvider.configure(reducers.allToolsReducer);
        reducersProvider.configure(reducers.addOrUpdateToolReducer);
        reducersProvider.configure(reducers.removeToolReducer);

        reducersProvider.configure(reducers.allTagsReducer);
        reducersProvider.configure(reducers.addOrUpdateTagReducer);
        reducersProvider.configure(reducers.removeTagReducer);

        reducersProvider.configure(reducers.queryReducer);

        reducersProvider.configure(reducers.setCurrentTabReducer);
        reducersProvider.configure(reducers.tabChildLoadedReducer);
}]);