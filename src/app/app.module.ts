import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { CalculatorComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [CalculatorComponent],
  bootstrap: [CalculatorComponent],
})
export class AppModule {}
