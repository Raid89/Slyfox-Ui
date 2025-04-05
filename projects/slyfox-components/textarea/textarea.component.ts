import { Component, computed, input, output, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

type IInputIconPosition = 'left' | 'right' | 'double'
@Component({
  selector: 'slf-ui-textarea',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss']
})
export class SlyfoxUiTextareaComponent {

  // Inputs
  public Id = input<string>('');
  public Name = input<string>('');
  public Placeholder = input<string>('');
  public FormControl = input.required<FormControl>();
  public Label = input<string>('');
  public Hint = input<string>('');
  public Error = input<string | undefined>();
  public ReadOnly = input<boolean>(false);

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

  //Getters
  public ClassList = computed(() => {
    return {
      'slf-textarea--error': this.Error(),
      'slf-textarea--readonly': this.ReadOnly(),
      'shake': this.isShaking()
    }
  })

  public handleChange(event: Event) {
    this.onChange.emit(event);

    if (this.Error()) {
      this.isShaking.set(true);
      setTimeout(() => {
        this.isShaking.set(false);
      }, 300);
    }
  }
}
