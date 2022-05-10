import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss'],
  host:{class:"data-comp"},
})
export class DataComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
