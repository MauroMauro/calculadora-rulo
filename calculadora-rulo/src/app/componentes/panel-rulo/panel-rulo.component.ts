import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel-rulo',
  templateUrl: './panel-rulo.component.html',
  styleUrls: ['./panel-rulo.component.css']
})
export class PanelRuloComponent implements OnInit {

  cotizacionOficial: number = 80;
  inversionUsd: number = 200;
  inversionArs: number = this.inversionUsd * this.cotizacionOficial;
  impuestos: number = 65;
  cotizacion: number = this.cotizacionOficial + ((this.cotizacionOficial * this.impuestos)/100);
  cotizacionBlue: number = 160;

  //la "diferenciaBlueSobreOficial" refleja el porcentaje de ventaja del Blue sobre la "cotizacion"
  diferenciaBlueSobreOficial:number = ((this.cotizacionBlue - this.cotizacion) * 100)/ this.cotizacionBlue;

  constructor() { }



  ngOnInit(): void {
  }

}
