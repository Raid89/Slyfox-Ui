import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'css-vars-table',
  imports: [CommonModule],
  templateUrl: './css-vars-table.component.html',
  styleUrls: ['./css-vars-table.component.scss']
})
export class CssVarsTableComponent {
  @Input() variables: Array<{ name: string; default: string; description: string }> = [];
  @Input() example?: string;
  @Input() exampleTitle?: string;
}
