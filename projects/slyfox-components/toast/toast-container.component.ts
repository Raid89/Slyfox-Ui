import { Component, OnInit, OnDestroy, ChangeDetectorRef, Input } from '@angular/core'; // Added Input
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { ToastService, ToastOptions, ToastPosition } from './toast.service'; // Added ToastPosition
import { SlyfoxUiToastComponent } from './toast.component';

interface ActiveToast extends ToastOptions {
  id: number;
}

@Component({
  selector: 'slf-ui-toast-container',
  standalone: true,
  imports: [CommonModule, SlyfoxUiToastComponent],
  template: `
    <div class="slf-toast-container" [ngClass]="positionClass">
      <slf-ui-toast
        *ngFor="let toast of activeToasts; trackBy: trackById"
        [message]="toast.message"
        [title]="toast.title || ''"
        [type]="toast.type || 'info'"
        [duration]="toast.duration === 0 ? 0 : (toast.duration || 3000)"
        [showCloseButton]="toast.showCloseButton !== undefined ? toast.showCloseButton : true"
        (closed)="onToastClosed(toast.id)"
      ></slf-ui-toast>
    </div>
  `,
  styles: [`
    .slf-toast-container {
      position: fixed;
      z-index: 9999;
      display: flex;
      flex-direction: column;
      /* Default to top-right if no position is set, though it should always be set by service */
      top: 20px;
      right: 20px;
      align-items: flex-end;
    }
    .slf-toast-container.top-left {
      top: 20px;
      left: 20px;
      bottom: auto;
      right: auto;
      align-items: flex-start;
    }
    .slf-toast-container.top-right {
      top: 20px;
      right: 20px;
      bottom: auto;
      left: auto;
      align-items: flex-end;
    }
    .slf-toast-container.bottom-left {
      bottom: 20px;
      left: 20px;
      top: auto;
      right: auto;
      align-items: flex-start;
    }
    .slf-toast-container.bottom-right {
      bottom: 20px;
      right: 20px;
      top: auto;
      left: auto;
      align-items: flex-end;
    }
    .slf-toast-container.top-center {
      top: 20px;
      left: 50%;
      transform: translateX(-50%);
      bottom: auto;
      right: auto;
      align-items: center;
    }
    .slf-toast-container.bottom-center {
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
      top: auto;
      right: auto;
      align-items: center;
    }
  `]
})
export class ToastContainerComponent implements OnInit, OnDestroy {
  @Input() position: ToastPosition = 'top-right'; // Default position
  activeToasts: ActiveToast[] = [];
  private toastSubscription!: Subscription;
  private toastIdCounter = 0;


  constructor(private toastService: ToastService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.toastSubscription = this.toastService.toastState.subscribe(
      (toastOptions: ToastOptions) => {
        // Only add toast if it's for this container's position, or if no position is specified (defaults to top-right)
        if (toastOptions.position === this.position || (!toastOptions.position && this.position === 'top-right')) {
          this.addToast(toastOptions);
        }
      }
    );
  }

  addToast(options: ToastOptions): void {
    const newToast: ActiveToast = {
      ...options,
      id: this.toastIdCounter++
    };
    this.activeToasts.push(newToast);
    this.cdr.detectChanges();
  }

  onToastClosed(toastId: number): void {
    this.activeToasts = this.activeToasts.filter(t => t.id !== toastId);
    this.cdr.detectChanges();
    // Optional: if this container becomes empty, it could be destroyed by the service
    // This logic might be better placed in the service or handled via a different mechanism
    if (this.activeToasts.length === 0) {
      // Notify service that this container for this.position might be empty
      // this.toastService.notifyContainerEmpty(this.position);
    }
  }

  trackById(index: number, item: ActiveToast): number {
    return item.id;
  }

  ngOnDestroy(): void {
    if (this.toastSubscription) {
      this.toastSubscription.unsubscribe();
    }
    // When a container is destroyed, it should be removed from the service's refs
    // This is now handled by the service's destroyContainer method
  }

  get positionClass(): string {
    return this.position ? `slf-toast-container ${this.position}` : 'slf-toast-container top-right';
  }
}
