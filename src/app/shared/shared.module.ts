import { NgModule } from '@angular/core';

import { ComponentsModule } from './components/components.module';
export { ComponentsModule } from './components/components.module';
import { ServicesModule } from './services/services.module';
import { ReplaceLineBreakPipe } from './pipes/replace-line-break.pipe';
import { CommonModule } from '@angular/common';
export * from './services/services.module';
export * from './modules/modules.module';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    ComponentsModule,
    ServicesModule
  ],
  // declarations: [ReplaceLineBreakPipe],
  // providers: [ReplaceLineBreakPipe]
})
export class SharedModule { }
