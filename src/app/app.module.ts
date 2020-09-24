import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material-module';
import { LoginModule } from './features/login/login.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InicioModule } from './features/inicio/inicio.module';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SelectComponent } from './components/select/select.component';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    LoginModule,
    InicioModule,
    NgbModule,

  ],
  providers: [],
  exports: [NavBarComponent, SelectComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
