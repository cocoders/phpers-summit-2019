import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  test$ = this.http.get(`${environment.api}/test`);
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
}
