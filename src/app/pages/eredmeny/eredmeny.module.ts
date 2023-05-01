import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EredmenyComponent } from './eredmeny.component';
import { EredmenyRoutingModule } from './eredmeny-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { OnHoverModule } from 'src/app/shared/directives/on-hover/on-hover.module';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [EredmenyComponent],
  imports: [
    CommonModule,
    EredmenyRoutingModule,
    MatCardModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    OnHoverModule,
    FormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [EredmenyComponent]
})
export class EredmenyModule { }
