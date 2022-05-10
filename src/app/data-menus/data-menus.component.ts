import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-menus',
  templateUrl: './data-menus.component.html',
  styleUrls: ['./data-menus.component.scss'],
  host: {class:'datamenus-comp'}
})
export class DataMenusComponent implements OnInit {
  datamenus = [
    {id:'penjualan', title:'Penjualan', link:['/data/penjualan'], svg:'./assets/svg/penjualan.svg', cetak:'aktif', lunas:'aktif'},
    {id:'pembayaran', title:'Pembayaran', link:['/data/pembayaran'], svg:'./assets/svg/pembayaran.svg', cetak:'aktif', lunas:''},
    {id:'laporan', title:'Laporan', link:['/data/laporan'], svg:'./assets/svg/laporan.svg', cetak:'', lunas:''},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
