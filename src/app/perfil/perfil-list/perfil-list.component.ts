import { Component, OnInit } from '@angular/core';

import { Message } from 'primeng/primeng';
import { SharedService } from '../../shared/servicio/shared.service';
import { PerfilModel } from '../perfil-model';



@Component({
  selector: 'ad-perfil-list',
  templateUrl: './perfil-list.component.html',
  styleUrls: ['./perfil-list.component.css'],
  providers : [SharedService]
})
export class PerfilListComponent implements OnInit {
  show: boolean=true;

  public titulo:string = "Pefiles de usuario";
  public perfilsModel:PerfilModel[] = [];
  public perfilModel:PerfilModel;

   //-comandos obligatorios para la paginacion-//
   private msgPopup: Message[] = [];
   public blocked: boolean;
 
   public showPanelBuscarFlag: boolean = false;
 
   public filterPage: Object;
   public displayModal: boolean = false;
   public refreshPage: boolean = false;
   //-----------------------------------------//

  constructor(private sharedService:SharedService) { }

  ngOnInit() {
  }


  filter(e) {
    this.filterPage = JSON.stringify(e.filters);
  }
  refreshModel(e) {
    this.perfilsModel = e;
  }

  showPanelBuscar() {
    this.showPanelBuscarFlag = !this.showPanelBuscarFlag;
  }


  onActivate() {
    console.log("Activate lista perfil");
    this.show = false;
  
  }  

  onDeactivate() {
    console.log("Deactivate lista en lista de perfil");
    this.show = true;
    
  }


  ocultarLista(){
    this.show = false;
  }

}
