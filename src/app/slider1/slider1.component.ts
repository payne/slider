import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-slider1',
  templateUrl: './slider1.component.html',
  styleUrls: ['./slider1.component.css']
})
export class Slider1Component implements OnInit {
  value: number;
  enabled: boolean;

  constructor() { }

  ngOnInit(): void {
    this.value=10;
    this.enabled=true;
  }

  change() {
    console.log(`change function value=${this.value}`);
  }


}