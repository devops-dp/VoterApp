import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Link } from '../link/link.component';
@Component({
  selector: 'app-add-link',
  templateUrl: './add-link.component.html',
  styleUrls: ['./add-link.component.scss']
})
export class AddLinkComponent implements OnInit {
  @Output()increm: EventEmitter<Link>;
  constructor() {
    this.increm = new EventEmitter();
   }

  ngOnInit() {
  }

  addLink(title: HTMLInputElement, link: HTMLInputElement): void{
    this.increm.emit(new Link(title.value, link.value));
    title.value = '';
    link.value = '';
  }

}
