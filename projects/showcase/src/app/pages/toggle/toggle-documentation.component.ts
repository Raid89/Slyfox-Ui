import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SlyfoxUiOtpComponent } from '../../../../../slyfox-components/input-otp/input-otp.component';
import { PropertiesTableComponent } from '../properties-table/properties-table.component';
import { IComponentProperty } from '../../interfaces/properties.interface';
import { SlyfoxUiToggleComponent } from '../../../../../slyfox-components/toggle/toggle.component';

@Component({
  selector: 'app-toggle-documentation',
  standalone: true,
  imports: [CommonModule, SlyfoxUiToggleComponent, PropertiesTableComponent],
  templateUrl: './toggle-documentation.component.html',
  styleUrls: ['./toggle-documentation.component.scss']
})
export class ToggleDocumentationComponent {
  // Form Controls
  public basicFormControl = new FormControl({ value: false, disabled: false });

  // Code Examples
  public codeExamples = {
    basic: `<slf-ui-toggle [FormControl]="basicFormControl"></slf-ui-toggle>`,
  };

  // Properties Table
  public otpProperties: IComponentProperty[] = [
    {
      property: 'FormControl',
      type: 'FormControl',
      default: 'required',
      description: 'The form control to bind the toggle value to',
      values: 'Angular FormControl instance'
    },
    {
      property: 'Readonly',
      type: 'boolean',
      default: "''",
      description: 'The readonly option for the toggle input',
      values: 'Any string value'
    },
    {
      property: 'Disabled',
      type: 'boolean',
      default: "''",
      description: 'The label text for the toggle input',
      values: 'Any string value'
    },
    {
      property: 'Hint',
      type: 'string',
      default: "''",
      description: 'The hint text for the toggle input',
      values: 'Any string value'
    },

  ];
}
