import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { InicioComponent } from './inicio.component';
import { SideMenuComponent } from 'src/app/components/side-menu/side-menu.component';
import { MaterialModule } from 'src/app/material-module';


@NgModule({
  declarations: [InicioComponent, SideMenuComponent],
  imports: [
    CommonModule,
    InicioRoutingModule,
    MaterialModule,
  ],
})
export class InicioModule { }
