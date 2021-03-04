import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardboardRoutingModule } from './cardboard-routing.module';
import { CardboardComponent } from './cardboard.component';
 import { FlexLayoutModule } from '@angular/flex-layout';
 import {MatButtonModule} from '@angular/material/button';
 import {MatCardModule} from '@angular/material/card';

const MATERIAL_MODULES=[
  MatButtonModule,
  MatCardModule

]

@NgModule({
  declarations: [CardboardComponent],
  imports: [
    CommonModule,
    CardboardRoutingModule,
    ...MATERIAL_MODULES,
     FlexLayoutModule
  ],

  exports: [CardboardComponent]
})
export class CardboardModule { }
