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


  constructor() { }

  ngOnInit(): void {

  }

  mensaje(){
    console.log('Mensaje de accion');
  }

}
