import { Component, OnInit } from '@angular/core';
import { GuiaRemisionService } from '../guia-remision.service';
import { GuiaRemisionModel } from '../guia-remision-model';
import swal from 'sweetalert2';
import { CrudHttpClientServiceShared } from '../../../shared/servicio/crudHttpClient.service.shared';

@Component({
  selector: 'app-actualiza-numero-guia',
  templateUrl: './actualiza-numero-guia.component.html',
  styleUrls: ['./actualiza-numero-guia.component.css'],
  providers : [GuiaRemisionService,CrudHttpClientServiceShared]
})
export class ActualizaNumeroGuiaComponent implements OnInit {

  anno:number;
  numeroEntrega:number = 1;
  codigoModular:string = "";
  numeroGuia:string="";
  flagExiste:boolean = false;

  guiaRemisionModel:GuiaRemisionModel;

  constructor(private guiaRemisionService:GuiaRemisionService, private crudHttpClientServiceShared:CrudHttpClientServiceShared ) { }

  ngOnInit() {

    let d = new Date();
    this.anno = d.getFullYear();

    this.numeroEntrega =parseInt( localStorage.getItem("numeroEntrega"));


  }

  buscarCodigoModular(){
    this.guiaRemisionService.getGuiaRemisionPorCodigoModularJson(this.anno,this.numeroEntrega, this.codigoModular)
      .subscribe( res=> {
          
          if(res == null){
            swal('No existe el codigo modular');
            return ;
          }
          this.flagExiste = true;
          this.guiaRemisionModel = new GuiaRemisionModel(res.idGuiaRemision001,res.serie, res.numero, res.numeroFisico, res.fechaEmision,res.proveedorcliente,res.puntoPartida,res.puntoLlegada,res.requerimientoVolumen001,res.vehiculo,res.chofer,res.transportista,res.estado,res.sumaPesoTotal,res.ordenPorItem);
          this.numeroGuia = this.guiaRemisionModel.numeroFisico;
          console.log(this.guiaRemisionModel);
        })

  }

  update(){
    this.guiaRemisionModel.numeroFisico = this.numeroGuia;

    this.crudHttpClientServiceShared.update(this.guiaRemisionModel,"guiaremision","update")
    .subscribe( res=>{
      swal("Actualizacion correcta");
    },
    error=>{
      swal("Error","El numero de guia ya fue registrado");
 
    }
  )

  }

}
