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
    }
    root.querySelector<HTMLButtonElement>('.continue-button')?.click();
    fixture.detectChanges();
    expect(fixture.componentInstance.active()).toBe(0);
    expect(scroll).toHaveBeenCalled();
    scroll.mockRestore();
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
