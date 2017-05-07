import { Component, OnInit, Input } from '@angular/core';

enum LOADER_TYPE {
  DOUBLE_PULSE
};

@Component({
  selector: 'app-loader',
  templateUrl: './app-loader.component.html',
  styleUrls: ['./app-loader.component.scss']
})
export class AppLoader implements OnInit {
  @Input()type: string;
  private code: number;
  constructor() {
   }

  ngOnInit() {
  }

}