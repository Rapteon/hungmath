import { Component, ViewChild } from '@angular/core';
import { StatisticsComponent } from '../statistics/statistics.component';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
})
export class GameComponent {
  @ViewChild('statistics')
  private _statisticsComponent?: StatisticsComponent;

  updateStatistics(isSolutionCorrect: boolean): void {
    isSolutionCorrect
      ? this._statisticsComponent?.gameStatistics.correctSolution()
      : this._statisticsComponent?.gameStatistics.wrongSolution();
  }
}
