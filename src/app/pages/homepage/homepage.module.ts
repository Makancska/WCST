import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';
import { HomepageRoutingModule } from './homepage-routing.module';
import { NavModule } from '../nav/nav.module';
import { ProfilModule } from '../profil/profil.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [HomepageComponent],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    NavModule,
    ProfilModule,
    RouterModule
  ],
  exports: [HomepageComponent]
})
export class HomepageModule { }
