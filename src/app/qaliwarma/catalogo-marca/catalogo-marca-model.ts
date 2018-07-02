import { ProductoPorNumeroEntregaModel } from "../producto-por-numero-entrega/producto-por-numero-entrega-model";
import { MarcaArticuloModel } from "../../marca-articulo/marca-articulo-model";

import { ProductoPresentacionModel } from "../producto-presentacion/producto-presentacion-model";
import { CatalogoLoteModel } from "../catalogo-lote/catalogo-lote-model";

export class CatalogoMarcaModel {

    constructor(
        public idCatalogoMarca:String = null,
        public dscCatalogoMarca:String = null,
        public productoPorNumeroEntrega:ProductoPorNumeroEntregaModel=null,
        public marca:MarcaArticuloModel=null,
        public productoPresentacion:ProductoPresentacionModel=null,
        public catalogoLotes:CatalogoLoteModel[]=null

    ){

    }

  

}
