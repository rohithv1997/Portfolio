import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './profile/about/about.component';
import { CertificationComponent } from './profile/certification/certification.component';
import { EducationComponent } from './profile/education/education.component';
import { ExperienceComponent } from './profile/experience/experience.component';
import { IntroComponent } from './profile/intro/intro.component';
import { NotFoundComponent } from './profile/not-found/not-found.component';
import { ProjectsComponent } from './profile/projects/projects.component';
import { SkillsComponent } from './profile/skills/skills.component';

export const routes: Routes = [
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
    path: 'About',
    component: AboutComponent,
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
    path: 'not-found',
    component: NotFoundComponent,
  },
  {
    path: '**',
    redirectTo: '/not-found',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
