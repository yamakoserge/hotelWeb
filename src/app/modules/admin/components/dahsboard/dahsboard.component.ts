import { Component } from '@angular/core';
import { AdminService } from '../../Admin-services/admin.service';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-dahsboard',
  templateUrl: './dahsboard.component.html',
  styleUrl: './dahsboard.component.scss',
})
export class DahsboardComponent {
  currentPage = 1;
  rooms = [];
  total: any;
  loading = false;

  constructor(
    private adminService: AdminService,
    private message: NzMessageService
  ) {
    this.getRooms();
  }

  getRooms() {
    this.adminService.getRooms(this.currentPage - 1).subscribe((res) => {
      console.log(res);
      this.rooms = res.roomDtoList;
      this.total = res.totalpages * 1;
    });
  }

  pageIndexChange(value: any) {
    this.currentPage = value;
    this.getRooms();
  }
}
