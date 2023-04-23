import { Component, Input } from '@angular/core';
import { Statistics } from '../types/Statistics';

@Component({
  selector: 'statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent {
  @Input() statistics: Statistics;
  constructor() {
    this.statistics = new Statistics();
  }
}
