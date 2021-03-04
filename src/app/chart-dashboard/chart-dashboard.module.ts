import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartDashboardRoutingModule } from './chart-dashboard-routing.module';
import { ChartDashboardComponent } from './chart-dashboard.component';


@NgModule({
  declarations: [ChartDashboardComponent],
  imports: [
    CommonModule,
    ChartDashboardRoutingModule
  ],
  exports: [ChartDashboardComponent]
})
export class ChartDashboardModule { }
