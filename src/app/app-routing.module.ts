import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: 'inicio', loadChildren: () => import('./features/inicio/inicio.module').then(m => m.InicioModule) },
                        { path: 'login', loadChildren: () => import('./features/login/login.module').then(m => m.LoginModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
