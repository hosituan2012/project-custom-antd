import { Component, OnInit, AfterContentInit, Input, ChangeDetectorRef } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-date-custom',
  templateUrl: './date-custom.component.html',
  styleUrls: ['./date-custom.component.less']
})
export class DateCustomComponent implements AfterContentInit {

  // @Input() class = 'default';
  @Input() colLabel = null;
  @Input() colInput = null;
  @Input() formCtrName = null;
  @Input() placeholder = null;
  @Input() parentForm: FormControl;

  constructor(
    private cdr: ChangeDetectorRef
  ) { }

  ngAfterContentInit() {
    // console.log(this.class, this.colInput, this.colLabel);
    console.log('validate form', this.formCtrName);
    this.cdr.detectChanges();
  }

}
