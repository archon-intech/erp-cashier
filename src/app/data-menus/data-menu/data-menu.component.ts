import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-data-menu',
  templateUrl: './data-menu.component.html',
  styleUrls: ['./data-menu.component.scss'],
  host: {class:"datamenu-comp"}
})
export class DataMenuComponent implements OnInit {
  @Input()
  datamenu:any;

  constructor() { }

  ngOnInit(): void {
  }

}
