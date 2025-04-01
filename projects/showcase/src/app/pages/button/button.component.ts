import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlyfoxUiButtonComponent } from '../../../../../slyfox-components/button/button.component';
import { IComponentProperty } from '../../interfaces/properties.interface';
import { PropertiesTableComponent } from '../properties-table/properties-table.component';
@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule, SlyfoxUiButtonComponent, PropertiesTableComponent],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  showPrimaryCode = false;
  showSecondaryCode = false;

  buttonProperties: IComponentProperty[] = [
    {
      property: 'Text',
      description: 'Texto del botón',
      type: 'string',
      values: 'Texto del botón',
      default: 'undefined'
    },
    {
      property: 'Type',
      description: 'Tipo de botón',
      type: 'string',
      values: 'default | bordered | outlined | icon',
      default: 'default'
    },
    {
      property: 'Size',
      description: 'Tamaño del botón',
      type: 'string',
      values: 'lg | md | sm',
      default: 'lg'
    },
    {
      property: 'IconType',
      description: 'Posición del icono',
      type: 'string',
      values: 'none | left | right | double',
      default: 'none'
    },
    {
      property: 'IconCategory',
      description: 'Categoría del icono',
      type: 'string',
      values: 'Nombre de la categoría',
      default: 'undefined'
    },
    {
      property: 'IconName',
      description: 'Nombre del icono',
      type: 'string',
      values: 'Nombre del icono',
      default: 'undefined'
    },
    {
      property: 'Color',
      description: 'Color del botón',
      type: 'string',
      values: 'primary | secondary',
      default: 'primary'
    },
    {
      property: 'IsDisabled',
      description: 'Deshabilita el botón',
      type: 'boolean',
      values: 'true | false',
      default: 'false'
    },
    {
      property: 'IsLoading',
      description: 'Muestra un loading en el botón',
      type: 'boolean',
      values: 'true | false',
      default: 'false'
    }
  ]

}
