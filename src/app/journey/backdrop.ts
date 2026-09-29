import { ChangeDetectionStrategy, Component, input } from '@angular/core';

/** Persistent layers crossfade without rebuilding or resetting outgoing scenery. */
@Component({
  selector: 'app-backdrop',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { 'aria-hidden': 'true', class: 'chapter-backdrop' },
  template: `
    @for (scene of scenes; track scene; let index = $index) {
      <div [class]="'backdrop-layer backdrop-' + scene" [class.is-current]="active() === index">
        <div class="backdrop-light"></div>
        <div class="backdrop-geometry"></div>
        <div class="backdrop-detail"></div>
      </div>
    }
    <div class="backdrop-scrim"></div>
  `,
})
export class Backdrop {
  readonly active = input.required<number>();
  readonly scenes = ['spark', 'dimension', 'broadcast', 'network', 'browser', 'horizon'];
}
