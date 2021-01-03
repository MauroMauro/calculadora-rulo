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

  constructor() { }

  ngOnInit(): void {
  }

}
