import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'secret-component',
  template: `
    <h2>You found the secret!</h2>
    <a routerLink="">Back to main</a>
  `,
  styles: ['h2 { color: red; }'],
  imports: [RouterModule],
})
export class SecretComponent {}
