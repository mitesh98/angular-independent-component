import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RadioComponent } from './radio.component';
import { MyInputComponent } from './my-input/my-input.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, RadioComponent, MyInputComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
