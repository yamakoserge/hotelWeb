import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DashbordComponent } from './components/dashbord/dashbord.component';
import { DahsboardComponent } from './components/dahsboard/dahsboard.component';


@NgModule({
  declarations: [
    AdminComponent,
    DashbordComponent,
    DahsboardComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
