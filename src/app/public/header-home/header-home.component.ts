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
  public buttonClass = " ";
  public shareClass = " ";
  hideShare(){
    this.shareClass = "hide";
  }
  showShare(){
    this.shareClass = "show";
  }
  ngAfterViewInit(){

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
        setTimeout(() => {
          this.buttonClass = "active"; 
        }, 1000);
      }, 1000);
    }, 1000);
  }
}