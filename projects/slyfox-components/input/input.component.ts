import { Component, input } from '@angular/core';

type IInputIconPosition = 'left' | 'right' | 'double'
@Component({
  selector: 'slf-ui-input',
  imports: [],
  template: `<input />`,
  styles: ``
})
export class SlyfoxUiInputComponent {
  public Type = input<string>('text');
  public Label = input<string>();
  public Hint = input<string>();
  public Error = input<string>();
  public ReadOnly = input<boolean>()
  public iconPosition = input<string>('right');
}
