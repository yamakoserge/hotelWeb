import { Component } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss',
})
export class RoomsComponent {
  currentPage = 1;
  rooms = [];
  total: any;
  loading = false;

  constructor(
    private CustomerService: CustomerService,
    private message: NzMessageService,
    private modalService: NzModalService
  ) {
    this.getRooms();
  }

  getRooms() {
    this.CustomerService.getRooms(this.currentPage - 1).subscribe((res) => {
      console.log(res);
      this.rooms = res.roomDtoList;
      this.total = res.totalPages * 1;
    });
  }

  pageIndexChange(value: any) {
    this.currentPage = value;
    this.getRooms();
  }
}
