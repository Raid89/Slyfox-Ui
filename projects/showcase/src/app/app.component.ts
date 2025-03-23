import { SlyfoxUiAvatarComponent } from './../../../slyfox-components/avatar/avatar.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SlyfoxUiInputComponent } from '../../../slyfox-components/input/input.component';
import { SlyfoxUiButtonComponent } from './../../../slyfox-components/button/button.component';
import { SlyfoxUiTyphographyComponent } from '../../../slyfox-components/typography/typography.component';
import { SlyfoxUiIconComponent } from '../../../slyfox-components/icons/icons.component';
import { SlyfoxUiCheckboxComponent } from '../../../slyfox-components/checkbox/checkbox.component';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [SlyfoxUiButtonComponent, SlyfoxUiAvatarComponent, SlyfoxUiCheckboxComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'showcase';

  form: FormGroup;

  constructor(build: FormBuilder) {
    this.form = build.group({
      'checked': [{value: true, disabled: false}],
      'disable': [{value: true, disabled: true}],
      'unchecked': [false],
      'circleChecked': [true],
      'circleUnchecked': [false],
    })
  }

  formControl(control: string): FormControl {
    return this.form.get(control) as FormControl;
  }
}
