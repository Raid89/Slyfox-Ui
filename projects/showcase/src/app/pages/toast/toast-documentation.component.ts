import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToastService, ToastPosition } from '../../../../../slyfox-components/toast/toast.service'; // Adjust path as per your library structure
import { ToastType } from '../../../../../slyfox-components/toast/toast.component';
import { PropertiesTableComponent } from '../properties-table/properties-table.component';
import { IComponentProperty } from '../../interfaces/properties.interface';
import { CssVarsTableComponent } from '../../shared/css-vars-table';
// import { SlyfoxUiButtonComponent } from '@slyfox-components/button';

@Component({
  selector: 'app-toast-documentation',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    PropertiesTableComponent,
    CssVarsTableComponent,
    // SlyfoxUiButtonComponent
  ],
  templateUrl: './toast-documentation.component.html',
  // styleUrls: ['./toast-documentation.component.scss']
})
export class ToastDocumentationComponent {
  toastMessage: string = 'This is a sample toast message!';
  toastTitle: string = 'Sample Toast';
  toastDuration: number = 3000;
  selectedToastType: ToastType = 'info';
  toastTypes: ToastType[] = ['success', 'error', 'warning', 'info'];
  showCloseButton: boolean = true;
  selectedPosition: ToastPosition = 'top-center';
  toastPositions: ToastPosition[] = ['top-right', 'top-left', 'bottom-right', 'bottom-left', 'top-center', 'bottom-center'];

  constructor(private toastService: ToastService) {}

  showToast(): void {
    this.toastService.show(
      this.toastMessage,
      this.selectedToastType,
      this.toastDuration,
      this.showCloseButton,
      this.selectedPosition,
      this.toastTitle
    );
  }

  showSuccessToast(): void {
    this.toastService.success('Operation completed successfully!', 3000, true, this.selectedPosition, 'Success');
  }

  showErrorToast(): void {
    this.toastService.error('An error occurred. Please try again.', 5000, true, this.selectedPosition, 'Error');
  }

  showWarningToast(): void {
    this.toastService.warning('Please check the input fields.', 0, true, this.selectedPosition, 'Warning'); // Persistent warning
  }

  showInfoToast(): void {
    this.toastService.info('This is an informational message.', 3000, true, this.selectedPosition, 'Info');
  }

  // Code examples for documentation
  public codeExamples = {
    basicShow: `this.toastService.show('Your message', 'info', 3000, true, 'top-right');`,
    successWithPosition: `this.toastService.success('Success message!', 3000, true, 'bottom-left');`,
    error: `this.toastService.error('Error message!', 5000);`,
    warningPersistent: `this.toastService.warning('Persistent warning!', 0);`,
    info: `this.toastService.info('Informational message.');`,
    usage: `
import { Component } from '@angular/core';
import { ToastService } from '@slyfox-components/toast'; // Adjust path

@Component({
  selector: 'my-app-component',
  template: '<button (click)="showMyToast()">Show Toast</button>'
})
export class MyAppComponent {
  constructor(private toastService: ToastService) {}

  showMyToast() {
    this.toastService.info('Hello from Toast!');
  }
}
`,
  provideAnimations: `
// For standalone applications (e.g., in app.config.ts)
import { provideAnimations } from '@angular/platform-browser/animations';
import { ApplicationConfig } from '@angular/core'; // Added ApplicationConfig import

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations() // or provideAnimationsAsync() for lazy loading
  ]
};

// For NgModule-based applications (e.g., in app.module.ts)
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core'; // Added NgModule import

@NgModule({
  imports: [
    BrowserAnimationsModule,
  ],
})
export class AppModule { }
`
  };

  // Properties for the documentation table
  public toastServiceProperties: IComponentProperty[] = [
    {
      property: 'show(message, type?, duration?, showCloseButton?, position?)',
      description: 'Shows a toast with the given options.',
      type: 'method',
      values: 'message: string, type: ToastType, duration: number, showCloseButton: boolean, position: ToastPosition',
      default: 'type: \'info\', duration: 3000, showCloseButton: true, position: \'top-right\''
    },
    {
      property: 'success(message, duration?, showCloseButton?, position?)',
      description: 'Shows a success toast.',
      type: 'method',
      values: 'message: string, duration: number, showCloseButton: boolean, position: ToastPosition',
      default: 'duration: 3000, showCloseButton: true, position: \'top-right\''
    },
    {
      property: 'error(message, duration?, showCloseButton?, position?)',
      description: 'Shows an error toast.',
      type: 'method',
      values: 'message: string, duration: number, showCloseButton: boolean, position: ToastPosition',
      default: 'duration: 3000, showCloseButton: true, position: \'top-right\''
    },
    {
      property: 'warning(message, duration?, showCloseButton?, position?)',
      description: 'Shows a warning toast.',
      type: 'method',
      values: 'message: string, duration: number, showCloseButton: boolean, position: ToastPosition',
      default: 'duration: 3000, showCloseButton: true, position: \'top-right\''
    },
    {
      property: 'info(message, duration?, showCloseButton?, position?)',
      description: 'Shows an info toast.',
      type: 'method',
      values: 'message: string, duration: number, showCloseButton: boolean, position: ToastPosition',
      default: 'duration: 3000, showCloseButton: true, position: \'top-right\''
    }
  ];

  public toastComponentInputs: IComponentProperty[] = [
    {
      property: 'message',
      description: 'The main message content of the toast.',
      type: 'string',
      values: '-',
      default: "''"
    },
    {
      property: 'type',
      description: 'The type of toast, determining its style and icon.',
      type: "'success' | 'error' | 'warning' | 'info'",
      values: 'success, error, warning, info',
      default: "'info'"
    },
    {
      property: 'duration',
      description: 'Duration in milliseconds before the toast automatically closes. Set to 0 for a persistent toast.',
      type: 'number',
      values: 'e.g., 3000, 5000, 0',
      default: '3000'
    },
    {
      property: 'showCloseButton',
      description: 'Whether to display a close button on the toast.',
      type: 'boolean',
      values: 'true, false',
      default: 'true'
    },
    // Position is managed by the service and container, not directly on SlyfoxUiToastComponent
    // but it's a key configuration for the system.
    // We can add a note about position configuration here or in a general section.
  ];

  public toastContainerComponentInputs: IComponentProperty[] = [
    {
      property: 'position',
      description: 'Determines where the toast container (and thus its toasts) will appear on the screen. This is typically set by the ToastService when it creates a container instance.',
      type: "'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center'",
      values: 'top-right, top-left, bottom-right, bottom-left, top-center, bottom-center',
      default: "'top-right'"
    }
  ];

  public toastComponentOutputs: IComponentProperty[] = [
    {
      property: 'closed',
      description: 'Emitted when the toast is closed, either automatically or manually.',
      type: 'EventEmitter<void>',
      values: '-',
      default: '-'
    }
  ];
}
