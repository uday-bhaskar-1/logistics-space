import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimengModule } from './primeui/primeng.module';
import { UsercardComponent } from './components/usercard/usercard.component';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    UsercardComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    PrimengModule
  ],
  exports:[ PrimengModule]
})
export class SharedModule { }
