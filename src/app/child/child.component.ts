import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  private _loggedIn: boolean;
  message: string;
  //intercept a change in the input property value and perform some operations
  get loggedIn(): boolean {
    return this._loggedIn;
  }

  @Input()
  set loggedIn(value: boolean) {
    this._loggedIn = value;
    if(value===true){
      this.message = 'Welcome Diana Senpai';
    }else {
      this.message = 'Gomenne Senpai, Please login';
    }

  }





  



  constructor() { }

  ngOnInit(): void {
  }

}
