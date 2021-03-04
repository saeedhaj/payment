import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import{TablesModule}from 'src/app/tables/tables.module'
import { CardboardModule } from "../cardboard/cardboard.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { ChartDashboardModule } from "../chart-dashboard/chart-dashboard.module";

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    TablesModule,
    CardboardModule,
    ChartDashboardModule,
    FlexLayoutModule
  ],
  exports:[CardboardModule,ChartDashboardModule]
})
export class DashboardModule { }
