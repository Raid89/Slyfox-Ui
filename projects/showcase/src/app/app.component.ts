import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SlyfoxUiInputComponent } from '../../../slyfox-components/input/input.component';
import { SlyfoxUiButtonComponent } from './../../../slyfox-components/button/button.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SlyfoxUiButtonComponent, SlyfoxUiInputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'showcase';
}
