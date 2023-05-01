import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TesztComponent } from './teszt.component';

const routes: Routes = [
  { path: '', component: TesztComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TesztRoutingModule { }
