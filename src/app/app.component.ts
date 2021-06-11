import { ChildComponent } from './child/child.component';
import { AfterViewInit, Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  userLoggedIn = true;
  @ViewChild(ChildComponent) childComponentRef: ChildComponent;

  ngAfterViewInit() {
    this.childComponentRef.message = "Message from parent component"
  }
}
