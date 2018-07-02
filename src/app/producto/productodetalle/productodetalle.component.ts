import { ProductoModel } from '../model/producto.model';

import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



import { SharedService } from "../../shared/servicio/shared.service";

import { CodigobarraModel } from "../../codigobarra/codigobarra-model";
import { CodigobarraService } from "../../codigobarra/codigobarra.service";
import { Message } from "primeng/primeng";
import { ProductodetalleServiceService } from "../../producto/productodetalle/productodetalle-service.service";
import { FileUpload } from 'primeng/primeng';
import { AutocompletComponent } from '../autocomplet.component';
import { CategoriaArticuloModel } from '../../categoria-articulo/categoria-articulo-model';
import { CategoriaArticuloService } from '../../categoria-articulo/categoria-articulo.service';
import { MarcaArticuloService } from '../../marca-articulo/marca-articulo.service';
import { MarcaArticuloModel } from '../../marca-articulo/marca-articulo-model';
import { UnidadmedidaModel } from '../../unidadmedida/unidadmedida-model';

declare const $: any;

@Component({
  selector: 'ad-productodetalle',
  templateUrl: './productodetalle.component.html',
  styleUrls: ['./productodetalle.component.css'],
  providers: [CategoriaArticuloService, MarcaArticuloService, SharedService, CodigobarraService, ProductodetalleServiceService]
})

export class ProductodetalleComponent implements OnInit {

  private msgPopup: Message[] = [];

  public productoForm: any;

  public categoriasModel: CategoriaArticuloModel[];
  public categoriaModel: CategoriaArticuloModel = new CategoriaArticuloModel();

  public marcasModel: MarcaArticuloModel[];
  public marcaModel: MarcaArticuloModel = new MarcaArticuloModel();

  public unidadmedidaModel: UnidadmedidaModel;
  public unidadmedidasModel: UnidadmedidaModel[];


  public productoModel: ProductoModel = new ProductoModel();

  public codigobarraModel: CodigobarraModel;
  public codigobarrasModel: CodigobarraModel[] = [];

  public _codigobarra: string = "";
  private sub: any;
  private id: number;
  public token: any = 'Bearer ' + localStorage.getItem("token");

  public imageSmall: string;
  public imageLarge: string;

  public urlCargarImagenes: string;
  constructor(
    private formBuilder: FormBuilder,
    private categoriaService: CategoriaArticuloService,
    private marcaService: MarcaArticuloService,
    private route: ActivatedRoute,
    private router: Router,
    private sharedService: SharedService,
    private codigobarraService: CodigobarraService,
    private productodetalleServiceService: ProductodetalleServiceService


  ) { }

  ngOnInit() {

   
    this.urlImage();

    this.sub = this.route.params.subscribe(
      params => {
        this.id = +params['id'];

      }
    );

    this.buildForm();
    this.getUnidadmedida();
  }

  urlImage() {
    this.urlCargarImagenes = this.productodetalleServiceService.getUrlUploadImage();
    console.log(this.urlCargarImagenes);

  }

  goBack() {

    this.router.navigate(['ProductoComponent']);
  }


  buildForm() {

    this.productoForm = this.formBuilder.group({
      idproducto: [this.productoModel.idproducto],
      dscproducto: [this.productoModel.dscproducto, Validators.required],
      dscproductocorto: [this.productoModel.dscproductocorto, Validators.required],
      unidadmedida: [this.productoModel.unidadmedida, Validators.required],
      categoria: [this.productoModel.categoria, Validators.required],
      marca: [this.productoModel.marca, Validators.required],
      precio1: [this.productoModel.precio1, Validators.required],
      precio2: [this.productoModel.precio2],
      precio3: [this.productoModel.precio3],
      stockminimo: [this.productoModel.stockminimo, Validators.required],
      codigobarras: [this.productoModel.codigobarras == null ? '' : this.productoModel.codigobarras],
      activo: [this.productoModel.activo],
      exigevencimiento: [this.productoModel.exigevencimiento],
      exigelote: [this.productoModel.exigelote]


    });


  }

  save() {

    let build = this.productoForm;
    this.productoModel = build.getRawValue();
    if (this.productoModel.activo)
      this.productoModel.activo = 1;
    else
      this.productoModel.activo = 0;

    if (this.productoModel.exigelote)
      this.productoModel.exigelote = 1;
    else
      this.productoModel.exigelote = 0;

    if (this.productoModel.exigevencimiento)
      this.productoModel.exigevencimiento = 1;
    else
      this.productoModel.exigevencimiento = 0;



    this.sharedService.save(this.productoModel, "producto", "save")
      .subscribe(
      res => {
        this.msgPopup = [];
        this.msgPopup.push({ severity: 'success', summary: 'Aviso', detail: 'Registro Grabado !' });

        //this.productoModel.idproducto = res.idproducto;

        //build.controls['idproducto'].setValue(res.idproducto);


      }
      )

  }

  getUnidadmedida() {
    this.sharedService.getAll("unidadmedida", "getall")
      .subscribe(
      res => {
        //this.unidadmedidasModel = res.data;
        if (this.id > 0) {
          this.edit(this.id)
        } else {
          this.productoModel = new ProductoModel();
          this.buildForm();

        }

      }
      )

  }


  edit(id) {

    this.sharedService.findById(id, "producto", "findbyid")
      .subscribe(
      result => {
        //this.productoModel = result.data;
        debugger;
        this.buildForm();
        this.getImage(id, "small");
      },
      error => { },
      () => {

      }
      );
  }




  agregarCodigoBarra(e) {
    if (this._codigobarra != "") {

      let codigobarraModel = new CodigobarraModel();

      codigobarraModel.codigo = this._codigobarra;

      this._codigobarra = "";

      this.productoForm.controls["codigobarras"].value.push(codigobarraModel);


    }
  }

  searchCategoria(event) {

    let query = event.query;

    if (query == undefined) {
      query = "";
    }
    this.categoriaService.getCategoriaForDsc(query)
      .subscribe(
  /*     res => {
        this.categoriasModel = res.data;
        this.productoModel.categoria = this.categoriaModel;


      } */
      )
  }

  handleDropdownClickCategoria(event) {
    this.categoriasModel = [];

    //mimic remote call
    setTimeout(() => {
      this.searchCategoria("");
    }, 100)
  }

  searchMarca(event) {
    let query = event.query;

    if (query == undefined) {
      query = "";
    }
    this.marcaService.getMarcaForDsc(query)
      .subscribe(
      res => {
        this.marcasModel = res;
        this.productoModel.marca = this.marcaModel;

      }
      )
  }

  handleDropdownClickMarca(event) {
    this.marcasModel = [];

    //mimic remote call
    setTimeout(() => {
      this.searchMarca("");
    }, 100)
  }

  generaCodigobarra() {
    let codigo = this.productoForm.controls["idproducto"].value;
    this.productodetalleServiceService.generaCodigobarra(codigo)
      .subscribe(
      result => {
        //this._codigobarra = result.data;
      }
      )

  }

  onBeforeUpload(event) {

    debugger;
    event.xhr.setRequestHeader("Authorization", 'Bearer ' + localStorage.getItem("token"));
    event.formData.append('idproducto', this.productoForm.controls["idproducto"].value);

  }
  onUpload(event) {
    this.getImage(this.productoForm.controls["idproducto"].value, "small");

  }

  getImage(idproducto, imageSize) {

    if (!idproducto) {
      return;
    }
    let src = "";
    this.productodetalleServiceService.getImage(idproducto, imageSize)
      .subscribe(
      result => {
      /*   src = result.data;


        if (result.data.length > 0) {
          let str = 'data:image/jpeg;base64,' + result.data[0];
          switch (imageSize) {
            case 'small':
              this.imageSmall = str;
              break;
            case 'large':
              this.imageLarge = str;
              break;

            default:
              // code...
              break;
          }
        } */

      },
      err => { console.log("error... al mostrar imagen...") }
      , () => { console.log("completo subid ") }
      );
  }


 



}
