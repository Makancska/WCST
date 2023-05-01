import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage.component';
import { ProfilComponent } from '../profil/profil.component';
import { CanActivateGuard } from 'src/app/shared/guards/auth.guards';

const routes: Routes = [
    {
        path: '', redirectTo: 'homepage/home', pathMatch: 'full'
    },
    { path: '', component: HomepageComponent,
    children: [
    {
        path: 'profil',
        loadChildren: () => import('./../profil/profil.module').then(m => m.ProfilModule)
    },
    {
        path: 'orvos',
        loadChildren: () => import('./../orvos/orvos.module').then(m => m.OrvosModule)
    },
    {
        path: 'home',
        loadChildren: () => import('./../home/home.module').then(m => m.HomeModule)
    },
    {
        path: 'paciens',
        loadChildren: () => import('./../paciens/paciens.module').then(m => m.PaciensModule)
    },
    {
        path: 'teszt',
        loadChildren: () => import('./../teszt/teszt.module').then(m => m.TesztModule)
    },
    {
        path: 'eredmeny',
        loadChildren: () => import('./../eredmeny/eredmeny.module').then(m => m.EredmenyModule)
    },
    {
        path: 'wcst',
        loadChildren: () => import('./../wcst/wcst.module').then(m => m.WcstModule)
    },
    {
        path: '**',
        redirectTo: 'homepage/home',
        pathMatch: 'full'
    }
    ],
    canActivateChild: [CanActivateGuard]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomepageRoutingModule { }
