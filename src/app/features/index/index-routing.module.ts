import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioGestorComponent } from '../gestor/pages/inicio-gestor/inicio-gestor.component';

import { IndexComponent } from './index.component';
import { InicioCaixaComponent } from './pages/inicio-caixa/inicio-caixa.component';

const routes: Routes = [{ path: '', component: IndexComponent, children: [{path: '', component: InicioCaixaComponent},] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndexRoutingModule { }
