import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ClassDirective } from './class.directive';
import { TimesDirective } from './times.directive';

@NgModule({
  declarations: [
    AppComponent,
    ClassDirective,
    TimesDirective,
    TimesDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
