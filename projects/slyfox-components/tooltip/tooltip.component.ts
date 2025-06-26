import { Component, Input, HostListener, ElementRef, Renderer2, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

export type TooltipPosition =
  | 'top-start' | 'top-center' | 'top-end'
  | 'bottom-start' | 'bottom-center' | 'bottom-end'
  | 'left-start' | 'left-center' | 'left-end'
  | 'right-start' | 'right-center' | 'right-end';

export type TooltipType = 'primary' | 'secondary';

export type TooltipTextColor = 'default' | 'error' | 'success';

@Component({
  selector: 'sly-tooltip',
  standalone: true,
  imports: [CommonModule],
  template: `
    <ng-content></ng-content>
    <div
      class="slf-tooltip"
      [ngClass]="[position, 'slf-tooltip--' + type]"
      *ngIf="visible"
      [attr.data-position]="position"
      [style.zIndex]="9999"
    >
      <div class="slf-tooltip-title" *ngIf="title" [ngClass]="'slf-tooltip-textcolor--' + textColor">{{ title }}</div>
      <div class="slf-tooltip-text">{{ text }}</div>
      <div class="slf-tooltip-arrow" [ngClass]="position"></div>
    </div>
  `,
  styleUrls: ['./tooltip.component.scss']
})
export class SlyfoxUiTooltipComponent implements OnDestroy {
  @Input() title: string = '';
  @Input() text: string = '';
  @Input() position: TooltipPosition = 'top-center';
  @Input() type: TooltipType = 'primary';
  @Input() textColor: TooltipTextColor = 'default';

  visible = false;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(this.el.nativeElement, 'position', 'relative');
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.visible = true;
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.visible = false;
  }
  @HostListener('focusin') onFocusIn() {
    this.visible = true;
  }
  @HostListener('focusout') onFocusOut() {
    this.visible = false;
  }

  ngOnDestroy() {
    this.visible = false;
  }
}
