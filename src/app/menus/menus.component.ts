import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.scss'],
  host:{class:'menus-comp'},
})
export class MenusComponent implements OnInit {
  menus = [
    {id:'kasir', title:'Kasir', link:[''], svg:'./assets/svg/kasir.svg', status:'aktif'},
    {id:'data', title:'Data', link:['/data'], svg:'./assets/svg/data.svg', status:''},
    {id:'akun', title:'Akun', link:['/akun'], svg:'./assets/svg/akun.svg', status:''},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
