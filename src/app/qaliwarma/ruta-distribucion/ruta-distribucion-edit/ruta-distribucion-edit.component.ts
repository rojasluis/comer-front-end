import { Component, OnInit } from '@angular/core';
import { CrudHttpClientServiceShared } from '../../../shared/servicio/crudHttpClient.service.shared';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { isUndefined } from 'util';
import { Subscription } from 'rxjs';
import { RutaDistribucionModel } from '../ruta-distribucion-model';
import { EmpleadoDistribuidorModel } from '../../empleado-distribuidor/empleado-distribuidor-model';
import swal from 'sweetalert2';
import { UtilitariosAdicse } from '../../../shared/servicio/utilitariosAdicse';
import { ChoferModel } from '../../chofer/chofer-model';
import { VehiculoModel } from '../../vehiculo/vehiculo-model';
import { ChoferService } from '../../chofer/chofer.service';
import { VehiculoService } from '../../vehiculo/vehiculo.service';


@Component({
  selector: 'app-ruta-distribucion-edit',
  templateUrl: './ruta-distribucion-edit.component.html',
  styleUrls: ['./ruta-distribucion-edit.component.css'],
  providers: [CrudHttpClientServiceShared, UtilitariosAdicse, ChoferService, VehiculoService]
})
export class RutaDistribucionEditComponent implements OnInit {

  isBuscador = false;
  flagRefreshReturn: boolean;
  id: number;
  rutaDistribucionForm: any;
  sub: any;
  show: boolean = true;
  public anno: number;
  public numeroEntrega: number;
  public rutaDistribucionModel: RutaDistribucionModel = new RutaDistribucionModel();
  public empleadoDistribuidor: EmpleadoDistribuidorModel = new EmpleadoDistribuidorModel();

  public choferModel: ChoferModel = new ChoferModel();
  public chofersModel: ChoferModel[];

  public vehiculoModel: VehiculoModel = new VehiculoModel();
  public vehiculosModel: VehiculoModel[];

  constructor(
    private activateRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private crudHttpClientServiceShared: CrudHttpClientServiceShared,
    private utilitariosAdicse: UtilitariosAdicse,
    private choferService: ChoferService,
    private vehiculoService: VehiculoService

  ) {

    this.sub = this.activateRoute.params.subscribe(
      params => {

        this.id = params['id'];

      }
    );

  }

  ngOnInit() {
    this.rutaDistribucionModel.empleadoDistribuidor = new EmpleadoDistribuidorModel();
    this.rutaDistribucionModel.chofer = new ChoferModel();
    this.rutaDistribucionModel.vehiculo = new VehiculoModel();

    let d = new Date();


    this.anno = parseInt(localStorage.getItem("anno"));
    this.rutaDistribucionModel.numeroEntrega = parseInt( localStorage.getItem("numeroEntrega"));



    if (this.id != 0) {
      this.edit();
    } else {
      this.rutaDistribucionModel.anno = d.getFullYear();
    }

    this.getChoferAll();
    this.getVehiculosAll();

    this.buildForm();

  }

  ocultarLista() {
    this.show = false;

  }

  eventBack(e) {
    this.show = true;
    if (!e) {

      return;
    }

    this.rutaDistribucionForm.get('empleadoDistribuidor').setValue(e);
    //this.rutaDistribucionModel.empleadoDistribuidor = e;
    //this.buildForm();
  }
  buildForm() {
    this.rutaDistribucionForm = this.formBuilder.group({
      idRutaDistribucion: [this.rutaDistribucionModel.idRutaDistribucion, Validators.required],
      dscRutaDistribucion: [this.rutaDistribucionModel.dscRutaDistribucion, Validators.required],
      anno: [this.anno, Validators.required],
      numeroEntrega: [this.rutaDistribucionModel.numeroEntrega, Validators.required],
      empleadoDistribuidor: this.formBuilder.group(this.rutaDistribucionModel.empleadoDistribuidor),
      chofer: [this.rutaDistribucionModel.chofer],
      vehiculo: [this.rutaDistribucionModel.vehiculo],
      rutaDistribucionDetalles: [null]

    })

  }

  compareFnChofer(t1: any, t2: any): boolean {
   
   
    if(t2.idChofer == null || isUndefined( t2.idChofer) || t1.idChofer == null || isUndefined( t1.idChofer))
      return;


    if (t1.idChofer === t2.idChofer) {
      return true;
    }

  }

  compareFnVehiculo(t1: any, t2: any): boolean {
  

    if (t1.idVehiculo === t2.idVehiculo || isUndefined(t2.idVehiculo) ) {
      return true;
    }

  }

  edit() {

    this.crudHttpClientServiceShared.edit(this.id, "rutaDistribucion", "edit").subscribe(

      res => {
       
        this.rutaDistribucionModel = new RutaDistribucionModel(res.idRutaDistribucion, res.dscRutaDistribucion, res.anno, res.numeroEntrega, res.empleadoDistribuidor,
          !isUndefined(res.chofer)?
          new ChoferModel(res.chofer.idChofer, res.chofer.dni, res.chofer.numeroBrevete, res.chofer.nombres):new ChoferModel()
          ,
          !isUndefined(res.vehiculo)?
          new VehiculoModel(res.vehiculo.idVehiculo, res.vehiculo.numeroPlaca, res.vehiculo.marcaVehiculo):new VehiculoModel());
        this.rutaDistribucionForm.setValue(this.rutaDistribucionModel);

        //this.buildForm();

      },
      error => console.log(error),
      () => {
        console.log(this.rutaDistribucionModel);
      }
    )


  }


  create() {
    let d = new Date();
    let dia = d.getDay().toString();
    let mes = d.getMonth().toString();
    let year = d.getFullYear().toString();

    this.rutaDistribucionForm.get('idRutaDistribucion').setValue(dia + mes + year + "-" + this.utilitariosAdicse.randomString());

    let dataform = JSON.stringify(this.rutaDistribucionForm.value);

    console.log(dataform)
    this.rutaDistribucionModel.idRutaDistribucion = dia + mes + year + "-" + this.utilitariosAdicse.randomString();
    this.rutaDistribucionModel.rutaDistribucionDetalles = [];
    this.crudHttpClientServiceShared.create(dataform, "rutaDistribucion", "create").subscribe(

      res => {
        this.rutaDistribucionModel = new RutaDistribucionModel(res.idRutaDistribucion, res.dscRutaDistribucion, res.anno, res.numeroEntrega, res.empleadoDistribuidor,
          !isUndefined(res.chofer)?
          new ChoferModel(res.chofer.idChofer, res.chofer.dni, res.chofer.numeroBrevete, res.chofer.nombres):new ChoferModel()
          ,
          !isUndefined(res.vehiculo)?
          new VehiculoModel(res.vehiculo.idVehiculo, res.vehiculo.numeroPlaca, res.vehiculo.marcaVehiculo):new VehiculoModel());

          this.rutaDistribucionForm.setValue(this.rutaDistribucionModel);
        this.flagRefreshReturn = true;
      },
      error => console.log(error),
      () => {
        swal({
          position: 'top-end',
          type: 'success',
          title: 'Registro Creado',
          showConfirmButton: false,
          timer: 1500
        })
      }
    )
  }

  update() {

    let dataform = JSON.stringify(this.rutaDistribucionForm.value);
    debugger;
    debugger;
    console.log(dataform);
    //this.rutaDistribucionModel.idRutaDistribucion = 
    this.crudHttpClientServiceShared.update(dataform, "rutaDistribucion", "update").subscribe(


      res => {
        this.rutaDistribucionModel = new RutaDistribucionModel(res.idRutaDistribucion, res.dscRutaDistribucion, res.anno, res.numeroEntrega, res.empleadoDistribuidor);
        //this.buildForm();
        this.flagRefreshReturn = true;
      },
      error => console.log(error),
      () => {
        swal({
          position: 'top-end',
          type: 'success',
          title: 'Registro Actualizado',
          showConfirmButton: false,
          timer: 1500
        })
      }
    )

  }

  getChoferAll() {
    this.choferService.getAll()
      .subscribe(
        res => {
          this.chofersModel = res.map(
            item => {
              return new ChoferModel(item.idChofer, item.dni, item.numeroBrevete, item.nombres)
            }
          )
        }
      )
  }


  getVehiculosAll() {
    this.vehiculoService.getAll()
      .subscribe(
        res => {
          this.vehiculosModel = res.map(
            item => {
              return new VehiculoModel(item.idVehiculo, item.numeroPlaca, item.marcaVehiculo);
            }
          )
        }
      )
  }

}
