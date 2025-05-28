import { Component, computed, input, output } from '@angular/core';
import { SlyfoxUiIconComponent } from '../icons/icons.component';
import { CommonModule } from '@angular/common';

type IButtonTypes = 'default' | 'bordered' | 'outlined' | 'icon';
type IButtonSizez = 'lg' | 'md' | 'sm';
type IButtonIconType = 'none' | 'left' | 'right' | 'double';
type IButtonColor = 'primary' | 'secondary'

@Component({
  selector: 'slf-ui-button',
  imports: [SlyfoxUiIconComponent, CommonModule],
  templateUrl: `./button.component.html`,
  styleUrl: `./button.component.scss`,
})

export class SlyfoxUiButtonComponent {

  public IsDisabled = input<boolean>(false);
  public IsLoading = input<boolean>(false);
  public Type = input<string>('button');
  public Size = input<IButtonSizez>('lg');
  public IconType = input<IButtonIconType>('none');
  public IconCategory = input<string>('general');
  public IconName = input<string>('info');
  public Color = input<IButtonColor>('primary');
  public Text = input<string>('');
  public Style = input<object>({});

  public Click = output<any>();

  protected buttonStyles = computed(() => {
    return {
      'slf-button--default': this.Type() === 'default',
      'slf-button--bordered': this.Type() === 'bordered',
      'slf-button--outlined': this.Type() === 'outlined',
      'slf-button--icon': this.Type() === 'icon',
      'slf-button--lg': this.Size() === 'lg',
      'slf-button--md': this.Size() === 'md',
      'slf-button--sm': this.Size() === 'sm',
      'slf-button--primary': this.Color() === 'primary',
      'slf-button--secondary': this.Color() === 'secondary',
    }
  })

  handlerClick($event: any) {
    if (!this.IsDisabled() && !this.IsLoading()) {
      this.Click.emit($event);
    }
  }
}
