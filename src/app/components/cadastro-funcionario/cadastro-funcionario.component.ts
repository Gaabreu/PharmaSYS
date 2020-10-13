import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../../services/api';

export interface Funcionario {
  nome: string;
  dtNascimento: string;
  telefone: string;
  sexo: string;
  cpf: string;
  senha1: string;
  senha2: string;
  cargo: string;
  email: string;
}


@Component({
  templateUrl: './cadastro-funcionario.component.html',
  styleUrls: ['./cadastro-funcionario.component.scss']
})
export class CadastroFuncionarioComponent implements OnInit {

  telefoneMask = ['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  cpfMask = [/\d/,/\d/,/\d/,'.',/\d/,/\d/,/\d/,'.',/\d/,/\d/,/\d/,'-',/\d/,/\d/g];

  @Input()
  funcionario: Funcionario[];


  form = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(2)]),
    dtNascimento: new FormControl('',[Validators.required]),
    telefone: new FormControl('', [Validators.required, Validators.minLength(11)]),
    cpf: new FormControl('', [Validators.required]),
    senha1: new FormControl('', [Validators.required, Validators.minLength(8)]),
    senha2: new FormControl('', [Validators.required, Validators.minLength(8)]),
    email: new FormControl('', [Validators.required, Validators.email])
  });

  
  hide = true;
  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());

  constructor( private apiService: ApiService) { }

  ngOnInit(): void {
  }


  sendForm(){
    this.apiService.create(this.form.value).subscribe((data) => {
    });
  }

}
