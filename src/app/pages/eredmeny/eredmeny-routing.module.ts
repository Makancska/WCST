import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EredmenyComponent } from './eredmeny.component';

const routes: Routes = [
  { path: '', component: EredmenyComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EredmenyRoutingModule { }
