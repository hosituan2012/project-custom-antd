import { Component, OnInit, AfterContentInit, ChangeDetectorRef, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-custom',
  templateUrl: './input-custom.component.html',
  styleUrls: ['./input-custom.component.less']
})
export class InputCustomComponent implements AfterContentInit {

  @Input() typeInput = 'text';
  @Input() colLabel = null;
  @Input() colInput = null;
  @Input() formCtrName = null;
  @Input() placeholder = null;
  @Input() parentForm: FormControl;
  passwordVisible = false;
  hasPassString = false;

  constructor(
    private cdr: ChangeDetectorRef
  ) { }

  ngAfterContentInit() {
    this.cdr.detectChanges();
  }

  changeView() {
    this.passwordVisible = !this.passwordVisible;
  }

  onChangePassword(e) {
    (e.target.value && (e.target.value !== null)) ? this.hasPassString = true : this.hasPassString = false;
  }
}
