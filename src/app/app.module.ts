import { AboutMeModule } from './about-me/about-me.module';
import { HomeModule } from './home/home.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopNavModule } from './top-nav/top-nav.module';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { WorksModule } from './works/works.module';
import { SchoolModule } from './school/school.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    TopNavModule,
    HomeModule,
    WorksModule,
    AboutMeModule,
    SchoolModule,
    BrowserAnimationsModule,
    BrowserModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      { useHash: true }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
