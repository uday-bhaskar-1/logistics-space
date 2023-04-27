import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimengModule } from './primeui/primeng.module';
import { UsercardComponent } from './components/usercard/usercard.component';
// import { TimePipe } from './pipes/time.pipe';

@NgModule({
  declarations: [UsercardComponent],
  imports: [CommonModule, PrimengModule],
  exports: [UsercardComponent],
})
export class SharedModule {}
