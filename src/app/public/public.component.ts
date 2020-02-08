import { Component, OnInit, Input, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.scss']
})

export class PublicComponent implements OnInit {

  @Input() ngStyle;

  constructor() {
    // element.nativeElement.style.backgroundSize = 'auto';
  }

  @HostListener('load', ['$event.target'])

  loadHandler(event){

  }
  

  ngOnInit() {
   
  }
}
