﻿export * from "./frameworkReducers";
export * from "./languageReducers";
export * from "./platformReducers";
export * from "./techniqueReducers";
export * from "./toolReducers";
export * from "./userReducers";


angular.module("reducers", ["store"]).config(["reducersProvider", reducersProvider=> {


}]);