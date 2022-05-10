import {Component, Input, OnInit, TemplateRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  host:{class:'menu-comp'},
})
export class MenuComponent implements OnInit {
  @Input()
  menu:any;

  constructor() { }

  ngOnInit(): void {
  }

}
