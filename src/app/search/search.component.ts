import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  host: {class:'search-comp'},
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
