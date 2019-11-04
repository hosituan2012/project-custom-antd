import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Router, ActivationStart } from '@angular/router';
import { UserService } from '../shared/shared.module';
import { NzModalService, NzNotificationService, NzMessageService } from 'ng-zorro-antd';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.less'],

  host: {
    '[class.colorweak]': 'layout.setting.colorweak',
    '[attr.theme]': 'layout.setting.theme',
    '[attr.color]': 'layout.setting.color',
    '[attr.mode]': 'layout.setting.mode'
  }
})
export class MainLayoutComponent implements OnInit {

  layout = {
    collapsed: true,
    siderMode: 'over',
    topMode: function () {
      return this.siderMode !== 'over' && this.setting.mode == 'top';
    },
    setting: {
      theme: 'dark',
      color: 'daybreak',
      mode: 'side',
      fixedWidth: false,
      colorweak: true
    }
  };

  currentUser = {
    // avatar: 'assets/img/user/04.jpg',
    username: '',
    // level: ''
  };

  menu = [
    {
      title: 'Admin Control',
      icon: 'control',
      children: [
        {
          title: 'User Manager',
          icon: 'usergroup-add',
          routerLink: ''
        }
      ]
    },
  ];

  constructor(
    breakpointObserver: BreakpointObserver,
    private router: Router,
    public user: UserService,
    private modal: NzModalService,
    private notification: NzNotificationService,
    private message: NzMessageService,
    ) {
      breakpointObserver.observe([Breakpoints.Small, Breakpoints.XSmall]).subscribe(result => {
        this.layout.siderMode = result.matches ? 'over' : 'side';
        this.layout.collapsed = result.matches;
      });

      router.events.pipe(filter(event => event instanceof ActivationStart)).subscribe(() => {
        if (this.layout.siderMode == 'over') {
          this.layout.collapsed = true;
        }
      });
  }

  ngOnInit() {
  }
}
