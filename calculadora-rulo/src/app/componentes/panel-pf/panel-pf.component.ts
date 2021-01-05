import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel-pf',
  templateUrl: './panel-pf.component.html',
  styleUrls: ['./panel-pf.component.css']
})
export class PanelPfComponent implements OnInit {

 
  inversionArs: number = 1000;
  plazo: number = 30;
  tasaArs: number = 30;

  cotizacionOficial: number = 80;
  impuestos: number = 65;
  cotizacion: number = this.cotizacionOficial + ((this.cotizacionOficial * this.impuestos)/100);
  cotizacionBlue: number = 160;

  //la "diferenciaBlueSobreOficial" refleja el porcentaje de ventaja del Blue sobre la "cotizacion"
  diferenciaBlueSobreOficial:number = ((this.cotizacionBlue - this.cotizacion) * 100)/ this.cotizacionBlue;


  constructor() { }

  ngOnInit(): void {

  }

  mensaje(){
    console.log('Mensaje de accion');
  }

}
