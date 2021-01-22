import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel-rulo',
  templateUrl: './panel-rulo.component.html',
  styleUrls: ['./panel-rulo.component.css']
}) 
export class PanelRuloComponent implements OnInit {


  cotizacionOficial: number;
  inversionUsd: number = 200;
  inversionArs: number;
  impuestos: number = 65;
  cotizacion: number;
  cotizacionBlue: number;
  cotizacionConImpuestos: number;

  

  constructor() { }



  ngOnInit(): void {

    this.definirCotizaciones();
  }

  definirCotizaciones(){

    fetch('https://criptoya.com/api/dolar')
      .then(response => response.json())
      .then(json => this.cotizacionOficial = json.oficial )
      .then(json => console.log('cotizacion oficial: '+json))

    fetch('https://criptoya.com/api/dolar')
      .then(response => response.json())
      .then(json => this.inversionArs = (this.inversionUsd * json.solidario) )
      .then(json => console.log('inversion ars: '+json))

    fetch('https://criptoya.com/api/dolar')
      .then(response => response.json())
      .then(json => this.cotizacionBlue = json.blue )
      .then(json => console.log('cotizacion blue: '+json))

    fetch('https://criptoya.com/api/dolar')
      .then(response => response.json())
      .then(json => this.cotizacionConImpuestos = json.solidario )
      .then(json => console.log('cotizacion solidario: '+json))


  }
  


  
}
