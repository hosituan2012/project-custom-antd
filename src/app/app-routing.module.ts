import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { UserManagerComponent } from './routes/admin-control/user-manager/user-manager.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '',
        loadChildren: './routes/admin-control/admin-control.module#AdminControlModule'
      },
    ]
  },
  // {
  //   path: '',
  //   component: UserManagerComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
