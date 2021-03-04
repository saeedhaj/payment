import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartDashboardRoutingModule } from './chart-dashboard-routing.module';
import { ChartDashboardComponent } from './chart-dashboard.component';
import { MatButtonModule } from "@angular/material/button";
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [ChartDashboardComponent],
  imports: [
    CommonModule,
    ChartDashboardRoutingModule,
    MatButtonModule,
    ChartsModule
  ],
  exports: [ChartDashboardComponent]
})
export class ChartDashboardModule { }
