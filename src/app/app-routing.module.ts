import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    children: [{
      path: '',
      loadChildren: () => import('./evaluate-car/evaluate-car.module')
        .then(m => m.EvaluateCarModule)
    }],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
