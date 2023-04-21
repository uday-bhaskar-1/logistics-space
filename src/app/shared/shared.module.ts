import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimengModule } from './primeui/primeng.module';
import { UsercardComponent } from './components/usercard/usercard.component';


@NgModule({
  declarations: [
    UsercardComponent
  ],
  imports: [
    CommonModule,
    PrimengModule
  ],
  exports:[ PrimengModule]
})
export class SharedModule { }
