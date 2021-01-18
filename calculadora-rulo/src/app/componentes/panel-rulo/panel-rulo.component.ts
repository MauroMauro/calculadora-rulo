import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel-rulo',
  templateUrl: './panel-rulo.component.html',
  styleUrls: ['./panel-rulo.component.css']
}) 
export class PanelRuloComponent implements OnInit {


  cotizacionOficial: number;
  inversionUsd: number;
  inversionArs: number;
  impuestos: number;
  cotizacion: number;
  cotizacionBlue: number;

  //la "diferenciaBlueSobreOficial" refleja el porcentaje de ventaja del Blue sobre la "cotizacion"
  diferenciaBlueSobreOficial:number;

  constructor() { }



  ngOnInit(): void {

    this.definirCotizaciones();
    this.definirMontos();
  }

  definirCotizaciones(){

    fetch('https://criptoya.com/api/dolar')
      .then(response => response.json())
      .then(json => this.cotizacionOficial = json.oficial )
      .then(json => console.log('cotizacion oficial: '+json))

    fetch('https://criptoya.com/api/dolar')
      .then(response => response.json())
      .then(json => this.inversionArs = (this.inversionUsd * json.oficial) )
      .then(json => console.log('inversion ars: '+json))

    fetch('https://criptoya.com/api/dolar')
      .then(response => response.json())
      .then(json => this.cotizacionBlue = json.blue )
      .then(json => console.log('cotizacion blue: '+json))
  }
  

  definirMontos() {
    
    console.log("en definir montos, la cotizacion blue: " + this.cotizacionBlue);
    console.log("en definir montos, la cotizacion oficial: " + this.cotizacionOficial);
    console.log("en definir montos, los impuestos: " + this.impuestos);
    this.inversionUsd = 200;
    this.inversionArs = 0;
    this.impuestos = 65;
    //this.cotizacion = this.cotizacionOficial + ((this.cotizacionOficial * this.impuestos) / 100);
    //console.log("cotizacion: " + this.cotizacion);
    
    //la "diferenciaBlueSobreOficial" refleja el porcentaje de ventaja del Blue sobre la "cotizacion"
    //this.diferenciaBlueSobreOficial = ((this.cotizacionBlue - this.cotizacion) * 100) / this.cotizacionBlue;


  }

  
}
