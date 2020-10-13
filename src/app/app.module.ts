import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material-module';
import { LoginModule } from './features/login/login.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IndexModule } from './features/index/index.module';
import { GestorModule } from './features/gestor/gestor.module';
import { SharedModule } from './features/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { NgxMaskModule } from 'ngx-mask';
import { TextMaskModule } from 'angular2-text-mask';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    LoginModule,
    GestorModule,
    SharedModule,
    NgxMaskModule,
    TextMaskModule,
    IndexModule,
    NgbModule,
    HttpClientModule,

  ],
  providers: [],
  exports: [IndexModule, GestorModule, TextMaskModule, NgxMaskModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
