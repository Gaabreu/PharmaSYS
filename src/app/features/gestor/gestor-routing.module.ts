import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GestorComponent } from './gestor.component';
import { InicioGestorComponent } from './pages/inicio-gestor/inicio-gestor.component';

const routes: Routes = [{ path: '', component: GestorComponent, children: [{path: '', component: InicioGestorComponent},]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestorRoutingModule { }
