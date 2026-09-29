import { TestBed } from '@angular/core/testing';
import { Journey } from './journey';

describe('Journey', () => {
  it('lets readers navigate all six chapters and restart', async () => {
    const fixture = TestBed.createComponent(Journey);
    await fixture.whenStable();
    const root = fixture.nativeElement as HTMLElement;
    Object.defineProperty(root.querySelector('dialog'), 'close', { value: vi.fn() });
    const rail = root.querySelector('.journey-rail') as HTMLElement;
    Object.defineProperty(rail, 'offsetHeight', { value: 6000 });
    const scroll = vi.spyOn(window, 'scrollTo').mockImplementation(() => undefined);
    const buttons = root.querySelectorAll<HTMLButtonElement>('.timeline button');
    expect(buttons.length).toBe(6);
    for (let index = 0; index < buttons.length; index++) {
      buttons[index].click();
      fixture.detectChanges();
      expect(fixture.componentInstance.active()).toBe(index);
      expect(root.querySelector('h1')?.textContent).toContain(
        fixture.componentInstance.chapters[index].accent,
      );
      expect(buttons[index].getAttribute('aria-current')).toBe('step');
      expect(
        root
          .querySelector('.backdrop-layer.is-current')
          ?.classList.contains(
            'backdrop-' +
              ['spark', 'dimension', 'broadcast', 'network', 'browser', 'horizon'][index],
          ),
      ).toBe(true);
    }
    root.querySelector<HTMLButtonElement>('.continue-button')?.click();
    fixture.detectChanges();
    expect(fixture.componentInstance.active()).toBe(0);
    expect(scroll).toHaveBeenCalled();
    scroll.mockRestore();
  });

  it('opens sourced historical context for the selected event', async () => {
    const fixture = TestBed.createComponent(Journey);
    await fixture.whenStable();
    const root = fixture.nativeElement as HTMLElement;
    const dialog = root.querySelector('dialog') as HTMLDialogElement;
    const showModal = vi.fn(() => dialog.setAttribute('open', ''));
    Object.defineProperty(dialog, 'showModal', { value: showModal });
    fixture.componentInstance.active.set(5);
    fixture.detectChanges();
    root.querySelector<HTMLButtonElement>('.event-button')?.click();
    fixture.detectChanges();
    expect(showModal).toHaveBeenCalled();
    expect(dialog.textContent).toContain('June 29, 2007');
    expect(dialog.textContent).toContain('April 29, 2010');
    expect(dialog.querySelectorAll('.event-sources a').length).toBe(4);
    expect(dialog.querySelector('a[href*="businessinsider.com"]')).not.toBeNull();
    for (const chapter of fixture.componentInstance.chapters) {
      for (const section of chapter.insight.sections) {
        for (const reference of section.references) {
          expect(chapter.insight.sources[reference - 1]?.url).toMatch(/^https:\/\//);
        }
      }
    }
  });

  it('allows the reader to pause decorative motion', async () => {
    const fixture = TestBed.createComponent(Journey);
    await fixture.whenStable();
    fixture.componentInstance.motion.set(true);
    fixture.detectChanges();
    const button = (fixture.nativeElement as HTMLElement).querySelector<HTMLButtonElement>(
      '.theater-footer button',
    );
    button?.click();
    fixture.detectChanges();
    expect(button?.getAttribute('aria-pressed')).toBe('false');
    expect((fixture.nativeElement as HTMLElement).classList.contains('motion-paused')).toBe(true);
  });
});
