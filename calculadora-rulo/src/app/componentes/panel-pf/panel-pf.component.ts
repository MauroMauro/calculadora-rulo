import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel-pf',
  templateUrl: './panel-pf.component.html',
  styleUrls: ['./panel-pf.component.css']
})
export class PanelPfComponent implements OnInit {

  inversionUsd: number = 10;
  inversionArs: number = 10;
  tasaUsd: number = 10;
  tasaArs: number = 10;
  cotizacionUsd: number = 160;

  gananciaPFArs: number = ((this.inversionArs*(this.tasaArs/12))/100).toFixed(2);

  constructor() { }

  ngOnInit(): void {

  }

  ganancia(inversion:number, tasa:number) {
    return ((inversion*(tasa/12))/100).toFixed(2);
  }

  mensaje(){
    console.log('Mensaje de accion');
  }

}
