import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-child-three',
  templateUrl: './child-three.component.html',
  styleUrls: ['./child-three.component.css']
})
export class ChildThreeComponent implements OnInit {
  
  message: string;
  name= 'Diana';

  constructor() { }

  ngOnInit(): void {
  }

  greetDiana() {
    alert('Ohayo Diana Senpai !!')
  }

}