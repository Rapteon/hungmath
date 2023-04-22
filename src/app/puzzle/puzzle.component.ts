import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Puzzle } from '../types/Puzzle';

@Component({
  selector: 'puzzle',
  templateUrl: './puzzle.component.html',
  styleUrls: ['./puzzle.component.css'],
})
export class PuzzleComponent implements OnInit {
  puzzle: Puzzle;

  @ViewChild('solution')
  private _solutionField!: ElementRef<HTMLInputElement>;

  constructor() {
    this.puzzle = new Puzzle(10);
  }

  ngOnInit(): void {}

  
  checkSolution(solution: string) {
    if (this.puzzle.check(solution)) {
      alert('Correct');
      this.puzzle = new Puzzle(10);
      this._solutionField.nativeElement.value = '';
      this._solutionField.nativeElement.focus();
    }
  }
}
