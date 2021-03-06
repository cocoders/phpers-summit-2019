import { Component, Input } from '@angular/core';
import { Beer } from '../beer';

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.scss']
})
export class BeerComponent {
  @Input() beer: Beer;
}
