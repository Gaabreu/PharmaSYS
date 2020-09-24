import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioComponent } from './inicio.component';
import { TesteComponent } from './pages/teste/teste.component';

const routes: Routes = [{ path: '', component: InicioComponent, children: [{path: '', component: TesteComponent}] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InicioRoutingModule { }
