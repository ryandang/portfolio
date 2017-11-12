import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule, MatToolbarModule, MatMenuModule, MatIconModule } from '@angular/material';
import { TopNavComponent } from './top-nav.component';
import { RouterModule, Routes } from '@angular/router';
@NgModule({
  declarations: [
    TopNavComponent
  ],
  imports: [
    RouterModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule
  ],
  exports: [
    TopNavComponent
  ],
  })
export class TopNavModule { }