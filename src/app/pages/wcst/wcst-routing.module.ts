import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WcstComponent } from './wcst.component';


const routes: Routes = [
  { path: '', component: WcstComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WcstRoutingModule { }
