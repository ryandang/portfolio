import { SchoolComponent } from './school/school.component';
import { WorksComponent } from './works/works.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { HomeComponent } from './home/home.component';
import { Routes } from "@angular/router";

export const appRoutes: Routes = [
  {
    path: 'works',
    component: WorksComponent
  },
  {
    path: 'about-me',
    component: AboutMeComponent
  },
  {
    path: 'school',
    component: SchoolComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];