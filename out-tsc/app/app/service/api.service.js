import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
let ApiService = class ApiService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    get Header() {
        return this.httpClient.get(environment.apiUrlHeaderGet);
    }
    get Intro() {
        return this.httpClient.get(environment.apiUrlIntroGet);
    }
    get Contact() {
        return this.httpClient.get(environment.apiUrlContactGet);
    }
    get Experience() {
        return this.httpClient.get(environment.apiUrlExperienceGet);
    }
    get Skill() {
        return this.httpClient.get(environment.apiUrlSkillGet);
    }
    get Footer() {
        return this.httpClient.get(environment.apiUrlFooterGet);
    }
    get Education() {
        return this.httpClient.get(environment.apiUrlEducationGet);
    }
    get Project() {
        return this.httpClient.get(environment.apiUrlProjectGet);
    }
    get Certification() {
        return this.httpClient.get(environment.apiUrlCertificationGet);
    }
};
ApiService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], ApiService);
export { ApiService };
//# sourceMappingURL=api.service.js.map