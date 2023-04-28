import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimengModule } from './primeui/primeng.module';
import { UsercardComponent } from './components/usercard/usercard.component';
import { PostcardComponent } from './components/postcard/postcard.component';
// import { TimePipe } from './pipes/time.pipe';

@NgModule({
  declarations: [UsercardComponent, PostcardComponent],
  imports: [CommonModule, PrimengModule],
  exports: [UsercardComponent, PrimengModule],
})
export class SharedModule {}
