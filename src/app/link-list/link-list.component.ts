import { Component, OnInit, Input } from '@angular/core';
import { LinkComponent } from '../link/link.component';
@Component({
  selector: 'app-link-list',
  templateUrl: './link-list.component.html',
  styleUrls: ['./link-list.component.scss']
})
export class LinkListComponent implements OnInit {
  @Input()links: Array<LinkComponent>;
  constructor() {
   }

  ngOnInit() {
  }

}
