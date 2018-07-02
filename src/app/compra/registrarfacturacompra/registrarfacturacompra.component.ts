import { Component, Directive, OnInit } from '@angular/core';
import { PaginationComponent } from '../../shared/pagination/pagination.component';


@Component({
  selector: 'ad-registrarfacturacompra',
  templateUrl: './registrarfacturacompra.component.html',
  styleUrls: ['./registrarfacturacompra.component.css'],

  

})
export class RegistrarfacturacompraComponent implements OnInit {

  public title:string = "Registrar Factura de Compra";
  constructor() { }

  ngOnInit() {
  }

}
