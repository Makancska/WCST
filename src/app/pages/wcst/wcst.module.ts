import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WcstComponent } from './wcst.component';
import { WcstRoutingModule } from './wcst-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [WcstComponent],
  imports: [
    CommonModule,
    WcstRoutingModule,
    MatButtonModule,
    MatCardModule
  ],
  exports: [WcstComponent]
})
export class WcstModule { }
