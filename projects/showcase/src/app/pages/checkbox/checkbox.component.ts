import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SlyfoxUiCheckboxComponent } from '../../../../../slyfox-components/checkbox/checkbox.component';
import { IComponentProperty } from '../../interfaces/properties.interface';
import { PropertiesTableComponent } from '../properties-table/properties-table.component';

@Component({
  selector: 'app-checkbox',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, SlyfoxUiCheckboxComponent, PropertiesTableComponent],
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent {
  form: FormGroup;
  showBasicCode = false;
  showSquareCode = false;
  showCircleCode = false;

  checkboxProperties: IComponentProperty[] = [
    {
      property: 'Id',
      description: 'Identificador único del checkbox',
      type: 'string',
      values: 'string',
      default: 'undefined'
    },
    {
      property: 'Type',
      description: 'Tipo de checkbox',
      type: 'string',
      values: 'squareCheck | squareSymbol | circleCheck | circleSymbol',
      default: 'squareCheck'
    },
    {
      property: 'Size',
      description: 'Tamaño del checkbox',
      type: 'string',
      values: 'md | sm',
      default: 'md'
    },
    {
      property: 'IsDisabled',
      description: 'Deshabilita el checkbox',
      type: 'boolean',
      values: 'true | false',
      default: 'false'
    },
    {
      property: 'FormControl',
      description: 'Control del formulario',
      type: 'FormControl',
      values: 'FormControl',
      default: 'undefined'
    },
  ]

  constructor(build: FormBuilder) {
    this.form = build.group({
      'checked': [{value: true, disabled: false}],
      'disable': [{value: true, disabled: true}],
      'unchecked': [false],
      'circleChecked': [true],
      'circleUnchecked': [false],
    });
  }

  formControl(control: string): FormControl {
    return this.form.get(control) as FormControl;
  }
}
