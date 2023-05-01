import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CanActivateGuard } from './shared/guards/auth.guards';


const routes: Routes = [
  {
    path: '', 
    redirectTo:'login', 
    pathMatch: 'full'
  },
  {
    path: 'homepage',
    loadChildren: () => import('./pages/homepage/homepage.module').then(m =>m.HomepageModule),
    canActivate: [CanActivateGuard]
    
  },
  {
    path: 'login', 
    loadChildren: () => import('./pages/login/login.module').then(m =>m.LoginModule)
  },
  {
    path: 'registration', 
    loadChildren: () => import('./pages/registration/registration.module').then(m =>m.RegistrationModule)
  },
  {
    path: '**', 
    redirectTo:'login', 
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
