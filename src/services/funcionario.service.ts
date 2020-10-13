import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FuncionarioData } from 'src/app/features/gestor/pages/inicio-gestor/inicio-gestor.component';


@Injectable({
    providedIn: 'root'
})

export class FuncionarioService {
    private readonly API = 'http://localhost:8081';
    constructor(private http: HttpClient) { }

    getAllFuncionario(){
        return this.http.get<FuncionarioData[]>(`${this.API }/funcionario`);
    }

}