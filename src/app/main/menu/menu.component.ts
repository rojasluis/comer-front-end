import { MenuService } from '../shared/menu.service';
import { Component, OnInit } from '@angular/core';
import {MenuItem,PanelMenu,PanelMenuModule} from 'primeng/primeng';

@Component({
  selector: 'ad-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  providers : [ MenuService]
})
export class MenuComponent implements OnInit {

  private items: MenuItem[];  

  constructor(private menuService:MenuService) { }

  ngOnInit() {
    this.getAll();
    //this.getMenuExample();

  }

  getAll(){
    let sMenu;
    let len;
   /*  this.menuService.getAll()
      .subscribe(
          result =>{
            sMenu = result.data;

            let jMenu = JSON.parse(sMenu)

            this.items = jMenu;

          }
      ) */
      
  }

//   getMenuExample(){
//      this.items = [
//             {
//                 idmenu: '01',
//                 label: 'File',
//                 icon: 'fa-file-o',
//                 items: [{
//                         label: 'New', 
//                         icon: 'fa-plus',
//                         items: [
//                             {label: 'Project'},
//                             {label: 'Other', items:null},
                            
//                         ]
//                     },
//                     {
//                         label: 'Open',
//                         routerLink: ['home']
//                     },
//                     {   
//                         label: 'Quit',
//                         routerLink: ['about']
//                     }
//                 ]
//             },
//             {
//                 label: 'Edit',
//                 icon: 'fa-edit',
//                 items: [
//                     {label: 'Undo', icon: 'fa-mail-forward'},
//                     {label: 'Redo', icon: 'fa-mail-reply'}
//                 ]
//             },
//             {
//                 label: 'Help',
//                 icon: 'fa-question',
//                 items: [
//                     {
//                         label: 'Contents'
//                     },
//                     {
//                         label: 'Search', 
//                         icon: 'fa-search', 
//                         items: [
//                             {
//                                 label: 'Text', 
//                                 items: [
//                                     {
//                                         label: 'Workspace'
//                                     }
//                                 ]
//                             },
//                             {
//                                 label: 'File'
//                             }
//                     ]}
//                 ]
//             },
//             {
//                 label: 'Actions',
//                 icon: 'fa-gear',
//                 items: [
//                     {
//                         label: 'Edit',
//                         icon: 'fa-refresh',
//                         items: [
//                             {label: 'Save', icon: 'fa-save'},
//                             {label: 'Update', icon: 'fa-save'},
//                         ]
//                     },
//                     {
//                         label: 'Other',
//                         icon: 'fa-phone',
//                         items: [
//                             {label: 'Delete', icon: 'fa-minus'}
//                         ]
//                     }
//                 ]
//             },
//             {
//               label : 'Usuarios',
//               icon : 'fa-user',
//               items : [
//                 {
//                   label : 'Usuario'
                 
//                 },                  
//                 {
//                   label : 'Perfiles'
                 
//                 },
//                 {
//                   label : 'Accesos'
//                 }
//               ]
//             }
//         ];      
//   }

}
