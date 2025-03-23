import { Component, computed, effect, input, output, Signal, signal, WritableSignal } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SlyfoxUiIconComponent } from '../icons/icons.component';
import { CommonModule } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';

type ICheckboxTypes = 'squareCheck' | 'squareSymbol' | 'circleCheck' | 'circleSymbol';
type ICheckboxSize = 'md' | 'sm';

@Component({
  selector: 'slf-ui-checkbox',
  imports: [SlyfoxUiIconComponent, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: `./checkbox.component.html`,
  styleUrl: `./checkbox.component.scss`,
})

export class SlyfoxUiCheckboxComponent {
  public FormControl = input<FormControl>(new FormControl());
  public Type = input<ICheckboxTypes>('squareCheck');
  public Size = input<ICheckboxSize>('md');
  public Id = input.required<string>();
  protected isChecked!: WritableSignal<boolean>;

  constructor() {
    effect(() => {
      this.isChecked = signal(this.FormControl().value)
      this.FormControl().valueChanges.subscribe(() => this.isChecked.set(this.FormControl().value))
    })
  }

  public CheckboxClass = computed(() => {
    return {
      'slf-checkbox--checked': this.isChecked(),
      'slf-checkbox--squareCheck': this.Type() === 'squareCheck',
      'slf-checkbox--squareSymbol': this.Type() === 'squareSymbol',
      'slf-checkbox--circleCheck': this.Type() === 'circleCheck',
      'slf-checkbox--circleSymbol': this.Type() === 'circleSymbol',
      'slf-checkbox--md': this.Size() === 'md',
      'slf-checkbox--sm': this.Size() === 'sm',
    }
  });
}
