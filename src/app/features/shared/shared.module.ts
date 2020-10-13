import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from 'src/app/components/nav-bar/nav-bar.component';
import { SelectComponent } from 'src/app/components/select/select.component';
import { MaterialModule } from 'src/app/material-module';
import { RouterModule } from '@angular/router';
import { CadastroFuncionarioComponent } from 'src/app/components/cadastro-funcionario/cadastro-funcionario.component';



@NgModule({
  declarations: [NavBarComponent, SelectComponent, CadastroFuncionarioComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
  ],
  exports: [NavBarComponent, SelectComponent, CadastroFuncionarioComponent]
})
export class SharedModule { }
