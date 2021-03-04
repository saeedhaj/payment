import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardboardRoutingModule } from './cardboard-routing.module';
import { CardboardComponent } from './cardboard.component';


@NgModule({
  declarations: [CardboardComponent],
  imports: [
    CommonModule,
    CardboardRoutingModule
  ]
})
export class CardboardModule { }
