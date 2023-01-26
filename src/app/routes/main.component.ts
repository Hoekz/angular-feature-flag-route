import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'main-component',
  template: '<a routerLink="secret-page">Try to reach the secret page?</a>',
  styles: [],
  imports: [RouterModule],
})
export class MainComponent {

}
