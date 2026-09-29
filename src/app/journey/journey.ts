import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  afterNextRender,
  computed,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { Artifact } from './artifact';
import { CHAPTERS } from './chapters';

@Component({
  selector: 'app-journey',
  imports: [Artifact],
  templateUrl: './journey.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.motion-paused]': '!motion()',
    '(window:scroll)': 'onScroll()',
    '(window:resize)': 'onScroll()',
  },
})
export class Journey {
  readonly chapters = CHAPTERS;
  readonly active = signal(0);
  readonly chapter = computed(() => this.chapters[this.active()]);
  readonly progress = signal(0);
  readonly motion = signal(true);
  readonly dialogMode = signal<'chapters' | 'about'>('chapters');
  readonly modal = viewChild<ElementRef<HTMLDialogElement>>('modal');
  readonly rail = viewChild<ElementRef<HTMLElement>>('rail');
  private readonly destroyRef = inject(DestroyRef);
  private frame = 0;

  constructor() {
    afterNextRender(() => {
      const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
      this.motion.set(!preference.matches);
      const changed = (event: MediaQueryListEvent) => this.motion.set(!event.matches);
      preference.addEventListener('change', changed);
      this.onScroll();
      this.destroyRef.onDestroy(() => {
        preference.removeEventListener('change', changed);
        cancelAnimationFrame(this.frame);
      });
    });
  }

  onScroll() {
    cancelAnimationFrame(this.frame);
    this.frame = requestAnimationFrame(() => {
      const rail = this.rail()?.nativeElement;
      if (!rail) return;
      const distance = rail.offsetHeight - window.innerHeight;
      const position = Math.max(0, Math.min(1, -rail.getBoundingClientRect().top / distance));
      this.progress.set(position);
      this.active.set(
        Math.min(this.chapters.length - 1, Math.floor(position * this.chapters.length)),
      );
    });
  }

  goTo(index: number) {
    const rail = this.rail()?.nativeElement;
    if (!rail) return;
    const next = Math.max(0, Math.min(this.chapters.length - 1, index));
    const top = window.scrollY + rail.getBoundingClientRect().top;
    window.scrollTo({
      top:
        top +
        ((rail.offsetHeight - window.innerHeight) * next) / this.chapters.length +
        (next ? 2 : 0),
      behavior: 'instant',
    });
    this.active.set(next);
    this.modal()?.nativeElement.close();
  }

  openDialog(mode: 'chapters' | 'about') {
    this.dialogMode.set(mode);
    this.modal()?.nativeElement.showModal();
  }
  closeDialog(event: MouseEvent) {
    if (event.target === this.modal()?.nativeElement) this.modal()?.nativeElement.close();
  }
  resetTilt(event: PointerEvent) {
    const target = event.currentTarget as HTMLElement;
    target.style.setProperty('--pointer-x', '0deg');
    target.style.setProperty('--pointer-y', '0deg');
  }

  move(event: PointerEvent) {
    if (!this.motion() || event.pointerType === 'touch') return;
    const target = event.currentTarget as HTMLElement;
    const rect = target.getBoundingClientRect();
    target.style.setProperty(
      '--pointer-x',
      `${((event.clientX - rect.left) / rect.width - 0.5) * 12}deg`,
    );
    target.style.setProperty(
      '--pointer-y',
      `${-((event.clientY - rect.top) / rect.height - 0.5) * 10}deg`,
    );
  }
}
