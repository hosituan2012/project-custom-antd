import { Component, OnInit } from '@angular/core';
import { NzNotificationService, NzModalService } from 'ng-zorro-antd';
import { ModalUserManagerComponent } from './modal-user-manager/modal-user-manager.component';

@Component({
  selector: 'app-user-manager',
  templateUrl: './user-manager.component.html',
  styleUrls: ['./user-manager.component.less']
})
export class UserManagerComponent implements OnInit {

  constructor(
    private modalService: NzModalService,
    private notification: NzNotificationService,
  ) { }

  ngOnInit() {
    // this.openModal();
  }

  openModal(): void {
    const modal = this.modalService.create({
      nzTitle: 'ADD USER',
      nzContent: ModalUserManagerComponent,
      nzFooter: null,
      nzClassName: 'user-manager-modal',
      nzWidth: '600px',
      nzBodyStyle: {'min-height': '370px'},
    });
    modal.afterClose.subscribe((result) => {
    });
  }
}
