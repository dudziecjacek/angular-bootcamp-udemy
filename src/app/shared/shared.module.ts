import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
import { DividerComponent } from './divider/divider.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SharedComponent, DividerComponent],
  exports: [DividerComponent]
})
export class SharedModule { }
