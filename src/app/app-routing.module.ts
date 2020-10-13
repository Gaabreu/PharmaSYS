import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: 'login', loadChildren: () => import('./features/login/login.module').then(m => m.LoginModule) },
                        { path: 'index', loadChildren: () => import('./features/index/index.module').then(m => m.IndexModule) },
                        { path: 'gestor', loadChildren: () => import('./features/gestor/gestor.module').then(m => m.GestorModule) },]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
