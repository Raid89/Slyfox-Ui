import { Component, computed, input, OnInit, output, Signal, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';

type IToggleSize = 'md' | 'sm';

@Component({
  selector: 'slf-ui-toggle',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss']
})
export class SlyfoxUiToggleComponent implements OnInit{

  //Inputs
  public FormControl = input.required<FormControl>();
  public Readonly = input<boolean>(false);
  public Disabled = input<boolean>(false);
  public Label = input<string>('');
  public Hint = input<string>('');
  public Size = input<IToggleSize>('md');

  private ToggleIsActive = signal(false);

  protected ToggleClass = computed(() => {
    return {
      'disabled': this.Disabled(),
      'readonly': this.Readonly(),
      'active': this.ToggleIsActive(),
    };
  });

  ngOnInit(): void {
    this.onChangeValue()
  }

  onChangeValue() {
    this.FormControl().valueChanges.subscribe((newValue) => {
      this.ToggleIsActive.set(newValue)
    })
  }

  onToggleClick() {
    const currentValue = this.FormControl().value
    this.FormControl().setValue(!currentValue)
  }


}
