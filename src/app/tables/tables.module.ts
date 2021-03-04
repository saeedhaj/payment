import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablesRoutingModule } from './tables-routing.module';
import { TablesComponent } from './tables.component';
import { TableDashboardModule } from "./table-dashboard/table-dashboard.module";


@NgModule({
  declarations: [TablesComponent],
  imports: [
    CommonModule,
    TablesRoutingModule,
    TableDashboardModule
  ],
  exports: [TableDashboardModule]
})
export class TablesModule { }
