import { Component, OnInit, AfterContentInit, Input, ChangeDetectorRef, OnChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-time-custom',
  templateUrl: './time-custom.component.html',
  styleUrls: ['./time-custom.component.less']
})
export class TimeCustomComponent implements AfterContentInit, OnChanges {

  // @Input() class = 'default';
  // moment = moment;
  @Input() colLabel = null;
  @Input() colInput = null;
  @Input() formCtrName = null;
  @Input() placeholder = null;
  @Input() parentForm: FormControl;

  constructor(
    private cdr: ChangeDetectorRef
  ) { }

  ngAfterContentInit() {
    this.cdr.detectChanges();
    // if (this.parentForm.value.this.formCtrName == null ) {
    //   console.log('null');
      
    // } else {
    //   console.log('not null');
      
    // }
    // console.log('time', this.parentForm);
    
  }

  ngOnChanges() {
    console.log('time', this.parentForm);
  }

  changeValue(e) {
    // const temp = this.formCtrName;
    console.log('event', e, moment(e).toISOString());
    // // this.parentForm.controls[this.formCtrName].patchValue(moment(e).toISOString());
    // console.log('value time', this.parentForm.value[this.formCtrName]);
    // this.parentForm.value[this.formCtrName] = moment(e).toISOString();
    // return moment(e).toISOString();
    if (e) {
      // this.parentForm.setValue(moment(e).toISOString());
    }
  }

}
