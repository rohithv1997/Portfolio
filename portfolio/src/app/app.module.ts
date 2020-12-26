import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './profile/home/home.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { AboutComponent } from './profile/about/about.component';
import { FooterComponent } from './profile/footer/footer.component';
import { HeaderComponent } from './profile/header/header.component';
import { ProjectsComponent } from './profile/projects/projects.component';
import { NotFoundComponent } from './profile/not-found/not-found.component';
import { ContactComponent } from './profile/contact/contact.component';
import { ExperienceComponent } from './profile/experience/experience.component';
import { SkillsComponent } from './profile/skills/skills.component';
import { EducationComponent } from './profile/education/education.component';
import { IntroComponent } from './profile/intro/intro.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    FooterComponent,
    HeaderComponent,
    ProjectsComponent,
    NotFoundComponent,
    ContactComponent,
    ExperienceComponent,
    SkillsComponent,
    EducationComponent,
    IntroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
