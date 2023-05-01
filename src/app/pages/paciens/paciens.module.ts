import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaciensComponent } from './paciens.component';
import { PaciensRoutingModule } from './paciens-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { OnHoverModule } from 'src/app/shared/directives/on-hover/on-hover.module';


@NgModule({
  declarations: [PaciensComponent],
  imports: [
    CommonModule,
    PaciensRoutingModule,
    MatCardModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    OnHoverModule
  ],
  exports: [PaciensComponent]
})
export class PaciensModule { }
