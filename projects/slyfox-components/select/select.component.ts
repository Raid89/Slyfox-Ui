import { Component, computed, input, output, signal, ContentChild, TemplateRef } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SlyfoxUiIconComponent } from "../icons/icons.component";
import { animate, style, transition, trigger } from '@angular/animations';

export interface ISelectOption {
  value: string;
  label: string;
  disabled?: boolean;
  data?: any; // Para datos adicionales que queramos pasar a la plantilla
}

type IInputIconPosition = 'left' | 'right' | 'double'
@Component({
  selector: 'slf-ui-select',
  imports: [CommonModule, ReactiveFormsModule, SlyfoxUiIconComponent],
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  animations: [
    trigger('dropdownAnimation', [
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'scale(1, 0)',
          transformOrigin: 'top',
          overflow: 'hidden'
        }),
        animate('200ms cubic-bezier(0.4, 0.0, 0.2, 1)', style({
          opacity: 1,
          transform: 'scale(1, 1)',
          overflow: 'hidden'
        })),
        style({ overflow: 'auto' }) // Restaurar overflow al final
      ]),
      transition(':leave', [
        style({
          overflow: 'hidden'
        }),
        animate('300ms cubic-bezier(0.4, 0.0, 0.2, 1)', style({
          opacity: 0,
          transform: 'scale(1, 0)',
          transformOrigin: 'top'
        }))
      ])
    ])
  ]
})
export class SlyfoxUiSelectComponent {
  @ContentChild('optionTemplate') optionTemplate?: TemplateRef<any>;

  protected selectFormControl = new FormControl();

  // Inputs
  public Id = input<string>('');
  public Name = input<string>('');
  public Placeholder = input<string>('');
  public FormControl = input.required<FormControl>();
  public Label = input<string>('');
  public Hint = input<string>('');
  public Error = input<string | undefined>();
  public ReadOnly = input<boolean>(false);
  public iconPosition = input<IInputIconPosition>('right');
  public SelectOptions = input<ISelectOption[]>([]);
  public IsMultiSelect = input<boolean>(false);

  // Styles
  public LabelStyles = input<object>({});
  public InputStyles = input<object>({});

  // Outputs
  public onChange = output<Event>();

  public isShaking = signal(false);

  // Signals
  protected selectedItems = signal<ISelectOption[]>([]);
  protected isOpen = signal<boolean>(false);

  //Getters
  public ClassList = computed(() => {
    return {
      'slf-input--error': this.Error(),
      'slf-input--icon-left': this.iconPosition() === 'left',
      'slf-input--icon-right': this.iconPosition() === 'right',
      'slf-input--icon-double': this.iconPosition() === 'double',
      'slf-input--readonly': this.ReadOnly(),
      'shake': this.isShaking()
    }
  })

  constructor() {
    // Inicializar el form control con un array vacío para multiselect
    this.selectFormControl.setValue([]);
  }

  public handleChange(event: Event) {
    this.onChange.emit(event);

    if (this.Error()) {
      this.isShaking.set(true);
      setTimeout(() => {
        this.isShaking.set(false);
      }, 300);
    }
  }

  protected toggleOption(option: ISelectOption) {
    const currentSelection = this.selectedItems();

    if (this.IsMultiSelect()) {
      // Lógica para multiselect
      const index = currentSelection.findIndex(item => item.value === option.value);

      if (index === -1) {
        // Agregar opción
        this.selectedItems.set([...currentSelection, option]);
      } else {
        // Remover opción
        this.selectedItems.set(currentSelection.filter(item => item.value !== option.value));
      }
    } else {
      // Lógica para single select
      this.selectedItems.set([option]);
      this.isOpen.set(false); // Cerrar dropdown al seleccionar en modo single
    }

    // Actualizar el form control con los valores seleccionados
    const values = this.selectedItems().map(item => item.value);
    this.selectFormControl.setValue(this.IsMultiSelect() ? values : values[0] || null);
    this.FormControl()?.setValue(this.IsMultiSelect() ? values : values[0] || null);

    this.handleChange(new Event('change'));
  }

  protected isSelected(option: ISelectOption): boolean {
    return this.selectedItems().some(item => item.value === option.value);
  }

  protected toggleDropdown() {
    this.isOpen.set(!this.isOpen());
  }

  protected getSelectedDisplay(): ISelectOption[] {
    return this.selectedItems();
  }

  protected closeDropdown(event: MouseEvent) {
    // Cerrar el dropdown cuando se hace click fuera del componente
    if (!(event.target as HTMLElement).closest('.slf-input-container')) {
      this.isOpen.set(false);
    }
  }
}
