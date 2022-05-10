import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
  host: {class:'filter-comp'},
})
export class FilterComponent implements OnInit {
  @Input()
  category:any;
  constructor() { }

  ngOnInit(): void {
  }

}
