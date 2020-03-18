import { Component, OnInit } from '@angular/core';
import { timeout } from 'rxjs/internal/operators';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  constructor() { }
  public viewMoreOverlayBackdrop = "hideBackdrop";
  public showViewMore = "hide_viewMoreOneWork";
  public shareButton__viewMore = "showShareButton";
  public shareListener = "false";

  toogle_viewMore() {
    if (this.viewMoreOverlayBackdrop == "hideBackdrop") {
      this.viewMoreOverlayBackdrop = "showBackdrop";
      this.showViewMore = "show_viewMoreOneWork";
    } else {
      this.viewMoreOverlayBackdrop = "hideBackdrop";
      this.showViewMore = "hide_viewMoreOneWork";
    }
  }
  openWork(event) {
    if (this.shareListener === "true") {
      console.log("worked true!");
    } else if (this.shareListener === "false") {
      // Open ViewMoreWork Block
      let description = event.target.getElementsByClassName("data_oneWork")[0].querySelector("p");
      let audio = event.target.getElementsByClassName("data_oneWork")[0].querySelector("audio");
      let name = event.target.querySelector(".name").querySelector("span");
      let share = event.target.querySelector(".name").querySelector("share");
      let bgImgUrl = event.target.style["background-image"];
      const viewMore = document.querySelector(".viewMore_oneWork");

      viewMore.querySelector(".name span").textContent = name.textContent;
      viewMore.querySelector(".description p").textContent = description.textContent;
      viewMore.querySelector("img").src = bgImgUrl.slice(5, bgImgUrl.length - 2);
      viewMore.querySelector("audio").src = audio.src;

      this.toogle_viewMore();
      let allWorks = event.target.parentNode.parentNode.querySelectorAll(".oneWork");
      let clickedWork = event.target;
      console.log(allWorks);

      for (let i = 0; i < allWorks.length; i++) {
        if (allWorks[i].isEqualNode(clickedWork)) {
          location.hash = "#" + i;
        }
      }


    } else {
      console.log("worked else!");
    }
    this.shareListener = "false";
  }
  share() {
    this.shareListener = "true";
  }
  toogleShareButtons__ViewMore() {
    if (this.shareButton__viewMore == "hideShareButton") {
      this.shareButton__viewMore = "showShareButton";
    } else {
      this.shareButton__viewMore = "hideShareButton";
    }
  }
  showShareButtons__ViewMore() {
    this.shareButton__viewMore = "hideShareButton";
  }
  hideShareButtons__ViewMore() {
    this.shareButton__viewMore = "showShareButton";
  }
  showShareButtons__AllWorks(event) {
    let clickedWork = event.target.parentNode;
    clickedWork.querySelector(".shareButton").classList.add("hideShareButton");
    clickedWork.querySelector(".shareButton").classList.remove("showShareButton");
    clickedWork.querySelector(".share").classList.add("hideShareButton");
    clickedWork.querySelector(".share").classList.remove("showShareButton");
  }
  hideShareButtons__AllWorks(event) {
    let clickedWork = event.target.parentNode;
    clickedWork.querySelector(".shareButton").classList.add("showShareButton");
    clickedWork.querySelector(".shareButton").classList.remove("hideShareButton");
    clickedWork.querySelector(".share").classList.add("showShareButton");
    clickedWork.querySelector(".share").classList.remove("hideShareButton");
  }
  ngOnInit() {

    window.onload = function () {
      if (location.hash != "") {
        console.log(document.querySelectorAll(".oneWork")[location.hash.slice(1)]);
        document.querySelectorAll(".oneWork")[location.hash.slice(1)].click();
      }
      document.querySelector(".active").classList.remove("active");
      document.querySelectorAll("#menuShop .right li a")[2].classList.add("active");
    };

    function hideViewMore() {
      if (document.querySelector(".showBackdrop") != undefined) {
        let back: HTMLElement = document.querySelector(".showBackdrop") as HTMLElement;
        let hideback = document.querySelectorAll(".hideBackdrop");
        if (hideback.length == 0 || hideback.length == -1) {
          back.click();
        }
      }
    }
    document.onkeydown = function (evt) {
      var isEscape = false;
      if ("key" in evt) {
        isEscape = (evt.key === "Escape" || evt.key === "Esc");
      }
      if (isEscape) {
        hideViewMore();
      } else {
        // alert("blabla");
      }
    }

  }

}
