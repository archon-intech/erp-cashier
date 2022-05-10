import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
  host:{class:'kategori-comp'},
})
export class CategoriesComponent implements OnInit {
  kategoris = [
    {title:'Lantai', status:'aktif'},
    {title:'Pintu', status:''},
    {title:'Lampu', status:''},
    {title:'Lain-lain', status:''},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
