import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
  styles:[`
  .whitClass {
    color:white;
  }
  `]
})
export class ServersComponent implements OnInit {
  allowServer = false;
  onCreated = "no server created";
  values= '' ;
  testIf= false;
  logItem = [];

  servicse = [ 'no server created', 'no server created2' ]
  constructor() { 
  setTimeout(() => {
    this.allowServer=true;
  }, 2000);

  }

  ngOnInit() {
  }

  oncreated(){
   this.testIf=true;
    this.onCreated="now server created"
    this.servicse.push(this.onCreated);
    this.logItem.push (new Date())
  }

  accessValue(e:any){

    this.values = e.target.value;
  }

}
