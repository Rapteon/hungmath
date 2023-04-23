import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Puzzle } from '../types/Puzzle';
import { Statistics } from '../types/Statistics';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
})

export class GameComponent {
  gameStatistics: Statistics;
  puzzle: Puzzle;
  mistakeCount: number;

  constructor(private router: Router) {
    this.gameStatistics = new Statistics();
    this.puzzle = new Puzzle(10);
    this.mistakeCount = 0;
  }

  updateStatistics(isSolutionCorrect: boolean): boolean {
    isSolutionCorrect
      ? this.gameStatistics.correctSolution()
      : this.gameStatistics.wrongSolution();
    return !isSolutionCorrect;
  }

  updateHangmanState(isSolutionCorrect: boolean): void {
    this.mistakeCount += 1;
  }

  endGame(shouldEnd: boolean): void {
    if (shouldEnd)
      this.router.navigateByUrl('game-over');
  }
}
