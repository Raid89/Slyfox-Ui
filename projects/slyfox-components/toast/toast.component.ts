import { Component, EventEmitter, Input, Output, OnInit, OnDestroy, input, output, signal } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Subscription, timer } from 'rxjs';
import { SlyfoxUiIconComponent } from '../icons/icons.component';

export type ToastType = 'success' | 'error' | 'warning' | 'info';

@Component({
  selector: 'slf-ui-toast',
  standalone: true,
  imports: [CommonModule, SlyfoxUiIconComponent],
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
  animations: [
    trigger('toastAnimation', [
      state('void', style({
        transform: 'translateY(100%)',
        opacity: 0
      })),
      state('visible', style({
        transform: 'translateY(0)',
        opacity: 1
      })),
      state('hidden', style({
        transform: 'translateY(100%)',
        opacity: 0
      })),
      transition('void => visible', animate('300ms ease-out')),
      transition('visible => hidden', animate('300ms ease-in'))
    ])
  ]
})
export class SlyfoxUiToastComponent implements OnInit, OnDestroy {
  public message = input<string>('');
  public title = input<string>('');
  public type = input<ToastType>('info');
  public duration = input<number>(3000);
  public showCloseButton = input<boolean>(true);

  public closed = output<void>();

  isVisible = signal<boolean>(false);
  animationState: 'void' | 'visible' | 'hidden' = 'void';
  private timerSubscription?: Subscription;
  protected readonly toastIcons = {
      success: {
        name: 'check',
        category: 'general'
      },
      error: {
        name: 'x-circle',
        category: 'general'
      },
      info: {
        name: 'info-circle',
        category: 'general'
      },
      warning: {
        name: 'alert-triangle',
        category: 'alert'
      }
    }
  constructor() {}

  ngOnInit(): void {
    this.show();
  }

  get typeClass(): string {
    return `slf-toast--${this.type()}`;
  }

  show(): void {
    this.isVisible.set(true);
    this.animationState = 'visible';
    if (this.duration() > 0) {
      this.timerSubscription = timer(this.duration()).subscribe(() => {
        this.hide();
      });
    }
  }

  hide(): void {
    this.animationState = 'hidden';
    // Wait for animation to complete before setting isVisible to false and emitting event
    // This depends on the animation duration
    setTimeout(() => {
      this.isVisible.set(false);
      this.closed.emit();
    }, 300); // Should match animation duration
  }

  onCloseClick(): void {
    this.timerSubscription?.unsubscribe();
    this.hide();
  }

  ngOnDestroy(): void {
    this.timerSubscription?.unsubscribe();
  }
}
