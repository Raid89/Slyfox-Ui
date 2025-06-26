import { Injectable, ApplicationRef, ComponentFactoryResolver, Injector, EmbeddedViewRef, Type } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { SlyfoxUiToastComponent, ToastType } from './toast.component';
import { ToastContainerComponent } from './toast-container.component'; // Will create this next

export type ToastPosition = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center';

export interface ToastOptions {
  message: string;
  title?: string; // Optional title for the toast
  type?: ToastType;
  duration?: number;
  showCloseButton?: boolean;
  position?: ToastPosition; // Added position
  // Future options: custom component, etc.
}

export interface Toast {
  id: number;
  options: ToastOptions;
  component: Type<SlyfoxUiToastComponent>; // The component type itself
  // We might not need to store the actual componentRef here if the container creates them
}

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  private toastSubject = new Subject<ToastOptions>();
  toastState = this.toastSubject.asObservable();

  // Store multiple container refs, one for each position
  private containerRefs: { [key in ToastPosition]?: EmbeddedViewRef<any> } = {};
  private toastId = 0;

  constructor(
    private appRef: ApplicationRef,
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector
  ) {}

  private ensureContainer(position: ToastPosition = 'top-right'): void {
    if (!this.containerRefs[position]) {
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(ToastContainerComponent);
      // Pass position to the container component instance
      const componentRef = componentFactory.create(this.injector);
      componentRef.instance.position = position; // Set the position input

      this.appRef.attachView(componentRef.hostView);
      this.containerRefs[position] = componentRef.hostView as EmbeddedViewRef<any>;
      const domElem = (this.containerRefs[position] as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
      document.body.appendChild(domElem);
    }
  }

  show(message: string, type: ToastType = 'info', duration: number = 3000, showCloseButton: boolean = true, position: ToastPosition = 'top-right', title: string): void {
    this.ensureContainer(position);
    const options: ToastOptions = { message, type, duration, showCloseButton, position, title };
    this.toastSubject.next(options); // This subject is now listened to by ALL containers.
  }

  success(message: string, duration: number = 3000, showCloseButton: boolean = true, position: ToastPosition = 'top-right', title: string): void {
    this.show(message, 'success', duration, showCloseButton, position, title);
  }

  error(message: string, duration: number = 3000, showCloseButton: boolean = true, position: ToastPosition = 'top-right', title: string): void {
    this.show(message, 'error', duration, showCloseButton, position, title);
  }

  warning(message: string, duration: number = 3000, showCloseButton: boolean = true, position: ToastPosition = 'top-right', title: string): void {
    this.show(message, 'warning', duration, showCloseButton, position, title);
  }

  info(message: string, duration: number = 3000, showCloseButton: boolean = true, position: ToastPosition = 'top-right', title: string): void {
    this.show(message, 'info', duration, showCloseButton, position, title);
  }

  // Method to remove the container if needed, e.g., on app destroy or route change
  destroyContainer(position?: ToastPosition): void {
    if (position) {
      const containerRef = this.containerRefs[position];
      if (containerRef) {
        this.appRef.detachView(containerRef);
        containerRef.destroy();
        delete this.containerRefs[position];
      }
    } else { // Destroy all containers if no position is specified
      Object.keys(this.containerRefs).forEach(pos => {
        const key = pos as ToastPosition;
        const containerRef = this.containerRefs[key];
        if (containerRef) {
          this.appRef.detachView(containerRef);
          containerRef.destroy();
        }
      });
      this.containerRefs = {};
    }
  }
}
