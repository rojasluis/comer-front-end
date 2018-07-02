import { EntregaPorItemModel } from "../entrega-por-item/entrega-por-item-model";
import { EmpleadoDistribuidorModel } from "../empleado-distribuidor/empleado-distribuidor-model";
import { RutaDistribucionDetalleModel } from "./ruta-distribucion-detalle-model";
import { ChoferModel } from "../chofer/chofer-model";
import { VehiculoModel } from "../vehiculo/vehiculo-model";

export class RutaDistribucionModel {

    constructor(
        public idRutaDistribucion:string="0",
        public dscRutaDistribucion:string=null,
        public anno:number=null,
        public numeroEntrega:number=null,
        public empleadoDistribuidor:EmpleadoDistribuidorModel=new EmpleadoDistribuidorModel(),
        public chofer:ChoferModel=new ChoferModel(),
        public vehiculo:VehiculoModel=new VehiculoModel(),
        public rutaDistribucionDetalles:RutaDistribucionDetalleModel[]=[]

    ){

    }
}
