import { Component, ElementRef, EventEmitter, Input, Output, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'hangman',
  templateUrl: './hangman.component.html',
  styleUrls: ['./hangman.component.css']
})
export class HangmanComponent {
  @Input() mistakeCount;
  @Output() onHangmanDead: EventEmitter<boolean>;
  @ViewChild('hangman') hangman?: ElementRef<SVGElement>;

  constructor() {
    this.mistakeCount = 0;
    this.onHangmanDead = new EventEmitter();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['mistakeCount'].currentValue !== changes['mistakeCount'].previousValue) {
      this._updateHangman();
    }
  }

  private _updateHangman(): void {
    if (this.mistakeCount === 1) {
      const leftLeg = this._findSVGElement('path[id="left-leg"]');
      this._injureHangman(leftLeg);
    }
    else if (this.mistakeCount === 2) {
      const rightLeg = this._findSVGElement('path[id="right-leg"]');
      this._injureHangman(rightLeg);
    }
    else if (this.mistakeCount === 3) {
      const leftArm = this._findSVGElement('path[id="left-arm"]');
      this._injureHangman(leftArm);
    }
    else if (this.mistakeCount === 4) {
      const rightArm = this._findSVGElement('path[id="right-arm"]');
      this._injureHangman(rightArm);
    }
    else if (this.mistakeCount === 5) {
      const torso = this._findSVGElement('path[id="torso"]');
      this._injureHangman(torso);
    }
    else if (this.mistakeCount === 6) {
      const head = this._findSVGElement('circle[id="head"]');
      this._injureHangman(head);
    }

    this.onHangmanDead.emit(this.mistakeCount === 7);
  }

  private _findSVGElement(querySelector:string): SVGElement {
    return this.hangman?.nativeElement.querySelector(querySelector) as SVGElement;
  }

  private _injureHangman(svgElement: SVGElement) {
    if (svgElement !== undefined)
      svgElement.style.stroke = 'var(--red)';
  }
}
