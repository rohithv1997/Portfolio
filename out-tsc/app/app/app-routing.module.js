import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContactComponent } from './profile/contact/contact.component';
import { CertificationComponent } from './profile/certification/certification.component';
import { EducationComponent } from './profile/education/education.component';
import { ExperienceComponent } from './profile/experience/experience.component';
import { IntroComponent } from './profile/intro/intro.component';
import { NotFoundComponent } from './profile/not-found/not-found.component';
import { ProjectsComponent } from './profile/projects/projects.component';
import { SkillsComponent } from './profile/skills/skills.component';
export const routes = [
    {
        path: '',
        redirectTo: '/Intro',
        pathMatch: 'full',
    },
    {
        path: 'Intro',
        component: IntroComponent,
    },
    {
        path: 'Experience',
        component: ExperienceComponent,
    },
    {
        path: 'Projects',
        component: ProjectsComponent,
    },
    {
        path: 'Skills',
        component: SkillsComponent,
    },
    {
        path: 'Certifications',
        component: CertificationComponent,
    },
    {
        path: 'Education',
        component: EducationComponent,
    },
    {
        path: 'Contact',
        component: ContactComponent,
    },
    {
        path: 'not-found',
        component: NotFoundComponent,
    },
    {
        path: '**',
        redirectTo: '/not-found',
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    NgModule({
        imports: [
            RouterModule.forRoot(routes, {
                initialNavigation: 'enabled',
            }),
        ],
        exports: [RouterModule],
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map