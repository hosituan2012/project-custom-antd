import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';

import { ComponentsModule, ServicesModule, SharedModule } from '~/shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { LayoutComponent } from './shared/components/layout/layout.component';
// import { PageModule } from './routes/page/page.module';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent, MainLayoutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgZorroAntdModule,
    ComponentsModule,
    ServicesModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    // PageModule
    // RoutesModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    LayoutComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
