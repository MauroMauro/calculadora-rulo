import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel-pf',
  templateUrl: './panel-pf.component.html',
  styleUrls: ['./panel-pf.component.css']
})
export class PanelPfComponent implements OnInit {

 
  inversionArs: number = 1000;
  plazo: number = 30;
  tasaArs: number = 40;

  cotizacionSolidario: number;
  cotizacionBlue: number;

  constructor() { }

  ngOnInit(): void {

    this.definirCotizaciones();
  }

  definirCotizaciones(){


    fetch('https://criptoya.com/api/dolar')
      .then(response => response.json())
      .then(json => this.cotizacionBlue = json.blue )
      .then(json => console.log('cotizacion blue: '+json))

    fetch('https://criptoya.com/api/dolar')
      .then(response => response.json())
      .then(json => this.cotizacionSolidario = json.solidario )
      .then(json => console.log('cotizacion solidario: '+json))


  }

}
