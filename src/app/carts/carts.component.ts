import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.scss'],
  host:{class:'carts-comp'},
})
export class CartsComponent implements OnInit {
  keranjangs = [
    { img: './assets/img/tile-1.jpg', title: 'Keramik Biru Corak', sku: 'TLKR01K1001', price: 20000, qty: 100},
    { img: './assets/img/tile-3.jpg', title: 'Keramik Corak Bunga', sku: 'TLKR01K3001', price: 23000, qty: 1000},
    { img: './assets/img/tile-5.jpg', title: 'Keramik Biru Lingkaran', sku: 'TLKR01KS001', price: 27000, qty: 1000},
    { img: './assets/img/tile-6.jpg', title: 'Keramik Biru Diamond', sku: 'TLKR01KS001', price: 27000, qty: 1000},
    { img: './assets/img/tile-rock-1.jpg', title: 'Keramik Corak Batu', sku: 'TLKR01KS001', price: 27000, qty: 500},
    { img: './assets/img/tile-rock-2.jpg', title: 'Corak Batu', sku: 'TLKR01KS001', price: 27000, qty: 200},
    { img: './assets/img/tile-rock-3.jpg', title: 'Keramik Corak Batu Hitam', sku: 'TLKR01KS001', price: 27000, qty: 100},
    { img: './assets/img/tile-rock-4.jpg', title: 'Keramik Corak Batu Hijau', sku: 'TLKR01KS001', price: 27000, qty: 500},
    { img: './assets/img/tile-rock-5.jpg', title: 'Keramik Ungu Diamond', sku: 'TLKR01KS001', price: 27000, qty: 300},
    { img: './assets/img/tile-rock-7.jpg', title: 'tile-4', sku: 'TLKR01KS001', price: 27000, qty: 500},
    { img: './assets/img/tile-rock-8.jpg', title: 'tile-4', sku: 'TLKR01KS001', price: 27000, qty: 250},
    { img: './assets/img/tile-rock-9.jpg', title: 'tile-4', sku: 'TLKR01KS001', price: 27000, qty: 500},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
