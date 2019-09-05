import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Beer } from './beer';

@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.scss']
})
export class BeersComponent {
  beers$: Observable<Beer[]>;

  constructor() { }
}
