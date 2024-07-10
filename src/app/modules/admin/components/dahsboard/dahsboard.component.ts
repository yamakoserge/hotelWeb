import { NzModalModule, NzModalService } from 'ng-zorro-antd/modal';
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
    private message: NzMessageService,
    private modalService: NzModalService
  ) {
    this.getRooms();
  }

  getRooms() {
    this.adminService.getRooms(this.currentPage - 1).subscribe(res=> {
      console.log(res);
      this.rooms = res.roomDtoList;
      this.total = res.totalPages * 1;
    });
  }

  pageIndexChange(value: any) {
    this.currentPage = value;
    this.getRooms();
  }

  showConfirm(roomId: number) {
    this.modalService.confirm({
      nzTitle: `Confirm`,
      nzContent: `Do you want to delete this room ?`,
      nzOkText: `Delete`,
      nzCancelText: `Cancel`,
      nzOnOk: () => this.deleteRoom(roomId),
    });
  }

  deleteRoom(roomId: number) {
    this.adminService.deleteRoom(roomId).subscribe(
      (res) => {
        this.message.success(`Room Delete Successfully`, { nzDuration: 3000 });
      },
      (error) => {
        this.message.error(`${error.error}`, { nzDuration: 3000 });
      }
    );
  }
}
