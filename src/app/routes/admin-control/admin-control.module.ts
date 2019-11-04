import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AdminControlComponent } from './admin-control.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '~/shared/shared.module';
import { UserManagerComponent } from './user-manager/user-manager.component';
import { ModalUserManagerComponent } from './user-manager/modal-user-manager/modal-user-manager.component';

const routes: Routes = [
  { path: '', component: AdminControlComponent, children: [
    { path: '', redirectTo: 'user-manager', pathMatch: 'full' },
    { path: 'user-manager', component: UserManagerComponent }
  ]}
];

@NgModule({
  declarations: [
    AdminControlComponent,
    UserManagerComponent,
    ModalUserManagerComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgZorroAntdModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    ModalUserManagerComponent
  ]
})
export class AdminControlModule { }
