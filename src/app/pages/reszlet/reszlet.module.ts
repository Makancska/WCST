import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReszletComponent } from './reszlet.component';



@NgModule({
  declarations: [ReszletComponent],
  imports: [
    CommonModule
  ],
  exports: [ReszletComponent]
})
export class ReszletModule { }
