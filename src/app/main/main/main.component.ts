import { Component, OnInit } from '@angular/core';
import * as jquery from 'jquery';
import { UserIdleService } from 'angular-user-idle';
import swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';

declare const $:any;

@Component({
  selector: 'ad-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public datos:any = {autor:'Ing. Carlos A. Rojas Casique',  contacto : '954060687', actualizacion : '22/05/2018 v6.0.1-4'}
  public timeOut = 0;
  public showTimeOut = false;
  constructor( private userIdle: UserIdleService, private router:Router) { }

  ngOnInit() {
      //Start watching for user inactivity.
      this.userIdle.startWatching();
    
      // Start watching when user idle is starting.
      this.userIdle.onTimerStart().subscribe(count => {
        this.timeOut = 300 - count;
        this.showTimeOut = true;
        //console.log(count)
        });
      
    
      // Start watch when time is up.
      this.userIdle.onTimeout().subscribe(() => {
        //console.log('Time is up!');
        this.showTimeOut = false;
        this.closeSeccion();
      } );
  
  }

  stop() {
    this.userIdle.stopTimer();
  }
 
  stopWatching() {
    this.userIdle.stopWatching();
  }
 
  startWatching() {
    this.userIdle.startWatching();
  }
 
  restart() {
    
    this.userIdle.resetTimer();
    this.showTimeOut = false;
    
  }
  closeSeccion(){
    localStorage.clear();
    this.router.navigate(['/login']);
    swal('Su session fue cerrada')
  }
 
  onLoggedout() {

    localStorage.removeItem('currentUserName');
    localStorage.removeItem('token');
    localStorage.clear();
  }

  menutooggle(e){
    e.preventDefault();
   
    $('#wrapper').toggleClass("menuDisplayed");
    //$('#container_toggle').toogleClass("change");
  }

}
