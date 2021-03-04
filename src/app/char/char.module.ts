import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharRoutingModule } from './char-routing.module';
import { CharComponent } from './char.component';


@NgModule({
  declarations: [CharComponent],
  imports: [
    CommonModule,
    CharRoutingModule
  ],
  exports: [CharComponent]
})
export class CharModule { }
