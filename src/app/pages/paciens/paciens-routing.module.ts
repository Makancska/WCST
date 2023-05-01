import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaciensComponent } from './paciens.component';

const routes: Routes = [
  { path: '', component: PaciensComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaciensRoutingModule { }
