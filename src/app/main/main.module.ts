import { PanelMenuModule } from 'primeng/primeng';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainComponent } from './main/main.component';
import { MenuComponent } from './menu/menu.component';
import { MenuModule } from "primeng/primeng";
import { SharedModule } from '../shared/shared.module';
import { ConfigService } from '../shared/config.service';
import { UserIdleModule } from 'angular-user-idle';
import { FooterComponent } from './footer/footer.component';



const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'home',
        loadChildren: './../home/home.module#HomeModule'
      },
      {
        path: 'about',
        loadChildren: './../about/about.module#AboutModule'

      },
      //ALMACEN
      {
        path: 'menu-almacen-ingreso',
        loadChildren: '../almacen-ingreso/almacen-ingreso.module#AlmacenIngresoModule'

      },
      {
        path: 'menu-almacen-salida',
        loadChildren: '../almacen-salida/almacen-salida.module#AlmacenSalidaModule'

      },
      {
        path: 'menu-almacen-kardex',
        loadChildren: '../kardex/kardex.module#KardexModule'

      },
      {
        path: 'menu-periodoalmacen',
        loadChildren: '../periodoalmacen/periodoalmacen.module#PeriodoalmacenModule'

      },
      //Menu ventas
      {
        path: 'menu-ventas',
        loadChildren: '../ventas/ventas.module#VentasModule'

      },
      //Menu Maestos 
      {
        path: 'menu-productos',
        loadChildren: '../producto/producto.module#ProductoModule'

      },
      {
        path: 'menu-proveedorcliente',
        loadChildren: '../proveedorcliente/proveedorcliente.module#ProveedorclienteModule'

      },
      {
        path: 'menu-almacen',
        loadChildren: '../almacen/almacen.module#AlmacenModule'

      },
      {
        path: 'menu-unidadmedida',
        loadChildren: '../unidadmedida/unidadmedida.module#UnidadmedidaModule'

      },
      {
        path: 'menu-categoria',
        loadChildren: '../categoria-articulo/categoria-articulo.module#CategoriaArticuloModule'

      },
      {
        path: 'menu-marca',
        loadChildren: '../marca-articulo/marca-articulo.module#MarcaArticuloModule'

      },
      {
        path: 'menu-motivo-ingreso',
        loadChildren: '../motivo-ingreso/motivo-ingreso.module#MotivoIngresoModule'
      },
      {
        path: 'menu-motivo-salida',
        loadChildren: '../motivo-salida/motivo-salida.module#MotivoSalidaModule'
      }
      ,

      {
        path: 'menu-usuario',
        loadChildren: '../usuario/usuario.module#UsuarioModule'
      }
      ,


      {
        path: 'menu-perfil',
        loadChildren: '../perfil/perfil.module#PerfilModule'
      }
      ,

      {
        path: 'menu-empleado',
        loadChildren: '../empleado/empleado.module#EmpleadoModule'
      }
      ,

      //Menu operaciones
      {
        path: 'registrarfacturacompra',
        loadChildren: './../compra/compra.module#CompraModule'

      },
      //  { path: '**', redirectTo : '' }

      //Menu configuracion
      {
        path: 'menu-configuracion-punto-de-venta',
        loadChildren: './../punto-de-venta/punto-de-venta.module#PuntoDeVentaModule'
      },

      //Qaliwarma
      {
        path: 'menu-qaliwarma-catalogo-producto',
        loadChildren: '../qaliwarma/catalogo-producto/catalogo-producto.module#CatalogoProductoModule'
      },

         /* centros educativos*/
         {
          path: 'menu-qaliwarma-centros-educativos',
          loadChildren: '../qaliwarma/requerimiento-volumen-001/volumen-requerimiento-001.module#VolumenRequerimiento001Module'
        },

      /* rutas de distribucion */
      {
        path: 'menu-qaliwarma-ruta-distribucion',
        loadChildren: '../qaliwarma/ruta-distribucion/ruta-distribucion.module#RutaDistribucionModule'
      },

      /* Actualizacion Nro de Guia */

      
      {
        path: 'menu-qaliwarma-actualiza-guia',
        loadChildren: '../qaliwarma/guia-remision/guia-remision.module#GuiaRemisionModule'
      },

      

      /* Empleado Distribuidor */
      {
        path: 'menu-qaliwarma-empleado-distribuidor',
        loadChildren: '../qaliwarma/empleado-distribuidor/empleado-distribuidor.module#EmpleadoDistribuidorModule'
      },


      {
        path: 'menu-qaliwarma-catalogo-item-anno',
        loadChildren: '../qaliwarma/catalogo-item-anno/catalogo-item-anno.module#CatalogoItemAnnoModule'
      },

      /* Impresion de guias */
      {
        path: 'menu-qaliwarma-guia-remision',
        loadChildren: '../qaliwarma/guia-remision/guia-remision.module#GuiaRemisionModule'
       
      },

      
      {
        path: 'menu-qaliwarma-catalogo-item-anno',
        loadChildren: '../qaliwarma/catalogo-item-anno/catalogo-item-anno.module#CatalogoItemAnnoModule'
      },
      //procesos qaliwarma
      {
        path : 'menu-qaliwarma-proceso-cargar-info',
        loadChildren : '../qaliwarma//procesos/cargar-info/cargar-info.module#CargarInfoModule'
      }
      ,
      {
        path : 'menu-qaliwarma-proceso-calcular-volumen',
        loadChildren : '../qaliwarma//procesos/calcular-volumen/calcular-volumen.module#CalcularVolumenModule'
      }
      ,
      //Generar excel peso 
      {
        path : 'menu-qaliwarma-proceso-generar-excel-peso',
        loadChildren : '../qaliwarma/procesos/generar-excel-peso/generar-excel-peso.module#GenerarExcelPesoModule'
      },
      {
        path : 'menu-qaliwarma-proceso-generar-excel',
        loadChildren : '../qaliwarma//procesos/generar-excel/generar-excel.module#GenerarExcelModule'
      },
      {
        path : 'menu-qaliwarma-proceso-generar-guias',
        loadChildren : '../qaliwarma/procesos/generar-guias/generar-guias.module#GenerarGuiasModule'
      }
      ,
      //
    

      // *****************      qaliwarma consultas  *************************

     {
        path: 'menu-qaliwarma-consulta-control-despacho',
        loadChildren: '../qaliwarma/consultas/control-despacho/control-despacho.module#ControlDespachoModule'
      },

      //consulta Valorizacion
      {
        path: 'menu-qaliwarma-consulta-valorizacion',
        loadChildren: '../qaliwarma/consultas/valorizacion/valorizacion.module#ValorizacionModule'
      },

      // qaliwarma eliminar calculo
      {
        path: 'menu-qaliwarma-proceso-eliminar-calculo',
        loadChildren: '../qaliwarma/procesos/eliminar-calculo/eliminar-calculo.module#EliminarCalculoModule'
      },

      //Parametros /////////////////////////////////////////////////////////////////////////////////
      {
        path: 'menu-qaliwarma-punto-partida',
        loadChildren: '../qaliwarma/punto-partida/punto-partida.module#PuntoPartidaModule'
      },
      {
        path: 'menu-qaliwarma-vehiculo',
        loadChildren: '../qaliwarma/vehiculo/vehiculo.module#VehiculoModule'
      },
      {
        path: 'menu-qaliwarma-chofer',
        loadChildren: '../qaliwarma/chofer/chofer.module#ChoferModule'
      },
      {
        path: 'menu-qaliwarma-transportista',
        loadChildren: '../qaliwarma/transportista/transportista.module#TransportistaModule'
      },
      {
        path: 'menu-qaliwarma-monto-contratado',
        loadChildren: '../qaliwarma/monto-contratado/monto-contratado.module#MontoContratadoModule'
      },
      {
        path: 'menu-qaliwarma-entrega-por-item',
        loadChildren: '../qaliwarma/entrega-por-item/entrega-por-item.module#EntregaPorItemModule'
      }

    ]
  },

  {
    path: 'main',
    component: MainComponent,


  }





];
@NgModule({
  imports: [
    CommonModule,
    MenuModule, PanelMenuModule,
    SharedModule,
    RouterModule.forChild(routes),
    UserIdleModule.forRoot({idle: 600, timeout: 300, ping: 120})
  ],
  declarations: [MainComponent, MenuComponent, FooterComponent],
  providers: [ConfigService]

})
export class MainModule { }
