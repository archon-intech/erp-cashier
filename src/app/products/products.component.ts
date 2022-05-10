import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  host: {class:'produks-comp'},
})
export class ProductsComponent implements OnInit {
  produks = [
    { img: './assets/img/tile-1.jpg', title: 'tile-1', sku: 'TLKR01K1001', brand: 'Brand : Brand A', price: 20000, quality: 'K1'},
    { img: './assets/img/tile-2.jpg', title: 'tile-2', sku: 'TLKR01K2002', brand: 'Brand : Brand A', price: 19000, quality: 'K2'},
    { img: './assets/img/tile-3.jpg', title: 'tile-3', sku: 'TLKR01K3001', brand: 'Brand : Brand A', price: 23000, quality: 'K3'},
    { img: './assets/img/tile-4.jpg', title: 'tile-4', sku: 'TLKR01KS001', brand: 'Brand : Brand A', price: 27000, quality: 'KS'},
    { img: './assets/img/tile-5.jpg', title: 'tile-4', sku: 'TLKR01KS001', brand: 'Brand : Brand A', price: 27000, quality: 'KS'},
    { img: './assets/img/tile-6.jpg', title: 'tile-4', sku: 'TLKR01KS001', brand: 'Brand : Brand A', price: 27000, quality: 'KS'},
    { img: './assets/img/tile-rock-1.jpg', title: 'tile-4', sku: 'TLKR01KS001', brand: 'Brand : Brand A', price: 27000, quality: 'KS'},
    { img: './assets/img/tile-rock-2.jpg', title: 'tile-4', sku: 'TLKR01KS001', brand: 'Brand : Brand A', price: 27000, quality: 'KS'},
    { img: './assets/img/tile-rock-3.jpg', title: 'tile-4', sku: 'TLKR01KS001', brand: 'Brand : Brand A', price: 27000, quality: 'KS'},
    { img: './assets/img/tile-rock-4.jpg', title: 'tile-4', sku: 'TLKR01KS001', brand: 'Brand : Brand A', price: 27000, quality: 'KS'},
    { img: './assets/img/tile-rock-5.jpg', title: 'tile-4', sku: 'TLKR01KS001', brand: 'Brand : Brand A', price: 27000, quality: 'KS'},
    { img: './assets/img/tile-rock-6.jpg', title: 'tile-4', sku: 'TLKR01KS001', brand: 'Brand : Brand A', price: 27000, quality: 'KS'},
    { img: './assets/img/tile-rock-7.jpg', title: 'tile-4', sku: 'TLKR01KS001', brand: 'Brand : Brand A', price: 27000, quality: 'KS'},
    { img: './assets/img/tile-rock-8.jpg', title: 'tile-4', sku: 'TLKR01KS001', brand: 'Brand : Brand A', price: 27000, quality: 'KS'},
    { img: './assets/img/tile-rock-9.jpg', title: 'tile-4', sku: 'TLKR01KS001', brand: 'Brand : Brand A', price: 27000, quality: 'KS'},
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

}
