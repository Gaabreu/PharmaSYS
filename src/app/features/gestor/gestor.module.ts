import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestorRoutingModule } from './gestor-routing.module';
import { GestorComponent } from './gestor.component';
import { InicioGestorComponent } from './pages/inicio-gestor/inicio-gestor.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from 'src/app/material-module';


@NgModule({
  declarations: [GestorComponent, InicioGestorComponent],
  imports: [
    CommonModule,
    GestorRoutingModule,
    MaterialModule,
    SharedModule,
  ],
})
export class GestorModule { }
