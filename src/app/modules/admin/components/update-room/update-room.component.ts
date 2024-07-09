import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { AdminService } from '../../Admin-services/admin.service';

@Component({
  selector: 'app-update-room',
  templateUrl: './update-room.component.html',
  styleUrls: ['./update-room.component.scss']
})
export class UpdateRoomComponent {


  
  updateRoomForm: FormGroup;
  id = this.activatedroute.snapshot.params['id'];

  constructor(
    private fb: FormBuilder,
    private message: NzMessageService,
    private router: Router,
    private adminService: AdminService,
    private activatedroute: ActivatedRoute,
  ){

      this.updateRoomForm = this.fb.group({
        name:['', Validators.required],
        type:['', Validators.required],
        price:['', Validators.required]
      })
    }

    submitForm(){
      this.adminService.postRoomDetails(this.updateRoomForm.value).subscribe(res=>{
        this.message
        .success(
          `Room Post Successfully`,
          {nzDuration:3000}
        );
        this.router.navigateByUrl('/admin/dashboard')
      },error=>{
        this.message.error(
          `$(error.error)`,
          {nzDuration:3000}
        )
      })
    }
}

