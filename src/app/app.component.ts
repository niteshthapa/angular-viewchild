import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import {ChildcomponentComponent} from './childcomponent/childcomponent.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('nameid') nameid:ElementRef;
  @ViewChild('box') box:ElementRef;
  @ViewChild(ChildcomponentComponent) ChildcomponentComponent:ChildcomponentComponent
  
  ngAfterViewInit(){
    console.log(this.ChildcomponentComponent)
  }
  submitForm(){
    console.log(this.nameid)
    this.nameid.nativeElement.value ="update value is Nitesh";
  }
  changeBg(){
    console.log(this.nameid)
    this.box.nativeElement.style.backgroundColor = 'red';
  }
  chageChildBgColor(){
    this.ChildcomponentComponent.changeBgColor()
  }
}
