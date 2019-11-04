import { NgModule } from '@angular/core';
import { LayoutModule } from './layout/layout.module';
import { MarkdownModule } from './markdown/markdown.module';
import { NavbarModule } from './navbar/navbar.module';
import { NoticePopoverModule } from './notice-popover/notice-popover.module';
import { PageModule } from './page/page.module';
import { SettingDrawerModule } from './setting-drawer/setting-drawer.module';
import { ToolbarModule } from './toolbar/toolbar.module';
import { ValidateFormComponent } from './validate-form/validate-form.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SelectCustomComponent } from './validate-form/select-custom/select-custom.component';
import { MultipleSelectCustomComponent } from './validate-form/multiple-select-custom/multiple-select-custom.component';
import { DateCustomComponent } from './validate-form/date-custom/date-custom.component';
import { TimeCustomComponent } from './validate-form/time-custom/time-custom.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { InputCustomComponent } from './validate-form/input-custom/input-custom.component';
import { TextareaCustomComponent } from './validate-form/textarea-custom/textarea-custom.component';

@NgModule({
  imports: [
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
    // BrowserModule
  ],
  exports: [
    LayoutModule,
    MarkdownModule,
    NavbarModule,
    NoticePopoverModule,
    PageModule,
    SettingDrawerModule,
    ToolbarModule,
    ValidateFormComponent,
    SelectCustomComponent,
    MultipleSelectCustomComponent,
    DateCustomComponent,
    TimeCustomComponent,
    InputCustomComponent
  ],
  declarations: [
    ValidateFormComponent,
    SelectCustomComponent,
    MultipleSelectCustomComponent,
    DateCustomComponent,
    TimeCustomComponent,
    InputCustomComponent,
    TextareaCustomComponent
  ]
})
export class ComponentsModule { }
