import { Component, computed, input, OnInit, output, signal } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { SlyfoxUiIconComponent } from '../icons/icons.component';
import { CommonModule } from '@angular/common';

type IAvatarSizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
type IAvatarColors = 'primary' | 'secondary';
interface ISizeConfig { small: IAvatarSizes, medium: IAvatarSizes, large: IAvatarSizes }

@Component({
  selector: 'slf-ui-avatar',
  imports: [SlyfoxUiIconComponent, CommonModule],
 templateUrl: `./avatar.component.html`,
  styleUrl: `./avatar.component.scss`,
})

export class SlyfoxUiAvatarComponent implements OnInit{
  public Size = input<IAvatarSizes>('md');
  public SizeConfig = input<ISizeConfig>();
  public Bordered = input<boolean>(false);
  public Src = input<string>('');
  public Alt = input<string>('Avatar');
  public IconName = input<string>('');
  public IconCategory = input<string>('');
  public Text = input<string>('');
  public Styles = input<object>({});
  public BorderColor = input<IAvatarColors>('primary');
  public BackgroundColor = input<IAvatarColors>('primary');

  protected avatarSize = signal<IAvatarSizes>(this.Size());

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.setResponsiveSize();
  }

  protected avatarClass = computed(() => {
    return {
      [`slf-avatar--${this.avatarSize()}`]: true,
      [`slf-avatar--border-${this.BorderColor()}`]: true,
      [`slf-avatar--bg-${this.BackgroundColor()}`]: true,
      'slf-avatar--bordered': this.Bordered()
    }
  })

  setResponsiveSize() {
    this.breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge
    ]).subscribe(result => {
      if (result.breakpoints[Breakpoints.XSmall] || result.breakpoints[Breakpoints.Small]) {
        this.avatarSize.set(this.SizeConfig()?.small || this.Size());
        this.setIconSize();
      } else if (result.breakpoints[Breakpoints.Medium]) {
        this.avatarSize.set(this.SizeConfig()?.medium || this.Size());
        this.setIconSize();
      } else {
        this.avatarSize.set(this.SizeConfig()?.large || this.Size());
        this.setIconSize();
      }
    });
  }

  setIconSize() {
    switch(this.avatarSize()) {
      case 'xs': return 16;
      case 'sm': return 20;
      case 'md': return 24;
      case 'lg': return 28;
      case 'xl': return 32;
      case 'xxl': return 32;
      default: return 24;
    }
  }
}
