import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-artifact',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { '[class]': '"artifact-scene scene-" + scene()', 'aria-hidden': 'true' },
  template: `
    <div class="scene-glow"></div>
    <div class="orbit orbit-one"></div>
    <div class="orbit orbit-two"></div>
    <div class="orbital-mark mark-one">+</div>
    <div class="orbital-mark mark-two">+</div>
    <div class="artifact-float">
      @switch (scene()) {
        @case (0) {
          <div class="flash-object">
            <div class="flash-side"></div>
            <div class="flash-face"><span>ƒ</span><small>FLASH</small></div>
          </div>
        }
        @case (1) {
          <div class="cube">
            <div class="cube-face front">X</div>
            <div class="cube-face back"></div>
            <div class="cube-face right">Y</div>
            <div class="cube-face left"></div>
            <div class="cube-face top">Z</div>
            <div class="cube-face bottom"></div>
          </div>
        }
        @case (2) {
          <div class="video-object">
            <div class="window-bar"><i></i><i></i><i></i><span>Broadcast yourself.</span></div>
            <div class="video-display"><span class="play-triangle"></span></div>
            <div class="video-track"><span></span><small>00:01 / ∞</small></div>
          </div>
        }
        @case (3) {
          <div class="server-stack">
            @for (label of ['EXPERIENCE', 'CONNECTION', 'DATA']; track label) {
              <div class="server">
                <span>{{ label }}</span
                ><i></i><i></i><b>≡</b>
              </div>
            }
          </div>
        }
        @case (4) {
          <div class="browser-object">
            <div class="window-bar"><i></i><i></i><i></i><span>localhost / possibility</span></div>
            <div class="browser-code">
              <span>$</span><b>(</b><em>'the future'</em><b>)</b><small>.fadeIn();</small>
            </div>
            <div class="request-line">● &nbsp; 200 OK <span>NO RELOAD REQUIRED</span></div>
          </div>
        }
        @case (5) {
          <div class="phone-object">
            <div class="speaker"></div>
            <div class="phone-screen">
              <small>A NEW BEGINNING</small><span>&lt;/&gt;</span>
              <p>The web.<br />Unbound.</p>
            </div>
            <div class="home-button"></div>
          </div>
          <div class="open-web-label">HTML5 &nbsp; + &nbsp; CSS3 &nbsp; + &nbsp; JS</div>
        }
      }
    </div>
    <div class="floor-grid"></div>
    <span class="coordinate coordinate-top">X 024 &nbsp; Y 021 &nbsp; Z ∞</span>
    <span class="coordinate coordinate-bottom"
      >EXPERIMENT {{ '0' + (scene() + 1) }} &nbsp; / &nbsp; REAL-TIME NOSTALGIA</span
    >
  `,
})
export class Artifact {
  readonly scene = input.required<number>();
}
