import { ProductoPorNumeroEntregaModel } from "../producto-por-numero-entrega/producto-por-numero-entrega-model";
import { MarcaArticuloModel } from "../../marca-articulo/marca-articulo-model";
import { CatalogoProductoModel } from "../catalogo-producto/catalogo-producto-model";

export class ProductoPresentacionModel {
    
    constructor(

        public idProductoPresentacion:String = null,
        public catalogoProductoQaliwarma:CatalogoProductoModel=null,
        public cantidadPresentacion:number=null,
        public dscPresentacion:string=null,
        public anno:number=null,
        public numeroEntrega:number=null,
        public factorVolumenPresentacion:number=null
        

    ){

    }
}
