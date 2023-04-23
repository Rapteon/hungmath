import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Puzzle } from '../types/Puzzle';

@Component({
  selector: 'puzzle',
  templateUrl: './puzzle.component.html',
  styleUrls: ['./puzzle.component.css'],
})
export class PuzzleComponent implements OnInit {
  @Input() puzzle: Puzzle;
  @Output() isCorrectSolution: EventEmitter<boolean>;
  @ViewChild('solution')
  private _solutionField!: ElementRef<HTMLInputElement>;
  constructor() {
    this.puzzle = new Puzzle(10);
    this.isCorrectSolution = new EventEmitter();
  }

  ngOnInit(): void {}

  
  checkSolution(solution: string) {
    if (this.puzzle.check(solution)) {
      this.isCorrectSolution.emit(true);
    }
    else {
      this.isCorrectSolution.emit(false);
    }
    this.puzzle = new Puzzle(10);
    this._solutionField.nativeElement.value = '';
    this._solutionField.nativeElement.focus();
  } 
}
