import { Component, OnInit } from '@angular/core';
import {Http, Response} from '@angular/http';

@Component({
  selector: 'app-jsonexample',
  templateUrl: './jsonexample.component.html',
  styleUrls: ['./jsonexample.component.css']
})
export class JsonexampleComponent implements OnInit {

  data: string;
  loading: boolean;

  constructor(private http: Http) {
  }

  ngOnInit() {
  }

  makeRequest(): void {
    this.loading = true;
    this.http.request('http://jsonplaceholder.typicode.com/posts/1')
    .subscribe((res: Response) => {
      this.data = res.json();
      this.loading = false;
      console.log(this.data);
    });
  }
}
