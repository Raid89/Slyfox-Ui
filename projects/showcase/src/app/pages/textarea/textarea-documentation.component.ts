import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SlyfoxUiTextareaComponent } from '../../../../../slyfox-components/textarea/textarea.component';
import { PropertiesTableComponent } from '../properties-table/properties-table.component';
import { IComponentProperty } from '../../interfaces/properties.interface';
import { CssVarsTableComponent } from '../../shared/css-vars-table';

@Component({
  selector: 'app-textarea-documentation',
  standalone: true,
  imports: [
    CommonModule,
    SlyfoxUiTextareaComponent,
    PropertiesTableComponent,
    CssVarsTableComponent
  ],
  templateUrl: './textarea-documentation.component.html',
  styleUrls: ['./textarea-documentation.component.scss']
})
export class TextareaDocumentationComponent {
  // Form controls
  public basicFormControl = new FormControl('');
  public validationFormControl = new FormControl('', [Validators.required]);
  public readonlyFormControl = new FormControl({ value: 'This is a readonly textarea with some default text.', disabled: true });

  // Code examples
  public codeExamples = {
    basic: `<slf-ui-textarea
  [Label]="'Basic Textarea'"
  [Placeholder]="'Enter your text here'"
  [FormControl]="basicFormControl">
</slf-ui-textarea>`,

    validation: `<slf-ui-textarea
  [Label]="'Required Textarea'"
  [Placeholder]="'This field is required'"
  [FormControl]="validationFormControl"
  [Error]="validationFormControl.errors?.['required'] && validationFormControl.touched ? 'This field is required' : undefined"
  [Hint]="'Please enter some text'">
</slf-ui-textarea>`,

    readonly: `<slf-ui-textarea
  [Label]="'Readonly Textarea'"
  [FormControl]="readonlyFormControl"
  [ReadOnly]="true">
</slf-ui-textarea>`,

    customStyles: `<slf-ui-textarea
  [Label]="'Custom Styled Textarea'"
  [FormControl]="basicFormControl"
  [LabelStyles]="{'color': 'blue', 'font-weight': 'bold'}"
  [InputStyles]="{'border-color': 'blue', 'background-color': '#f0f0f0', 'min-height': '100px'}">
</slf-ui-textarea>`
  };

  // Properties for the documentation table
  public textareaProperties: IComponentProperty[] = [
    {
      property: 'Id',
      description: 'Unique identifier for the textarea element',
      type: 'string',
      values: 'Any string value',
      default: "''"
    },
    {
      property: 'Name',
      description: 'Name attribute for the textarea element',
      type: 'string',
      values: 'Any string value',
      default: "''"
    },
    {
      property: 'Placeholder',
      description: 'Placeholder text for the textarea',
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
      property: 'Label',
      description: 'Label text for the textarea',
      type: 'string',
      values: 'Any string value',
      default: "''"
    },
    {
      property: 'Hint',
      description: 'Helper text displayed below the textarea',
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
      description: 'Whether the textarea is readonly',
      type: 'boolean',
      values: 'true | false',
      default: 'false'
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
      description: 'Custom styles for the textarea element',
      type: 'object',
      values: 'CSS style object',
      default: '{}'
    }
  ];

  // CSS Variables for the documentation table
  public textareaCssVars = [
    { name: '--textarea-bg', default: '#fff', description: 'Fondo del textarea' },
    { name: '--textarea-border', default: '1px solid var(--border-color-75)', description: 'Borde' },
    { name: '--textarea-radius', default: '8px', description: 'Radio del borde' },
    { name: '--textarea-padding', default: '1rem 1.4rem', description: 'Padding interno' },
    { name: '--textarea-font-size', default: '1.6rem', description: 'Tamaño de fuente' },
    { name: '--textarea-label-color', default: '#36455D', description: 'Color del label' },
    { name: '--textarea-label-font-size', default: '1.6rem', description: 'Tamaño fuente label' },
    { name: '--textarea-label-font-weight', default: '700', description: 'Peso fuente label' },
    { name: '--textarea-placeholder-color', default: 'var(--border-color-400)', description: 'Color placeholder' },
    { name: '--textarea-disabled-bg', default: 'var(--fill-color-75)', description: 'Fondo deshabilitado' },
    { name: '--textarea-disabled-color', default: 'var(--text-color-100)', description: 'Texto deshabilitado' },
    { name: '--textarea-error-color', default: 'var(--error-color-200)', description: 'Color error' },
    { name: '--textarea-success-color', default: 'var(--success-color-200)', description: 'Color éxito' }
  ];
}
