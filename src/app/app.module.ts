import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {SaludoModule} from "saludo";
// Importacion de la libreria en desarrollo por si necesitamos testear cambios
// import {SaludoModule} from "projects/saludo/src/lib/saludo.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SaludoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
