import { Component, computed, input, output, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'slf-ui-otp',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './input-otp.component.html',
  styleUrls: ['./input-otp.component.scss']
})
export class SlyfoxUiOtpComponent {
  // Inputs
  public Id = input.required<string>();
  public FormControl = input.required<FormControl>();
  public Length = input<number>(4);
  public Label = input<string>('');
  public Hint = input<string>('');
  public Error = input<string | undefined>();
  public ReadOnly = input<boolean>(false);
  public Size = input<'sm' | 'md' | 'lg'>('md');

  // Styles
  public LabelStyles = input<object>({});
  public InputStyles = input<object>({});

  // Outputs
  public onChange = output<Event>();
  public onKeyUp = output<Event>();
  public onKeyDown = output<Event>();
  public onFocus = output<Event>();
  public onBlur = output<Event>();

  public isShaking = signal(false);

  // Computed properties
  public otpArray = computed(() => {
    const value = this.FormControl().value || '';
    const digits = value.split('').slice(0, this.Length());
    // Ensure we have an array of the correct length
    return Array.from({ length: this.Length() }, (_, i) => digits[i] || '');
  });

  public separatorPosition = computed(() => {
    const length = this.Length();
    if (length <= 4) return -1;

    if (length % 3 === 0) {
      return 3;
    } else if (length % 2 === 0) {
      return length / 2;
    }

    return -1;
  });

  public ClassList = computed(() => {
    return {
      'slf-otp--error': this.Error(),
      'slf-otp--readonly': this.ReadOnly(),
      'slf-otp--sm': this.Size() === 'sm',
      'slf-otp--md': this.Size() === 'md',
      'slf-otp--lg': this.Size() === 'lg',
      'shake': this.isShaking()
    }
  });

  public handleInput(event: Event, index: number) {
    const input = event.target as HTMLInputElement;
    const value = input.value;

    if (value.length > 1) {
      input.value = value[0];
    }

    const currentValue = this.FormControl().value || '';
    const newValue = currentValue.split('');
    newValue[index] = value;

    this.FormControl().setValue(newValue.join(''));
    this.onChange.emit(event);

    if (value && index < this.Length() - 1) {
      // Get all inputs and find the next one, skipping separators
      const inputs = document.querySelectorAll(`#${this.Id()} .slf-otp__input`);
      const nextInput = Array.from(inputs).find((_, i) => i > index) as HTMLInputElement;
      if (nextInput) {
        nextInput.focus();
      }
    }
  }

  public handleKeyDown(event: KeyboardEvent, index: number) {
    const input = event.target as HTMLInputElement;

    if (event.key === 'Backspace' && !input.value && index > 0) {
      // Get all inputs and find the previous one, skipping separators
      const inputs = document.querySelectorAll(`#${this.Id()} .slf-otp__input`);
      const prevInput = inputs[index - 1] as HTMLInputElement;
      if (prevInput) {
        prevInput.focus();
      }
    }

    this.onKeyDown.emit(event);
  }

  public handlePaste(event: ClipboardEvent) {
    event.preventDefault();
    const pastedData = event.clipboardData?.getData('text') || '';
    const digits = pastedData.replace(/\D/g, '').slice(0, this.Length());

    // Set the value in the form control
    this.FormControl().setValue(digits);

    // Update the input values directly
    const inputs = document.querySelectorAll(`#${this.Id()} .slf-otp__input`);
    inputs.forEach((input, index) => {
      (input as HTMLInputElement).value = digits[index] || '';
    });

    // Focus the last input that was filled
    if (inputs.length > 0) {
      const lastInput = inputs[Math.min(digits.length, this.Length() - 1)] as HTMLInputElement;
      if (lastInput) {
        lastInput.focus();
      }
    }
  }
}
