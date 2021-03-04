import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from "./dashboard.component";

const routes: Routes = [
  {
    path:'',
    component:DashboardComponent,
    children:[
      {
        path:'',
        redirectTo:'cardboard'
      },
      {
        path:'cardboard',
        loadChildren:()=>import("./cardboard/cardboard.module").then(m=>m.CardboardModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
