import { Component, OnInit } from '@angular/core';
declare var require: any;
const Amplitude = require("../../../../../node_modules/amplitudejs/dist/amplitude.js");
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }
  public showGoTopClass = "hideWidget";
  ngOnInit() {
    window.onload = function () {
      let bandcampLinks = document.getElementsByClassName('bandcamp-link');

      for (var i = 0; i < bandcampLinks.length; i++) {
        bandcampLinks[i].addEventListener('click', function (e) {
          e.stopPropagation();
        });
      }


      let songElements = document.getElementsByClassName('song');

      for (var i = 0; i < songElements.length; i++) {
        /*
          Ensure that on mouseover, CSS styles don't get messed up for active songs.
        */
        songElements[i].addEventListener('mouseover', function () {
          this.style.backgroundColor = '#00A0FF';

          this.querySelectorAll('.song-meta-data .song-title')[0].style.color = '#FFFFFF';
          this.querySelectorAll('.song-meta-data .song-artist')[0].style.color = '#FFFFFF';

          if (!this.classList.contains('amplitude-active-song-container')) {
            this.querySelectorAll('.play-button-container')[0].style.display = 'block';
          }

          this.querySelectorAll('img.bandcamp-grey')[0].style.display = 'none';
          this.querySelectorAll('img.bandcamp-white')[0].style.display = 'block';
          this.querySelectorAll('.song-duration')[0].style.color = '#FFFFFF';
        });

        /*
          Ensure that on mouseout, CSS styles don't get messed up for active songs.
        */
        songElements[i].addEventListener('mouseout', function () {
          this.style.backgroundColor = '#FFFFFF';
          this.querySelectorAll('.song-meta-data .song-title')[0].style.color = '#272726';
          this.querySelectorAll('.song-meta-data .song-artist')[0].style.color = '#607D8B';
          this.querySelectorAll('.play-button-container')[0].style.display = 'none';
          this.querySelectorAll('img.bandcamp-grey')[0].style.display = 'block';
          this.querySelectorAll('img.bandcamp-white')[0].style.display = 'none';
          this.querySelectorAll('.song-duration')[0].style.color = '#607D8B';
        });

        /*
          Show and hide the play button container on the song when the song is clicked.
        */
        songElements[i].addEventListener('click', function () {
          this.querySelectorAll('.play-button-container')[0].style.display = 'none';
        });
      }

      /*
        Initializes AmplitudeJS
      */
      Amplitude.init({
        "songs": [
          {
            "name": "Risin' High (feat Raashan Ahmad)",
            "artist": "Ancient Astronauts",
            "album": "We Are to Answer",
            "url": "../../../../assets/audio/1.mp3",
            "cover_art_url": "../../../../assets/audio/img/1.jpg"
          },
          {
            "name": "The Gun",
            "artist": "Lorn",
            "album": "Ask The Dust",
            "url": "../../../../assets/audio/2.mp3",
            "cover_art_url": "../../../../assets/audio/img/2.jpg"
          },
          {
            "name": "Anvil",
            "artist": "Lorn",
            "album": "Anvil",
            "url": "../../../../assets/audio/3.mp3",
            "cover_art_url": "../../../../assets/audio/img/3.jpg"
          },
          {
            "name": "I Came Running",
            "artist": "Ancient Astronauts",
            "album": "We Are to Answer",
            "url": "../../../../assets/audio/4.mp3",
            "cover_art_url": "../../../../assets/audio/img/4.jpg"
          }
        ]
      });

    }
  }
  onScroll() {
    if (window.scrollY < 1000) {
      this.showGoTopClass = "hideWidget";
    } else if (window.scrollY != undefined) {
      this.showGoTopClass = "showWidget";
    }
  }
  goTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
