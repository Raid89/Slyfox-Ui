import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SlyfoxUiInputComponent } from '../../../slyfox-components/input/input.component';
import { SlyfoxUiButtonComponent } from './../../../slyfox-components/button/button.component';
import { SlyfoxUiTyphographyComponent } from '../../../slyfox-components/typography/typography.component';
import { SlyfoxUiIconComponent } from '../../../slyfox-components/icons/icons.component';

@Component({
  selector: 'app-root',
  imports: [SlyfoxUiButtonComponent, SlyfoxUiInputComponent, SlyfoxUiTyphographyComponent, SlyfoxUiIconComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'showcase';
}
