import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss']
})
export class LinkComponent implements OnInit {
  @Input()text: string;
  @Input()link: string;
  count: number;
  act: boolean;
  toggle: boolean;
  posTotal: number;
  negTotal: number;

  constructor() {
    //this.count = !this.count?0:this.count;
    this.posTotal = !this.posTotal?0:this.posTotal;
    this.negTotal = !this.negTotal?0:this.negTotal;
    this.count = this.posTotal - this.negTotal;
  }

  ngOnInit() {
  }

  newTab(link: string): void{
    window.open(link, '_blank');
  }

  proxyVote(b: boolean): void{
    if( b ){
      this.upVote();
    }
    else{
      this.downVote();
    }
    this.act = true;
    this.toggle = b;
    this.count = this.posTotal - this.negTotal;
  }

  upVote(): void{
    this.posTotal+=1;
    if( this.act ){
      this.negTotal-=1;
      //this.count+=2;
    }
    /*else{
      this.count+=1;
    }*/
  }

  downVote(){
    this.negTotal+=1;
    if( this.act ){
      this.posTotal-=1;
      //this.count-=2;
    }
    /*else{
      this.count-=1;
    }*/
  }
}

export class Link{
  text: string;
  link: string;
  constructor(text, link) {
    this.text = text ? text : 'No text provided';
    this.link = link ? link : 'No link provided';
   }
}