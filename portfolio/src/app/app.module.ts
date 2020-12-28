import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatGridListModule } from '@angular/material/grid-list';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './profile/home/home.component';
import { AboutComponent } from './profile/about/about.component';
import { FooterComponent } from './profile/footer/footer.component';
import { HeaderComponent } from './profile/header/header.component';
import { ProjectsComponent } from './profile/projects/projects.component';
import { NotFoundComponent } from './profile/not-found/not-found.component';
import { ExperienceComponent } from './profile/experience/experience.component';
import { SkillsComponent } from './profile/skills/skills.component';
import { EducationComponent } from './profile/education/education.component';
import { IntroComponent } from './profile/intro/intro.component';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import * as fromApp from './store/Base/App.ActionReducer.Registry';
import * as fromAppEffects from './store/Base/App.Effects.Registry';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    FooterComponent,
    HeaderComponent,
    ProjectsComponent,
    NotFoundComponent,
    ExperienceComponent,
    SkillsComponent,
    EducationComponent,
    IntroComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatTabsModule,
    MatGridListModule,
    HttpClientModule,
    StoreModule.forRoot(fromApp.appActionReducerRegistry),
    EffectsModule.forRoot(fromAppEffects.appEffectsRegistry),
    StoreDevtoolsModule.instrument({ logOnly: true }),
    StoreRouterConnectingModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
