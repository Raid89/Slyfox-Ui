import { CommonModule } from '@angular/common';
import { Component, input, OnInit } from '@angular/core';
import { IComponentProperty } from '../../interfaces/properties.interface';
@Component({
  selector: 'table-properties-name',
  templateUrl: './properties-table.component.html',
  imports: [CommonModule],
  styleUrls: ['./properties-table.component.scss']
})
export class PropertiesTableComponent implements OnInit {
  constructor() { }

  public Properties = input<IComponentProperty[]>([]);
  public ComponentName = input<string>('');
  ngOnInit(): void { }
}
