import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { RoomsComponent } from './components/rooms/rooms.component';
import { DemoNgZorroAntdModule } from '../../DemoNgZorroAntModule';
import { TestComponent } from './components/test/test.component';



@NgModule({
  declarations: [
    CustomerComponent,
    RoomsComponent,
    TestComponent,
  
    
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    DemoNgZorroAntdModule
  ]
})
export class CustomerModule { }
