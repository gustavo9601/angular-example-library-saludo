import {Component, OnInit} from '@angular/core';
import {SaludoService} from "./saludo.service";

@Component({
  selector: 'sld-saludo',
  template: `
    <p>
      saludo works!
    </p>
  `,
  styles: []
})
export class SaludoComponent implements OnInit {

  constructor(private saludoService: SaludoService) {
  }

  ngOnInit(): void {
  }

}
