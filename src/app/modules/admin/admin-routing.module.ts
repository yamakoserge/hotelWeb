import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DahsboardComponent } from './components/dahsboard/dahsboard.component';
import { PostRoomComponent } from './components/post-room/post-room.component';


const routes: Routes = [
  { path: '', component: AdminComponent },
  { path: 'dashboard', component: DahsboardComponent },
  { path: 'room', component: PostRoomComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
