import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SaludoService {

  constructor() {
    console.log("Saludando desde la libreria SaludoService =)");
  }
}
