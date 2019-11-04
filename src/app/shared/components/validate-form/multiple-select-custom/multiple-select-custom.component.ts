import { Component, OnInit, AfterContentInit, Input, ChangeDetectorRef } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-multiple-select-custom',
  templateUrl: './multiple-select-custom.component.html',
  styleUrls: ['./multiple-select-custom.component.less']
})
export class MultipleSelectCustomComponent implements AfterContentInit {

  // @Input() class = 'default';
  @Input() colLabel = null;
  @Input() colInput = null;
  @Input() formCtrName = null;
  @Input() placeholder = null;
  @Input() optionData: Array<any> = null;
  @Input() parentForm: FormControl;

  listOfOption: Array<{ label: string; value: string }> = [];
  listOfSelectedValue = ['a10', 'c12'];


  constructor(
    private cdr: ChangeDetectorRef
  ) { }

  ngAfterContentInit() {
    // console.log(this.class, this.colInput, this.colLabel);
    console.log('validate form', this.formCtrName);
    this.cdr.detectChanges();
    // const children: Array<{ label: string; value: string }> = [];
    // for (let i = 10; i < 36; i++) {
    //   children.push({ label: i.toString(36) + i, value: i.toString(36) + i });
    // }
    // this.listOfOption = children;
  }

}
