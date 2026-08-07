import { Component } from '@angular/core';
import { delay } from 'rxjs';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  texto2: String;

  constructor(){
    this.texto2 = "dois";
    this.lua();
  }


  lua(){
    for (let index = 0; index < 10; index++) {
        this.texto2 = String(index);
        delay(1000000);
    }
  }

}
