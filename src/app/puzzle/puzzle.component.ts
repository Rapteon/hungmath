import { AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Puzzle } from '../types/Puzzle';

@Component({
  selector: 'puzzle',
  templateUrl: './puzzle.component.html',
  styleUrls: ['./puzzle.component.css'],
})
export class PuzzleComponent implements OnInit {
  @Output() isCorrectSolution: EventEmitter<boolean>;
  puzzle: Puzzle;
  @ViewChild('solution')
  private _solutionField!: ElementRef<HTMLInputElement>;
  constructor() {
    this.puzzle = new Puzzle(10);
    this.isCorrectSolution = new EventEmitter();
  }

  ngOnInit(): void {}

  
  checkSolution(solution: string) {
    if (this.puzzle.check(solution)) {
      alert('Correct');
      this.puzzle = new Puzzle(10);
      this._solutionField.nativeElement.value = '';
      this._solutionField.nativeElement.focus();
      this.isCorrectSolution.emit(true);
    }
    else {
      this.isCorrectSolution.emit(false);
    }
  } 
}
