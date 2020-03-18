import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-shop',
  templateUrl: './header-shop.component.html',
  styleUrls: ['./header-shop.component.scss']
})
export class HeaderShopComponent implements OnInit {
  public list__category = "hideCategory";
  public overlayBackdrop = "hideBackdropShop";
  
  public selected__category = "All";
  constructor() { }

  ngOnInit() {
  }
  toogleList__category() {
    if (this.list__category == "hideCategory"){
      this.list__category = "showCategory";
      this.overlayBackdrop = "showBackdropShop";
    }else{
      this.list__category = "hideCategory";
      this.overlayBackdrop = "hideBackdropShop";
    }
  } 
  select__category(event){
    var target = event.target || event.srcElement || event.currentTarget;
    this.selected__category = target.textContent;
    document.getElementsByClassName("search")[0].querySelector("ul").getElementsByClassName("checked")[0].classList.remove("checked");
    target.classList = "checked";
    this.toogleList__category();
  }
}
