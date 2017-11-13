import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule, MatToolbarModule, MatMenuModule, MatIconModule } from '@angular/material';
import { TopNavComponent } from './top-nav.component';

@NgModule({
  declarations: [
    TopNavComponent
  ],
  imports: [
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