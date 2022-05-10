import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  host:{class:'cart-comp'},
})
export class CartComponent implements OnInit {
  @Input()
  cart:any;

  constructor() { }

  ngOnInit(): void {
  }

}
