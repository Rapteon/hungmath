import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-over',
  templateUrl: './game-over.component.html',
  styleUrls: ['./game-over.component.css'],
})
export class GameOverComponent {
  constructor(private router: Router) {}
  newGame() {
    this.router.navigateByUrl('game');
  }
}
