import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CadastroFuncionarioComponent } from 'src/app/components/cadastro-funcionario/cadastro-funcionario.component';
import { FuncionarioService } from 'src/services/funcionario.service';

export interface FuncionarioData {
  id: string;
  nome: string;
  telefone: string;
}

@Component({
  templateUrl: './inicio-gestor.component.html',
  styleUrls: ['./inicio-gestor.component.scss']
})


export class InicioGestorComponent implements OnInit, AfterViewInit {

  isFuncionario: boolean = true;
  isTerceiro: boolean = true;
  dataSource: MatTableDataSource<FuncionarioData[]>;
  displayedColumns: string[] = ['id', 'nome', 'telefone'];


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public dialog: MatDialog, private service: FuncionarioService) {

  }

  ngOnInit(){
    this.service.getAllFuncionario()
      .subscribe(response => {
        this.dataSource = new MatTableDataSource([response]);
      });
  }

  ngAfterViewInit() {

  }

  applyFilter(event: Event) {

  }

  openDialog() {
    const dialogRef = this.dialog.open(CadastroFuncionarioComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  toggleDisplayFuncionario() {
    this.isFuncionario = !this.isFuncionario;
  }

  toggleDisplayTerceiro(){
    this.isTerceiro = !this.isTerceiro;
  }
}
