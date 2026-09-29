import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'tmdj-root',
  imports: [RouterOutlet],
  template: `
    <h1>{{ title() }}</h1>
    <router-outlet></router-outlet>
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
})
export class App {
  protected readonly title = signal('wesleydusell');
}
