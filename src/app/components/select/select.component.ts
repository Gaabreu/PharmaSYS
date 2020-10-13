import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

export interface TipoPagamento {
  pagamento: string;
}


@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})


export class SelectComponent implements OnInit {
  @Input()
  tipos: TipoPagamento[];

  tipoControl = new FormControl('', Validators.required);

  constructor() { }

  ngOnInit(): void {
  }

}
