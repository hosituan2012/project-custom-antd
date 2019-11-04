import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { NzModalRef } from 'ng-zorro-antd';
import * as dataValidate from '../../../../shared/data/form-data.json';

@Component({
  selector: 'app-modal-user-manager',
  templateUrl: './modal-user-manager.component.html',
  styleUrls: ['./modal-user-manager.component.less']
})
export class ModalUserManagerComponent implements OnInit {

  objData: any = dataValidate['default'];
  tempForm: FormGroup;
  isConfirmLoading = false;
  isValid = true;
  data = {
    username: 'Test',
    email: 'admin',
    role: ['admin', 'guest'],
    time: ['2019-11-02 15:08:16.138Z']
  };

  constructor(
    private fb: FormBuilder,
    private modal: NzModalRef,
  ) {
    this.tempForm = this.fb.group({
      time: ['2019-11-02 15:08:16.138Z']
    });
  }

  ngOnInit() {
    // console.log(this.objData);
    // this.objData.forEach(e => {
    //   if (e.required == true) {
    //     this.tempForm.addControl(e.formCtrName, new FormControl(null, Validators.required));
    //   } else {
    //     this.tempForm.addControl(e.formCtrName, new FormControl(null, null));
    //   }
    // });
    // console.log(this.tempForm);
  }

  dataSubmitHandler(data) {
    console.log('data Submit', data);
  }

  submitForm(): void {
    // tslint:disable-next-line: forin
    for (const i in this.tempForm.controls) {
      this.tempForm.controls[i].markAsDirty();
      this.tempForm.controls[i].updateValueAndValidity();
    }
    if (this.tempForm.valid) {
      this.isConfirmLoading = true;
      const data = this.tempForm.getRawValue();
      for (const element in data) {
        if (data[element] == null || data[element] == undefined) {
          delete data[element];
        }
      }
      this.addAccount(data);
    } else {
      this.isValid = false;
    }
  }
  private addAccount(data) {
    console.log(data);
  }

  destroyModal(value): void {
    this.modal.destroy(value);
  }

}
