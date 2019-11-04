import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    // RouterModule.forChild(routes),
    NgZorroAntdModule,
    NzIconModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ]
})
export class RoutesModule { }
