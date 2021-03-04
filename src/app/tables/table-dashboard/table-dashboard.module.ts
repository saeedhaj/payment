import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableDashboardRoutingModule } from './table-dashboard-routing.module';
import{TableDashboardComponent} from './table-dashboard.component'


@NgModule({
  declarations:[TableDashboardComponent],
  imports: [
    CommonModule,
    TableDashboardRoutingModule
  ],
  exports: [TableDashboardComponent]
})
export class TableDashboardModule { }
