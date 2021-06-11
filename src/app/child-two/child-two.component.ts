import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child-two',
  templateUrl: './child-two.component.html',
  styleUrls: ['./child-two.component.css']
})
export class ChildTwoComponent implements OnChanges {

  @Input() logged: boolean;
  message: string;

  constructor() { }

  //ngOnChanges only works with the child component

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes); //angular calls ngOnChanges method whenever it detects changes to input properties of the component
    const loggedInValue = changes['logged'];
    if (loggedInValue.currentValue===true){
      this.message = 'Hola Diana Senpai';
    }else {
      this.message = 'Gomenne Diana Senpai!!';
    }
  }

}
