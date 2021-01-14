import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})
export class UsernameComponent implements OnInit {

  username = ''
  bottoneStato = 'Disabilitato!'
  constructor() {
    
   }

  ngOnInit(): void {
  }

  emptyUsername(){
    if( !this.username ){
      this.bottoneStato = 'Disabilitato!';
      return true;
    }
    this.bottoneStato = 'Abilitato!'
    return false;
  }

  makeEmpty(event){
    alert("nome cancellato: " + this.username);
    this.username = '';
    this.bottoneStato = 'Disabilitato!';
  }

}
