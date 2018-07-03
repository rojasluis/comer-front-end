import { ProveedorclienteModel } from "../../proveedorcliente/proveedorcliente-model";
import { PuntoPartidaModel } from "../punto-partida/punto-partida-model";
import { PuntoLlegadaModel } from "../punto-llegada/punto-llegada-model";
import { RequerimientoVolumen001Model } from "../requerimiento-volumen-001/requerimiento-volumen-001-model";
import { VehiculoModel } from "../vehiculo/vehiculo-model";
import { ChoferModel } from "../chofer/chofer-model";
import { TransportistaModel } from "../transportista/transportista-model";

export class GuiaRemisionModel {

    constructor(
        public idGuiaRemision001:number=0,
        public serie:number=null,
        public numero:number=null,
        public numeroFisico:string=null,
        public fechaEmision:string=null,
        public proveedorcliente:ProveedorclienteModel =null,
        public puntoPartida:PuntoPartidaModel=null,
        public puntoLlegada:PuntoLlegadaModel=null,
        public requerimientoVolumen001:RequerimientoVolumen001Model=null,
        public vehiculo:VehiculoModel=null,
        public chofer:ChoferModel=null,
        public transportista:TransportistaModel,
        public estado:string,
        public sumaPesoTotal:number,
        public ordenPorItem:number

    ){

    }
}
