import { BaseService } from "./base-service";

export class LanguageService extends BaseService {
    constructor($q: angular.IQService, apiEndpoint, fetch) {
        super($q,apiEndpoint,fetch)
    }
    
    get baseUri() { return this.apiEndpoint.getBaseUrl() + "/language"; }

}