import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent {
  constructor(private router: Router) {}

  startGame(): void {
    this.router.navigateByUrl('game');
  }
}
