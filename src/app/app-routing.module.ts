import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AutenticacionGuard } from './guards/autenticacion.guard';
//usamos el guard autenticacion 
const routes: Routes = [
  {
    path: '',
    redirectTo: 'first-page',  // mostramos como pagina principal en vez de home al recargar o entrar a la
    pathMatch: 'full'
  },
  {
    path: 'first-page',
    loadChildren: () => import('./first-page/first-page.module').then(m => m.FirstPagePageModule)
  },
  {
    path: 'second-page',
    loadChildren: () => import('./second-page/second-page.module').then(
      m => m.SecondPagePageModule),canActivate:[AutenticacionGuard]
  },
 
  {
    path: 'third-page',
    loadChildren: () => import('./third-page/third-page.module').then(
      m => m.ThirdPagePageModule)
  },
  {
    path: 'fourth-page',
    loadChildren: () => import('./fourth-page/fourth-page.module').then(
      m => m.FourthPagePageModule),canActivate:[AutenticacionGuard]
  },
  {
    path: 'five-page',
    loadChildren: () => import('./five-page/five-page.module').then(
      m => m.FivePagePageModule),canActivate:[AutenticacionGuard]
  },
  {
    path: 'six-page',
    loadChildren: () => import('./six-page/six-page.module').then(
      m => m.SixPagePageModule),canActivate:[AutenticacionGuard]
  },
  {
    path: 'seven-page',
    loadChildren: () => import('./seven-page/seven-page.module').then(
      m => m.SevenPagePageModule),canActivate:[AutenticacionGuard]
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then(
      m => m.RegisterPageModule)
  },
  {
    path: '**',//asi un usuario intenta ingresar a cualquier ruta llevara a esta pagina
    loadChildren: () => import('./no-encontrado/no-encontrado.module').then(m => m.NoEncontradoPageModule)
  },




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
