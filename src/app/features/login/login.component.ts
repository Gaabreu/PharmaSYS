import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  hide = true;
  
  form = new FormGroup({
    user: new FormControl('', [Validators.required, Validators.maxLength(10)]),
  });
  
  constructor(private router: Router) { }
  
  ngOnInit(): void {

  }
  
  onSubmit(): void {
    if(this.form.value.user == "caixa"){
      this.router.navigate(['/index']);
    }
    if(this.form.value.user == "gestor"){
      this.router.navigate(['/gestor'])
    }
  }
}
