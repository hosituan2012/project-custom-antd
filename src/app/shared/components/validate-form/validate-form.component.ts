import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { NzModalRef } from 'ng-zorro-antd';
import * as dataValidate from '../../data/form-data.json';
import * as moment from 'moment';

@Component({
  selector: 'app-validate-form',
  templateUrl: './validate-form.component.html',
  styleUrls: ['./validate-form.component.less']
})
export class ValidateFormComponent implements OnInit {

  @Input() formCtr: string;
  @Input() formData: any;
  @Output() dataSubmit: EventEmitter<number> =   new EventEmitter();
 
  formName: FormGroup;
  arrData: any = dataValidate['default'];
  mainData: Array<any> = [];
  isConfirmLoading = false;
  isValid = true;

  constructor(
    private fb: FormBuilder,
    private modal: NzModalRef,
  ) {
    this.formName = this.fb.group({});
  }

  ngOnInit() {
    this.arrData.forEach(e => {
      if (e.formCtr == this.formCtr) {
        this.mainData.push(e);
        if (e.required == true) {
          this.formName.addControl(e.formCtrName, new FormControl(null, Validators.required));
        } else {
          this.formName.addControl(e.formCtrName, new FormControl(null, null));
        }
      }
    });
    this.formName.patchValue(this.formData);
    console.log('form', this.formCtr, this.formName);
    let all = '2019-11-02 15:08:16.138Z';
    let time = moment(all).format("HH:mm:ss.SSS[Z]");
    let day = moment(all).format("YYYY-MMM-DD");
    console.log('day', time);
    
    let timemoment = moment(day + " " + time + " ", 'YYYY-MMM-DD, HH:mm:ss.SSS[Z]').toISOString();
    let timeUtc = moment(all).utc().format('HH:mm:ss');
    let dayUtc = moment(all).utc().format('YYYY-MMM-DD');
    let a = moment(all).format("MMM") + "-" + moment(all).format("DD")

    let format = day + " " + time + " ";
    let formatZone = moment(all).format('ZZZ');

    // let timemoment = moment(day + " " + time + " ", 'YYYY-MMM-DD, HH:mm:ss.SSS[Z]').toISOString();
    console.log('Nối lại nè hihi :3 ', timemoment);
    console.log('test', moment(all).utc().format('HH:mm:ss'));
    
  }

  submitForm(): void {
    // tslint:disable-next-line: forin
    for (const i in this.formName.controls) {
      this.formName.controls[i].markAsDirty();
      this.formName.controls[i].updateValueAndValidity();
    }
    if (this.formName.valid) {
      this.isConfirmLoading = true;
      const data = this.formName.getRawValue();
      for (const element in data) {
        if (data[element] == null || data[element] == undefined) {
          delete data[element];
        }
      }
      if (data.time) {
        data.time = moment(data.time).toISOString();
      }
      if (data.date) {
        data.date = moment(data.date).toISOString();
      }
      this.dataSubmit.emit(data);
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
