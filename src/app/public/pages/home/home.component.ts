import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }
  public showGoTopClass = "hideWidget";
  ngOnInit() {
  }
  onScroll(){
    if (window.scrollY<1000){
      this.showGoTopClass = "hideWidget";
    }else if(window.scrollY != undefined){
      this.showGoTopClass = "showWidget";
    }
  }
  goTop(){
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
