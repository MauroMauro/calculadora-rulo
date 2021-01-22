import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cotizaciones',
  templateUrl: './cotizaciones.component.html',
  styleUrls: ['./cotizaciones.component.css']
})
export class CotizacionesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
    var bluediv = document.getElementById("blue");
    var mepdiv = document.getElementById("mep");
    var oficialdiv = document.getElementById("oficial");
    var solidariodiv = document.getElementById("solidario");

    fetch('https://criptoya.com/api/dolar')
      .then(response => response.json())
      .then(json => bluediv.innerHTML = json.blue )
      .then(json => console.log(json))

    fetch('https://criptoya.com/api/dolar')
      .then(response => response.json())
      .then(json => mepdiv.innerHTML = json.mep )
      .then(json => console.log(json))

    fetch('https://criptoya.com/api/dolar')
      .then(response => response.json())
      .then(json => oficialdiv.innerHTML = json.oficial )
      .then(json => console.log(json))

    fetch('https://criptoya.com/api/dolar')
      .then(response => response.json())
      .then(json => solidariodiv.innerHTML = json.solidario )
      .then(json => console.log(json))



  }

}
