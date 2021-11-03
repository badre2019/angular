import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {EvaluateCarComponent} from "./evaluate-car.component";

const routes: Routes = [
  {
    path: '',
    component: EvaluateCarComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EvaluateCarRoutingModule { }
