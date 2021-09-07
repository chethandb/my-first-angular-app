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
  serverName = 'Server';
  serverCreated = false;
  servers = ['TestServer1', 'TestServer2'];

  constructor() { 
    // setTimeout(() => {
    //     this.allowNewServer = true;
    // }, 2000);
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreated = true;
    let sname = this.serverName;
    this.servers.push(this.serverName);
    this.serverCreatedStatus = `Server created!! and server name is ${sname}`;
    this.serverName = '';
  }

  onUpdateServerName(event: Event){
      this.serverName = (<HTMLInputElement>event.target).value;
  }
}
