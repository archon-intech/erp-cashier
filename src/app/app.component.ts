import {Component, OnInit} from '@angular/core';
import {interval, map, shareReplay, skip, Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  host: {class: 'app-comp'},
})
export class AppComponent implements OnInit {
  title = 'POS Kasir';

  readonly endpoint = this.http.get('https://jsonplaceholder.typicode.com/todos').pipe(
    map((data:any) => data.filter((item:any) => item.completed)),
    shareReplay(1)
  );

  filtered:any = [];

  constructor(
    private readonly http: HttpClient
  ) {
  }

  ngOnInit() {
  }

  getUser(userId:number){
    return this.endpoint.pipe(
      map((data:any) => data.filter((item:any) => item.userId === userId))
    ).subscribe(
      (data) => this.filtered = data
    )
  }

  getUser3(){
    return this.getUser(3)
  }
  getUser5(){
    return this.getUser(5)
  }
}
