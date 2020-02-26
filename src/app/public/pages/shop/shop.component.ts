import { Component, OnInit, ErrorHandler } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Beat } from './beat';
import { Observable } from 'rxjs';
import { Utils, result } from './utils';

const localUrl = 'assets/data/beats.json';
export var beats;
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})


export class ShopComponent implements OnInit {
  constructor(private http: HttpClient) {

  }
  public headers;
  getDataBeats(): Observable<HttpResponse<Beat[]>> {
    return this.http.get<Beat[]>(
      localUrl, { observe: 'response' });
  }
  getBeats(callback, params) {
    this.getDataBeats().subscribe(resp => {
      callback(resp, params);
    });
  }
  public countShowBitsTry = 0;
  showBeats() {
    if (result == undefined && this.countShowBitsTry < 10 || result.toString() == " " && this.countShowBitsTry < 10) {
      setTimeout(() => {
        this.showBeats();
      }, 200);
    } else {
      console.log(result);
      this.countShowBitsTry = 0;
    }
  }
  public filter__category = "hideCategory";
  public filterOverlayBackdrop = "hideBackdrop";
  public selected__filter = "Latest";
  toogleList__filter(){
    if (this.filter__category == "hideCategory"){
      this.filter__category = "showCategory";
      this.filterOverlayBackdrop = "showBackdrop";
    }else{
      this.filter__category = "hideCategory";
      this.filterOverlayBackdrop = "hideBackdrop";
    }
  }
  select__filter(event){
    var target = event.target || event.srcElement || event.currentTarget;
    this.selected__filter = target.textContent;
    document.getElementsByClassName("sortBy")[0].querySelector("ul").getElementsByClassName("checked")[0].classList.remove("checked");
    target.classList = "checked";
    this.toogleList__filter();
  }

  ngOnInit(): void {
    // this.getBits(Utils.getAllBeats, [""]);
    // this.showBits();
    this.getBeats(Utils.getBeatsById, ["P0002",]);
    this.showBeats();



  }

}
