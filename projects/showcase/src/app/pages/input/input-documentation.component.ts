import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SlyfoxUiInputComponent } from '../../../../../slyfox-components/input/input.component';
import { SlyfoxUiIconComponent } from '../../../../../slyfox-components/icons/icons.component';
import { PropertiesTableComponent } from '../properties-table/properties-table.component';
import { CssVarsTableComponent } from '../../shared/css-vars-table';
import { IComponentProperty } from '../../interfaces/properties.interface';

@Component({
  selector: 'app-input-documentation',
  standalone: true,
  imports: [
    CommonModule,
    SlyfoxUiInputComponent,
    SlyfoxUiIconComponent,
    PropertiesTableComponent,
    CssVarsTableComponent
  ],
  templateUrl: './input-documentation.component.html',
  styleUrls: ['./input-documentation.component.scss']
})
export class InputDocumentationComponent {
  // Basic form controls
  public basicFormControl = new FormControl('');
  public passwordFormControl = new FormControl('');
  public emailFormControl = new FormControl('', [Validators.email]);
  public numberFormControl = new FormControl('');
  public readonlyFormControl = new FormControl({ value: 'Readonly value', disabled: true });
  public validationFormControl = new FormControl('', [Validators.required]);

  // Form controls with icons
  public leftIconFormControl = new FormControl('');
  public rightIconFormControl = new FormControl('');
  public doubleIconFormControl = new FormControl('');

  // Code examples
  public codeExamples = {
    basic: `<slf-ui-input
  [Label]="'Basic Input'"
  [Placeholder]="'Enter text here'"
  [FormControl]="basicFormControl">
</slf-ui-input>`,

    leftIcon: `<slf-ui-input
  [iconPosition]="'left'"
  [FormControl]="leftIconFormControl">
  <slf-ui-icon iconLeft [category]="'general'" [name]="'search'"></slf-ui-icon>
</slf-ui-input>`,

    rightIcon: `<slf-ui-input
  [iconPosition]="'right'"
  [FormControl]="rightIconFormControl">
  <slf-ui-icon iconRight [category]="'general'" [name]="'eye'"></slf-ui-icon>
</slf-ui-input>`,

    doubleIcon: `<slf-ui-input
  [iconPosition]="'double'"
  [FormControl]="doubleIconFormControl">
  <slf-ui-icon iconLeft [category]="'general'" [name]="'search'"></slf-ui-icon>
  <slf-ui-icon iconRight [category]="'general'" [name]="'eye'"></slf-ui-icon>
</slf-ui-input>`,

    validation: `<slf-ui-input
  [Label]="'Required Input'"
  [FormControl]="validationFormControl"
  [Error]="validationFormControl.errors?.['required'] && validationFormControl.touched ? 'This field is required' : undefined"
  [Hint]="'Please enter a value'">
</slf-ui-input>`,

    password: `<slf-ui-input
  [Type]="'password'"
  [FormControl]="passwordFormControl">
</slf-ui-input>`,

    email: `<slf-ui-input
  [Type]="'email'"
  [FormControl]="emailFormControl">
</slf-ui-input>`,

    number: `<slf-ui-input
  [Type]="'number'"
  [FormControl]="numberFormControl">
</slf-ui-input>`,

    readonly: `<slf-ui-input
  [ReadOnly]="true"
  [FormControl]="readonlyFormControl">
</slf-ui-input>`,

    customStyles: `<slf-ui-input
  [LabelStyles]="{'color': 'blue', 'font-weight': 'bold'}"
  [InputStyles]="{'border-color': 'blue', 'background-color': '#f0f0f0'}"
  [FormControl]="basicFormControl">
</slf-ui-input>`
  };

  // Properties for the documentation table
  public inputProperties: IComponentProperty[] = [
    {
      property: 'Id',
      description: 'Unique identifier for the input element',
      type: 'string',
      values: 'Any string value',
      default: "''"
    },
    {
      property: 'Name',
      description: 'Name attribute for the input element',
      type: 'string',
      values: 'Any string value',
      default: "''"
    },
    {
      property: 'Placeholder',
      description: 'Placeholder text for the input',
      type: 'string',
      values: 'Any string value',
      default: "''"
    },
    {
      property: 'FormControl',
      description: 'Angular FormControl for reactive forms',
      type: 'FormControl',
      values: 'Angular FormControl instance',
      default: 'required'
    },
    {
      property: 'Type',
      description: 'Type of the input (text, password, email, number, etc.)',
      type: 'string',
      values: 'text | password | email | number',
      default: "'text'"
    },
    {
      property: 'Label',
      description: 'Label text for the input',
      type: 'string',
      values: 'Any string value',
      default: "''"
    },
    {
      property: 'Hint',
      description: 'Helper text displayed below the input',
      type: 'string',
      values: 'Any string value',
      default: "''"
    },
    {
      property: 'Error',
      description: 'Error message to display when validation fails',
      type: 'string | undefined',
      values: 'Any string value or undefined',
      default: 'undefined'
    },
    {
      property: 'ReadOnly',
      description: 'Whether the input is readonly',
      type: 'boolean',
      values: 'true | false',
      default: 'false'
    },
    {
      property: 'iconPosition',
      description: 'Position of the icon(s) in the input',
      type: 'string',
      values: 'left | right | double',
      default: "'right'"
    },
    {
      property: 'LabelStyles',
      description: 'Custom styles for the label',
      type: 'object',
      values: 'CSS style object',
      default: '{}'
    },
    {
      property: 'InputStyles',
      description: 'Custom styles for the input element',
      type: 'object',
      values: 'CSS style object',
      default: '{}'
    }
  ];

  // CSS Variables for the documentation table
  public inputCssVars = [
    { name: '--input-bg', default: '#fff', description: 'Fondo del input' },
    { name: '--input-border', default: '1px solid var(--border-color-75)', description: 'Borde' },
    { name: '--input-radius', default: '8px', description: 'Radio del borde' },
    { name: '--input-padding', default: '0 1rem', description: 'Padding interno' },
    { name: '--input-font-size', default: '1.6rem', description: 'Tamaño de fuente' },
    { name: '--input-label-color', default: '#36455D', description: 'Color del label' },
    { name: '--input-label-font-size', default: '1.6rem', description: 'Tamaño fuente label' },
    { name: '--input-label-font-weight', default: '700', description: 'Peso fuente label' },
    { name: '--input-placeholder-color', default: 'var(--border-color-400)', description: 'Color placeholder' },
    { name: '--input-disabled-bg', default: 'var(--fill-color-75)', description: 'Fondo deshabilitado' },
    { name: '--input-disabled-color', default: 'var(--text-color-100)', description: 'Texto deshabilitado' },
    { name: '--input-error-color', default: 'var(--error-color-200)', description: 'Color error' },
    { name: '--input-success-color', default: 'var(--success-color-200)', description: 'Color éxito' }
  ];
}
