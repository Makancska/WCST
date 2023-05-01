import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrvosRoutingModule } from './orvos-routing.module';
import { OrvosComponent } from './orvos.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { OnHoverModule } from 'src/app/shared/directives/on-hover/on-hover.module';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    OrvosComponent
  ],
  imports: [
    CommonModule,
    OrvosRoutingModule,
    MatCardModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    OnHoverModule
  ]
})
export class OrvosModule { }
