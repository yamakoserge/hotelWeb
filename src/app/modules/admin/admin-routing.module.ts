import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DahsboardComponent } from './components/dahsboard/dahsboard.component';


const routes: Routes = [
  { path: '', component: AdminComponent },
  { path: 'dashboard', component: DahsboardComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
