import { Component } from '@angular/core';
import { Statistics } from '../types/Statistics';

@Component({
  selector: 'statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent {
  gameStatistics: Statistics;
  constructor() {
    this.gameStatistics = new Statistics();
  }
}
