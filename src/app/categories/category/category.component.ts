import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
  host:{class:'kategori-comp'}
})
export class CategoryComponent implements OnInit {
  @Input()
  category:any;

  constructor() { }

  ngOnInit(): void {
  }

}
