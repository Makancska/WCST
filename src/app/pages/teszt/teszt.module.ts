import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TesztComponent } from './teszt.component';
import { TesztRoutingModule } from './teszt-routing.module';
import { MatCardModule } from '@angular/material/card';
import { OnHoverModule } from 'src/app/shared/directives/on-hover/on-hover.module';


@NgModule({
  declarations: [TesztComponent],
  imports: [
    CommonModule,
    TesztRoutingModule,
    MatCardModule,
    OnHoverModule
  ],
  exports: [TesztComponent]
})
export class TesztModule { }
