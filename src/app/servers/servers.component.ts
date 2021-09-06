import { Component, OnInit } from '@angular/core';

@Component({
  //selector: 'app-servers',
  //selector: '[app-servers]',
  selector: '.app-servers',
  /* template: `<app-server></app-server>
             <app-server></app-server>`, */
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreatedStatus = 'Server not created!';
  serverName ='initial value';

  constructor() { 
    setTimeout(() => {
        this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreatedStatus = `Server created!! and server name is ${this.serverName}`;
  }

  onUpdateServerName(event: Event){
      this.serverName = (<HTMLInputElement>event.target).value;
  }
}
