import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SlyfoxUiOtpComponent } from '../../../../../slyfox-components/input-otp/input-otp.component';
import { PropertiesTableComponent } from '../properties-table/properties-table.component';
import { IComponentProperty } from '../../interfaces/properties.interface';
import { CssVarsTableComponent } from '../../shared/css-vars-table';

@Component({
  selector: 'app-input-otp-documentation',
  standalone: true,
  imports: [CommonModule, SlyfoxUiOtpComponent, PropertiesTableComponent, CssVarsTableComponent],
  templateUrl: './input-otp-documentation.component.html',
  styleUrls: ['./input-otp-documentation.component.scss']
})
export class InputOtpDocumentationComponent {
  // Form Controls
  public basicFormControl = new FormControl('');
  public smFormControl = new FormControl('');
  public mdFormControl = new FormControl('');
  public lgFormControl = new FormControl('');
  public labelFormControl = new FormControl('');
  public validationFormControl = new FormControl('', [Validators.required]);
  public readonlyFormControl = new FormControl('1234');
  public lengthFormControl = new FormControl('');
  public styledFormControl = new FormControl('');

  // Code Examples
  public codeExamples = {
    basic: `<slf-ui-otp [FormControl]="otpControl"></slf-ui-otp>`,
    sizes: `<slf-ui-otp [FormControl]="otpControl" [Size]="'sm'"></slf-ui-otp>
<slf-ui-otp [FormControl]="otpControl" [Size]="'md'"></slf-ui-otp>
<slf-ui-otp [FormControl]="otpControl" [Size]="'lg'"></slf-ui-otp>`,
    label: `<slf-ui-otp
  [FormControl]="otpControl"
  [Label]="'Verification Code'"
  [Hint]="'Enter the 4-digit code sent to your email'"
></slf-ui-otp>`,
    validation: `<slf-ui-otp
  [FormControl]="otpControl"
  [Label]="'Security Code'"
  [Error]="otpControl.errors?.['required'] ? 'This field is required' : ''"
></slf-ui-otp>`,
    readonly: `<slf-ui-otp
  [FormControl]="otpControl"
  [ReadOnly]="true"
  [Label]="'Generated Code'"
></slf-ui-otp>`,
    length: `<slf-ui-otp
  [FormControl]="otpControl"
  [Length]="6"
  [Label]="'6-Digit Code'"
></slf-ui-otp>`,
    styled: `<slf-ui-otp
  [FormControl]="otpControl"
  [Label]="'Custom Style'"
  [LabelStyles]="{'color': 'var(--color-primary)'}"
  [InputStyles]="{'border-color': 'var(--color-primary)', 'background-color': 'var(--color-gray-50)'}"
></slf-ui-otp>`
  };

  // Properties Table
  public otpProperties: IComponentProperty[] = [
    {
      property: 'Id',
      type: 'string',
      default: 'required',
      description: 'Unique identifier for the OTP component',
      values: 'Any unique string value'
    },
    {
      property: 'FormControl',
      type: 'FormControl',
      default: 'required',
      description: 'The form control to bind the OTP value to',
      values: 'Angular FormControl instance'
    },
    {
      property: 'Length',
      type: 'number',
      default: '4',
      description: 'The number of digits in the OTP',
      values: 'Any positive number'
    },
    {
      property: 'Label',
      type: 'string',
      default: "''",
      description: 'The label text for the OTP input',
      values: 'Any string value'
    },
    {
      property: 'Hint',
      type: 'string',
      default: "''",
      description: 'The hint text displayed below the input',
      values: 'Any string value'
    },
    {
      property: 'Error',
      type: 'string | undefined',
      default: 'undefined',
      description: 'The error message to display',
      values: 'Any string value or undefined'
    },
    {
      property: 'ReadOnly',
      type: 'boolean',
      default: 'false',
      description: 'Whether the OTP input is readonly',
      values: 'true | false'
    },
    {
      property: 'Size',
      type: "'sm' | 'md' | 'lg'",
      default: "'md'",
      description: 'The size of the OTP input',
      values: "'sm' | 'md' | 'lg'"
    },
    {
      property: 'LabelStyles',
      type: 'object',
      default: '{}',
      description: 'Custom styles for the label',
      values: 'CSS style object'
    },
    {
      property: 'InputStyles',
      type: 'object',
      default: '{}',
      description: 'Custom styles for the input fields',
      values: 'CSS style object'
    }
  ];
}
