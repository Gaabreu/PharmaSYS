import { Component, OnInit } from '@angular/core';
import { TipoPagamento } from 'src/app/components/select/select.component';

export interface Transaction {
  quantidade: number;
  produto: string;
  vlUnitario: number;
  desconto: number;
  vlFinal: number;
}

@Component({
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.scss']
})


export class TesteComponent implements OnInit {

  tipos: TipoPagamento[] = [
    {pagamento: 'Débito'},
    {pagamento: 'Crédito'}
  ];

  novaComanda: Boolean;
  sangria: Boolean;
  devolucao: Boolean;

  displayedColumns = ['quantidade', 'produto', 'vlUnitario', 'desconto', 'vlFinal'];
  transactions: Transaction[] = [
    {quantidade: 10, produto: 'Dipirona', vlUnitario: 1.50, desconto: 0, vlFinal: 15},
    {quantidade: 1, produto: 'Tenispé', vlUnitario: 6, desconto: 0, vlFinal: 6},

  ];
  constructor() { }

  ngOnInit(): void {
    this.novaComanda = false;
    this.sangria = false;
    this.devolucao = false;
  }

  getTotalCost() {
    return this.transactions.map(t => t.vlFinal).reduce((acc, value) => acc + value, 0);
  }

}
