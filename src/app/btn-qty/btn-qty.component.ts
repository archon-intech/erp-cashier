import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-btn-qty',
  templateUrl: './btn-qty.component.html',
  styleUrls: ['./btn-qty.component.scss'],
  host:{class:"btn-qty-comp"}
})
export class BtnQtyComponent implements OnInit {
  @Input()
  qty!:number;

  constructor() { }

  ngOnInit(): void {
  }

  increase(){
    this.qty++;
  }
  decrease(){
    this.qty--;
  }
}
