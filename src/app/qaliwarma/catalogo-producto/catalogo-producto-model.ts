import { UnidadmedidaModel } from "../../unidadmedida/unidadmedida-model";
import { ProductopresentacionModel } from "../../producto/model/productopresentacion.model";

export class CatalogoProductoModel {

    constructor(
        public idCatalogoProductoQaliwarma:string="",
        public dscCatalogoProductoQaliwarma=null,
        public unidadmedida:UnidadmedidaModel=null,
        public productoPresentacions:ProductopresentacionModel[]=null
    )
    {

    }
}
