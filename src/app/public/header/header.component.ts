import { Component, OnInit, ElementRef, ViewChild, AfterViewInit, Input, Directive} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})


export class HeaderComponent implements AfterViewInit {
  public imageClass = " ";
  public popClass = " ";
  public popClass2 = " ";

  ngAfterViewInit(){
    // console.log(this.header);
    setTimeout(() => {
      this.imageClass = "scaledImage"; 
    }, 1000);
    setTimeout(() => {
      this.popClass = "StartPopMessageFirst"; 
      setTimeout(() => {
        this.popClass2 = "StartPopMessageSecond"; 
      }, 1000);
    }, 1000);
  }
}