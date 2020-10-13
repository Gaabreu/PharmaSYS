import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexRoutingModule } from './index-routing.module';
import { IndexComponent } from './index.component';
import { MaterialModule } from 'src/app/material-module';
import { InicioCaixaComponent } from './pages/inicio-caixa/inicio-caixa.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [IndexComponent, InicioCaixaComponent],
  imports: [
    CommonModule,
    IndexRoutingModule,
    MaterialModule,
    SharedModule,
  ],
})
export class IndexModule { }
