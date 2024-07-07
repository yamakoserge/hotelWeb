import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DahsboardComponent } from './components/dahsboard/dahsboard.component';
import { PostRoomComponent } from './components/post-room/post-room.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import { ReactiveFormsModule } from '@angular/forms';
import { NzLayoutComponent } from 'ng-zorro-antd/layout';
import { DemoNgZorroAntdModule } from '../../DemoNgZorroAntModule';


@NgModule({
  declarations: [
    AdminComponent,
    DahsboardComponent,
    PostRoomComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NzLayoutComponent,
    DemoNgZorroAntdModule,
    ReactiveFormsModule,
    AdminRoutingModule,
    NzFormModule
  ]
})
export class AdminModule { }
