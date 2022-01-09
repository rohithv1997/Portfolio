import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { GetHeaderAction } from '../store/Header/Actions/GetHeader.Action';
import { GetIntroAction } from '../store/Intro/Actions/GetIntro.Action';
import { GetContactAction } from '../store/Contact/Actions/GetContact.Action';
import { GetFooterAction } from '../store/Footer/Actions/GetFooter.Action';
import { GetExperienceAction } from '../store/Experience/Actions/GetExperience.Action';
import { GetEducationAction } from '../store/Education/Actions/GetEducation.Action';
import { GetProjectAction } from '../store/Project/Actions/GetProject.Action';
import { GetSkillAction } from '../store/Skill/Actions/GetSkill.Action';
import { GetCertificationAction } from '../store/Certification/Actions/GetCertification.Action';
let OnStartupService = class OnStartupService {
    constructor(store) {
        this.store = store;
    }
    onStartUp() {
        this.store.dispatch(new GetHeaderAction());
        this.store.dispatch(new GetIntroAction());
        this.store.dispatch(new GetContactAction());
        this.store.dispatch(new GetFooterAction());
        this.store.dispatch(new GetExperienceAction());
        this.store.dispatch(new GetEducationAction());
        this.store.dispatch(new GetProjectAction());
        this.store.dispatch(new GetSkillAction());
        this.store.dispatch(new GetCertificationAction());
    }
};
OnStartupService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], OnStartupService);
export { OnStartupService };
//# sourceMappingURL=on-startup.service.js.map