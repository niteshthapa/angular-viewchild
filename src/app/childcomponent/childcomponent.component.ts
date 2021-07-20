import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-childcomponent',
  templateUrl: './childcomponent.component.html',
  styleUrls: ['./childcomponent.component.css']
})
  export class ChildcomponentComponent   {
    @ViewChild('childbox') childbox:ElementRef;
  constructor() { }

 
  changeBgColor(){
    this.childbox.nativeElement.classList.add('bgRed');
  }
}
