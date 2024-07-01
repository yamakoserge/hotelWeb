import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DahsboardComponent } from './components/dahsboard/dahsboard.component';


@NgModule({
  declarations: [
    AdminComponent,
    DahsboardComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
