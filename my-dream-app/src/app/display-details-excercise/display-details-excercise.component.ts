import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-display-details-excercise',
  templateUrl: './display-details-excercise.component.html',
  styleUrls: ['./display-details-excercise.component.css']
})
export class DisplayDetailsExcerciseComponent implements OnInit {
  password = '';
  show = false;
  count = 0;
  showingTime = 2000;
  //interval: NodeJS.Timeout;

  constructor() { }

  ngOnInit(): void {
  }

  showOnClick(event){
    this.password = 'pippo123';
    this.count++;
    this.showingTime = 2000 + this.count*1000;
    this.show = true;

    setTimeout( () => {
      this.show = false; 
      //clearInterval(this.interval);
    }, this.showingTime);

    
    /*this.interval = setInterval(() => {
      if(this.showingTime > 0) {
        this.showingTime-=1000;
      } else {
        this.show = false; 
        this.showingTime = 2000 + this.count*1000;
      }
    },1000)*/
  
    
  }

}
