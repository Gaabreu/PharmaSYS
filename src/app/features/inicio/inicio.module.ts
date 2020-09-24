import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { InicioComponent } from './inicio.component';
import { MaterialModule } from 'src/app/material-module';
import { NavBarComponent } from 'src/app/components/nav-bar/nav-bar.component';
import { TesteComponent } from './pages/teste/teste.component';
import { SelectComponent } from 'src/app/components/select/select.component';



@NgModule({
  declarations: [InicioComponent, NavBarComponent, SelectComponent, TesteComponent],
  imports: [
    CommonModule,
    InicioRoutingModule,
    MaterialModule,
  ],
  exports: [NavBarComponent, SelectComponent]
})
export class InicioModule { }
