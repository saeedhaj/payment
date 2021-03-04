import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharRoutingModule } from './char-routing.module';
import { CharComponent } from './char.component';
import { MatButtonModule } from "@angular/material/button";
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [CharComponent],
  imports: [
    CommonModule,
    CharRoutingModule,
    MatButtonModule,
    ChartsModule

  ],
  exports: [CharComponent]
})
export class CharModule { }
