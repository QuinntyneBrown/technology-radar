﻿import { BaseService } from "./base-service";

export class FrameworkService extends BaseService {
    constructor($q: angular.IQService, apiEndpoint, fetch) {
        super($q, apiEndpoint, fetch)
    }

    get baseUri() { return this.apiEndpoint.getBaseUrl() + "/framework"; }

}