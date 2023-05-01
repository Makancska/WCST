import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrvosComponent } from './orvos.component';

const routes: Routes = [
  { path: '', component: OrvosComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrvosRoutingModule { }
