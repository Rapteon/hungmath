import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent {
  constructor(private router: Router) {}
  navigateToHome(): void {
    this.router.navigateByUrl('/');
  }
}
