import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SlyfoxUiSelectComponent } from '../../../../../slyfox-components/select/select.component';
import { SlyfoxUiIconComponent } from '../../../../../slyfox-components/icons/icons.component';
import { PropertiesTableComponent } from '../properties-table/properties-table.component';
import { IComponentProperty } from '../../interfaces/properties.interface';
import { CssVarsTableComponent } from '../../shared/css-vars-table';

@Component({
  selector: 'app-select-documentation',
  standalone: true,
  imports: [
    CommonModule,
    SlyfoxUiSelectComponent,
    SlyfoxUiIconComponent,
    PropertiesTableComponent,
    CssVarsTableComponent
  ],
  templateUrl: './select-documentation.component.html',
  styleUrls: ['./select-documentation.component.scss']
})
export class SelectDocumentationComponent {
  // Form controls
  public basicFormControl = new FormControl('');
  public passwordFormControl = new FormControl('');
  public emailFormControl = new FormControl('', [Validators.email]);
  public numberFormControl = new FormControl('');
  public readonlyFormControl = new FormControl({ value: 'Readonly value', disabled: true });
  public validationFormControl = new FormControl('', [Validators.required]);
  public userFormControl = new FormControl('');
  public iconFormControl = new FormControl('');
  public multiSelectFormControl = new FormControl([]);
  public usersMultiSelectFormControl = new FormControl([]);
  public iconMultiSelectFormControl = new FormControl([]);

  // Opciones para los diferentes ejemplos
  public basicOptions = [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
    { value: '4', label: 'Option 4' },
    { value: '5', label: 'Option 5' },
    { value: '6', label: 'Option 6' },
    { value: '7', label: 'Option 7' },
    { value: '8', label: 'Option 8' },
    { value: '9', label: 'Option 9' },
    { value: '10', label: 'Option 10' },
  ];

  public userOptions = [
    {
      value: '1',
      label: 'John Doe',
      data: {
        avatar: 'https://i.pravatar.cc/150?img=1',
        role: 'Developer'
      }
    },
    {
      value: '2',
      label: 'Jane Smith',
      data: {
        avatar: 'https://i.pravatar.cc/150?img=2',
        role: 'Designer'
      }
    },
    {
      value: '3',
      label: 'Mike Johnson',
      data: {
        avatar: 'https://i.pravatar.cc/150?img=3',
        role: 'Manager'
      }
    },
    {
      value: '4',
      label: 'Sarah Williams',
      data: {
        avatar: 'https://i.pravatar.cc/150?img=4',
        role: 'Product Owner'
      }
    }
  ];

  public iconOptions = [
    {
      value: '1',
      label: 'Search',
      data: {
        category: 'general',
        iconName: 'search-md'
      }
    },
    {
      value: '2',
      label: 'Settings',
      data: {
        category: 'general',
        iconName: 'settings-01'
      }
    },
    {
      value: '3',
      label: 'User',
      data: {
        category: 'users',
        iconName: 'user-02'
      }
    },
    {
      value: '4',
      label: 'Files',
      data: {
        category: 'files',
        iconName: 'file-01'
      }
    }
  ];

  // Code examples
  public codeExamples = {
    basic: `<slf-ui-select
  [Label]="'Basic Select'"
  [Placeholder]="'Select an option'"
  [FormControl]="basicFormControl"
  [SelectOptions]="basicOptions">
</slf-ui-select>`,

    basicMultiSelect: `<slf-ui-select
  [Label]="'Basic MultiSelect'"
  [Placeholder]="'Select multiple options'"
  [IsMultiSelect]="true"
  [FormControl]="multiSelectFormControl"
  [SelectOptions]="basicOptions">
</slf-ui-select>`,

    multiSelectWithAvatars: `<slf-ui-select
  [Label]="'MultiSelect with Avatars'"
  [Placeholder]="'Select team members'"
  [IsMultiSelect]="true"
  [FormControl]="usersMultiSelectFormControl"
  [SelectOptions]="userOptions">
  <ng-template #optionTemplate let-item>
    <div style="display: flex; align-items: center; gap: 12px;">
      <img [src]="item.data.avatar" style="width: 32px; height: 32px; border-radius: 50%;" />
      <div style="display: flex; flex-direction: column;">
        <span>{{item.label}}</span>
        <small style="color: #666;">{{item.data.role}}</small>
      </div>
    </div>
  </ng-template>
</slf-ui-select>`,

    multiSelectWithIcons: `<slf-ui-select
  [Label]="'MultiSelect with Icons'"
  [Placeholder]="'Select features'"
  [IsMultiSelect]="true"
  [FormControl]="iconMultiSelectFormControl"
  [SelectOptions]="iconOptions">
  <ng-template #optionTemplate let-item>
    <div style="display: flex; align-items: center; gap: 8px;">
      <slf-ui-icon [category]="item.data.category" [name]="item.data.iconName" [size]="20"/>
      <span>{{item.label}}</span>
    </div>
  </ng-template>
</slf-ui-select>`,

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
</slf-ui-input>`,

    withAvatar: `<slf-ui-select
  [Label]="'Select with Avatars'"
  [FormControl]="userFormControl"
  [SelectOptions]="userOptions">
  <ng-template #optionTemplate let-item>
    <div style="display: flex; align-items: center; gap: 12px;">
      <img [src]="item.data.avatar" style="width: 32px; height: 32px; border-radius: 50%;" />
      <div style="display: flex; flex-direction: column;">
        <span>{{item.label}}</span>
        <small style="color: #666;">{{item.data.role}}</small>
      </div>
    </div>
  </ng-template>
</slf-ui-select>`,

    withIcons: `<slf-ui-select
  [Label]="'Select with Icons'"
  [FormControl]="iconFormControl"
  [SelectOptions]="iconOptions">
  <ng-template #optionTemplate let-item>
    <div style="display: flex; align-items: center; gap: 8px;">
      <slf-ui-icon [category]="item.data.category" [name]="item.data.iconName" [size]="20"/>
      <span>{{item.label}}</span>
    </div>
  </ng-template>
</slf-ui-select>`
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
    },
    {
      property: 'IsMultiSelect',
      description: 'Enable multiple selection mode',
      type: 'boolean',
      values: 'true | false',
      default: 'false'
    }
  ];

  // CSS Variables for the documentation table
  public selectCssVars = [
    { name: '--select-bg', default: '#fff', description: 'Fondo del select' },
    { name: '--select-border', default: '1px solid var(--border-color-75)', description: 'Borde' },
    { name: '--select-radius', default: '8px', description: 'Radio del borde' },
    { name: '--select-padding', default: '0 1rem', description: 'Padding interno' },
    { name: '--select-font-size', default: '1.6rem', description: 'Tamaño de fuente' },
    { name: '--select-label-color', default: '#36455D', description: 'Color del label' },
    { name: '--select-label-font-size', default: '1.6rem', description: 'Tamaño fuente label' },
    { name: '--select-label-font-weight', default: '700', description: 'Peso fuente label' },
    { name: '--select-placeholder-color', default: 'var(--border-color-400)', description: 'Color placeholder' },
    { name: '--select-disabled-bg', default: 'var(--fill-color-75)', description: 'Fondo deshabilitado' },
    { name: '--select-disabled-color', default: 'var(--text-color-100)', description: 'Texto deshabilitado' },
    { name: '--select-error-color', default: 'var(--error-color-200)', description: 'Color error' },
    { name: '--select-success-color', default: 'var(--success-color-200)', description: 'Color éxito' }
  ];
}
