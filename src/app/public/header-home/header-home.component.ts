import { Component, OnInit, ElementRef, ViewChild, AfterViewInit, Input, Directive} from '@angular/core';

@Component({
  selector: 'app-header-home',
  templateUrl: './header-home.component.html',
  styleUrls: ['./header-home.component.scss']
})


export class HeaderHomeComponent implements AfterViewInit {
  public imageClass = " ";
  public popClass = " ";
  public popClass2 = " ";

  ngAfterViewInit(){
    // console.log(this.header);
    setTimeout(() => {
      this.imageClass = "appearanceImage"; 
    }, 0);
    setTimeout(() => {
      this.imageClass = "scaledImage"; 
    }, 500);
    setTimeout(() => {
      this.popClass = "StartPopMessageFirst"; 
      setTimeout(() => {
        this.popClass2 = "StartPopMessageSecond"; 
      }, 1000);
    }, 1000);
  }
}