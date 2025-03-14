import { Component, input } from '@angular/core';

@Component({
  selector: 'slf-ui-button',
  imports: [],
  templateUrl: `./button.component.html`,
  styleUrl: `./button.component.scss`,
})
export class SlyfoxUiButtonComponent {

  public type = input('button');

}
