import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { Myc08Component } from './myc08/myc08.component';
import { FormsModule } from '@angular/forms';
import { AbsPipe } from './pipes/abs.pipe';
import { PfPipe } from './pipes/pf.pipe';
import { PowPipe } from './pipes/pow.pipe';
import { Myc06Component } from './myc06/myc06.component';
import { GreenDirective } from './directives/green.directive';
import { HideDirective } from './directives/hide.directive';
import { FocusDirective } from './directives/focus.directive';
import { Myc05Component } from './myc05/myc05.component';
import { Myc07Component } from './myc07/myc07.component';

@NgModule({
  declarations: [AppComponent, Myc08Component, AbsPipe, PfPipe, PowPipe, Myc06Component, GreenDirective, HideDirective, FocusDirective, Myc05Component, Myc07Component],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
