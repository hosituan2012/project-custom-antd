import { Component, OnInit, Input, AfterContentInit, ChangeDetectorRef } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-select-custom',
  templateUrl: './select-custom.component.html',
  styleUrls: ['./select-custom.component.less']
})
export class SelectCustomComponent implements AfterContentInit {

  // @Input() class = 'default';
  @Input() colLabel: number = null;
  @Input() colInput: number = null;
  @Input() formCtrName = null;
  @Input() placeholder = '';
  @Input() optionItem = [];
  @Input() parentForm: FormControl;
  @Input() optionData: Array<any> = null;

  constructor(
    private cdr: ChangeDetectorRef
  ) { }

  ngAfterContentInit() {
    this.cdr.detectChanges();
    console.log('col', this.colLabel);
    
  }
}
