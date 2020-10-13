import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  take } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class ApiService {
  private readonly API = "http://localhost:8081/";
  constructor(private httpClient: HttpClient) { }



  getTodosFuncionarios() {
    this.httpClient.get(`${this.API }/funcionario`)
             .subscribe(resultado => console.log(resultado));
  }
  
  create(connection) {
    return this.httpClient.post(`${this.API}funcionario`, connection).pipe(take(1));
  }

}

