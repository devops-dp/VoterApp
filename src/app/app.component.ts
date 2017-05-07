import { Component } from '@angular/core';
import { Link } from './link/link.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';
  links: Array<Link>;
  constructor(){
    this.links = [new Link('Deepak','http://www.facebook.com/deepak.penaganti?'+Math.random())];
  }
  
  gotVal(link: Link){
    this.links.push(link);
  }
}
