import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, FormControl, ReactiveFormsModule } from '@angular/forms';
import { SlyfoxUiTooltipComponent, TooltipPosition } from '../../../../../slyfox-components/tooltip/tooltip.component';
import { SlyfoxUiInputComponent } from '../../../../../slyfox-components/input/input.component';
import { SlyfoxUiSelectComponent } from '../../../../../slyfox-components/select/select.component';
import { CssVarsTableComponent } from '../../shared/css-vars-table';
import { PropertiesTableComponent } from '../properties-table/properties-table.component';

@Component({
  selector: 'app-tooltip-documentation',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, SlyfoxUiTooltipComponent, SlyfoxUiInputComponent, SlyfoxUiSelectComponent, CssVarsTableComponent, PropertiesTableComponent],
  templateUrl: './tooltip-documentation.component.html',
})
export class TooltipDocumentationComponent {
  tooltipTitle: string = 'Título del Tooltip';
  tooltipText: string = 'Este es el texto del tooltip.';
  tooltipPosition: TooltipPosition = 'top-center';
  tooltipPositions: TooltipPosition[] = [
    'top-start', 'top-center', 'top-end',
    'bottom-start', 'bottom-center', 'bottom-end',
    'left-start', 'left-center', 'left-end',
    'right-start', 'right-center', 'right-end'
  ];
  tooltipType: 'primary' | 'secondary' = 'primary';
  tooltipTextColor: 'default' | 'error' | 'success' = 'default';
  tooltipTypes = [
    { label: 'Primario (Fondo blanco, texto gris)', value: 'primary' },
    { label: 'Secundario (Fondo gris, texto blanco)', value: 'secondary' }
  ];
  tooltipTextColors = [
    { label: 'Por defecto', value: 'default' },
    { label: 'Error', value: 'error' },
    { label: 'Éxito', value: 'success' }
  ];

  // CSS Variables for the documentation table
  public tooltipCssVars = [
    { name: '--tooltip-max-width', default: '320px', description: 'Ancho máximo' },
    { name: '--tooltip-bg-primary', default: '#fff', description: 'Fondo primario' },
    { name: '--tooltip-bg-secondary', default: '#788292', description: 'Fondo secundario' },
    { name: '--tooltip-color', default: '#fff', description: 'Color de texto' },
    { name: '--tooltip-color-primary', default: '#414651', description: 'Color de texto primario' },
    { name: '--tooltip-color-secondary', default: '#fff', description: 'Color de texto secundario' },
    { name: '--tooltip-radius', default: '8px', description: 'Radio del borde' },
    { name: '--tooltip-padding', default: '1em 1.25em', description: 'Padding interno' },
    { name: '--tooltip-font-size', default: '12px', description: 'Tamaño fuente' },
    { name: '--tooltip-shadow', default: 'var(--sly-shadow-lg)', description: 'Sombra' },
    { name: '--tooltip-opacity', default: '0.98', description: 'Opacidad' },
    { name: '--tooltip-z-index', default: '9999', description: 'Z-index' },
    { name: '--tooltip-title-color-default', default: '#414651', description: 'Color título' },
    { name: '--tooltip-title-font-size', default: '12px', description: 'Tamaño fuente título' },
    { name: '--tooltip-title-font-weight', default: '600', description: 'Peso fuente título' },
    { name: '--tooltip-title-line-height', default: '18px', description: 'Alto de línea título' },
    { name: '--tooltip-title-margin-bottom', default: '4px', description: 'Margen inferior título' },
    { name: '--tooltip-text-font-size', default: '12px', description: 'Tamaño fuente texto' },
    { name: '--tooltip-text-font-weight', default: '400', description: 'Peso fuente texto' },
    { name: '--tooltip-text-line-height', default: '24px', description: 'Alto de línea texto' },
    { name: '--tooltip-gap', default: '10px', description: 'Espaciado para posición' }
  ];

  // Properties for the documentation table
  public tooltipProperties = [
    { property: 'title', description: 'Título opcional del tooltip', type: 'string', values: '-', default: "''" },
    { property: 'text', description: 'Texto principal del tooltip', type: 'string', values: '-', default: "''" },
    { property: 'position', description: 'Posición del tooltip respecto al elemento', type: 'TooltipPosition', values: 'top-start, top-center, top-end, bottom-start, bottom-center, bottom-end, left-start, left-center, left-end, right-start, right-center, right-end', default: 'top-center' },
    { property: 'type', description: 'Estilo visual del tooltip', type: 'primary | secondary', values: 'primary, secondary', default: 'primary' },
    { property: 'textColor', description: 'Color del texto del tooltip', type: 'default | error | success', values: 'default, error, success', default: 'default' }
  ];

  // Form controls for demo
  tooltipTitleControl = new FormControl(this.tooltipTitle);
  tooltipTextControl = new FormControl(this.tooltipText);
  tooltipPositionControl = new FormControl(this.tooltipPosition);
  tooltipTypeControl = new FormControl(this.tooltipType);
  tooltipTextColorControl = new FormControl(this.tooltipTextColor);

  // Opciones para los selects del demo
  tooltipPositionOptions = this.tooltipPositions.map(p => ({ value: p, label: p }));
  tooltipTypeOptions = this.tooltipTypes.map(t => ({ value: t.value, label: t.label }));
  tooltipTextColorOptions = this.tooltipTextColors.map(c => ({ value: c.value, label: c.label }));

  constructor() {
    this.tooltipTitleControl.valueChanges.subscribe(v => this.tooltipTitle = v ?? '');
    this.tooltipTextControl.valueChanges.subscribe(v => this.tooltipText = v ?? '');
    this.tooltipPositionControl.valueChanges.subscribe(v => this.tooltipPosition = v ?? 'top-center');
    this.tooltipTypeControl.valueChanges.subscribe(v => this.tooltipType = v ?? 'primary');
    this.tooltipTextColorControl.valueChanges.subscribe(v => this.tooltipTextColor = v ?? 'default');
  }
}
