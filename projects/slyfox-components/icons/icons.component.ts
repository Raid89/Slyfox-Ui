import { CommonModule } from '@angular/common';
import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'slf-ui-icon',
  imports: [CommonModule],
  templateUrl: `./icons.component.html`,
  styleUrl: `./icons.component.scss`,
})
export class SlyfoxUiIconComponent {
  /** Categoría del icono (ej: weather, general, users, etc.) */
  public category = input.required<string>();

  /** Nombre del icono dentro de la categoría */
  public name = input.required<string>();
  /** Tamaño del icono en `px`, por defecto es 24px */
  public size = input<number>(24);
  /** Ancho del icono */
  public weight = input<number>(1);

  get iconPath(): string {
    return `../${this.category()}.svg#${this.name()}`;
  }
}
