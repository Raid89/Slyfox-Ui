import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlyfoxUiAvatarComponent } from '../../../../../slyfox-components/avatar/avatar.component';
import { IComponentProperty } from '../../interfaces/properties.interface';
import { PropertiesTableComponent } from '../properties-table/properties-table.component';


@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [CommonModule, SlyfoxUiAvatarComponent, PropertiesTableComponent],
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent {
  showTextCode = false;
  showImageCode = false;
  imageExample = 'https://media.licdn.com/dms/image/v2/D4E35AQEXGnvx64u0Mw/profile-framedphoto-shrink_200_200/B4EZVwQrcXHcAY-/0/1741345175668?e=1744070400&v=beta&t=gMEeKyVnSWCzjE1mO82rUdzdL-GkeWRbLOMST841fgQ';

  // Datos de la tabla de propiedades
  avatarProperties: IComponentProperty[] = [
    {
      property: 'Size',
      description: 'Define el tamaño del avatar',
      type: 'string',
      values: "'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'",
      default: "'md'"
    },
    {
      property: 'Src',
      description: 'URL de la imagen para el avatar',
      type: 'string',
      values: 'URL válida',
      default: 'undefined'
    },
    {
      property: 'Text',
      description: 'Texto a mostrar cuando no hay imagen',
      type: 'string',
      values: 'Cualquier texto',
      default: 'undefined'
    },
    {
      property: 'Bordered',
      description: 'Añade un borde al avatar',
      type: 'boolean',
      values: 'true | false',
      default: 'false'
    },
    {
      property: 'BorderColor',
      description: 'Color del borde del avatar',
      type: 'string',
      values: "'primary' | 'secondary'",
      default: "'primary'"
    },
    {
      property: 'BackgroundColor',
      description: 'Color de fondo del avatar',
      type: 'string',
      values: "'primary' | 'secondary'",
      default: "'primary'"
    },
    {
      property: 'IconCategory',
      description: 'Categoría del icono a mostrar',
      type: 'string',
      values: 'Nombre de la categoría',
      default: 'undefined'
    },
    {
      property: 'IconName',
      description: 'Nombre del icono a mostrar',
      type: 'string',
      values: 'Nombre del icono',
      default: 'undefined'
    },
    {
      property: "Alt",
      description: "Texto alternativo para el avatar",
      type: "string",
      values: "Texto alternativo",
      default: "undefined"
    },
    {
      property: "Styles",
      description: "Estilos personalizados para el avatar",
      type: "object",
      values: "Objeto de estilos",
      default: "undefined"
    }
  ];
}
