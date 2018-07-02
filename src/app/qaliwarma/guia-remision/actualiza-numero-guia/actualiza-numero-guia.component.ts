import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actualiza-numero-guia',
  templateUrl: './actualiza-numero-guia.component.html',
  styleUrls: ['./actualiza-numero-guia.component.css']
})
export class ActualizaNumeroGuiaComponent implements OnInit {

  anno:number;
  numeroEntrega:number = 1;

  constructor() { }

  ngOnInit() {
  }

}
