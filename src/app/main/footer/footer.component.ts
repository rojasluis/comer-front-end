import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public datos:any = {autor:'Ing. Carlos A. Rojas Casique',  contacto : '954060687', actualizacion : '15/03/2018 v1'}
  constructor() { }

  ngOnInit() {
  }

}
