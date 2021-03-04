import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardboardComponent } from "./cardboard.component";

const routes: Routes = [
  {
    path:'',
    component:CardboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CardboardRoutingModule { }
