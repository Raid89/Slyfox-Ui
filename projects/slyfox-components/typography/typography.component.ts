import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

/** Tipografías para títulos (Headings) */
type HeadingTypes = 'heading-sm' | 'heading-md' | 'heading-lg' | 'heading-xl';

/** Tipografías para subtítulos en negrita (Bold) */
type SubtitleBoldTypes =
  | 'subtitle-bold-sm'
  | 'subtitle-bold-md'
  | 'subtitle-bold-lg'
  | 'subtitle-bold-xl';

/** Tipografías para subtítulos medianos (Medium) */
type SubtitleMediumTypes =
  | 'subtitle-medium-sm'
  | 'subtitle-medium-md'
  | 'subtitle-medium-lg'
  | 'subtitle-medium-xl';

/** Tipografías para subtítulos regulares (Regular) */
type SubtitleRegularTypes =
  | 'subtitle-regular-sm'
  | 'subtitle-regular-md'
  | 'subtitle-regular-lg'
  | 'subtitle-regular-xl';

/** Tipografías para párrafos medianos (Medium) */
type ParagraphMediumTypes =
  | 'paragraph-medium-sm'
  | 'paragraph-medium-md'
  | 'paragraph-medium-lg';

/** Tipografías para párrafos regulares (Regular) */
type ParagraphRegularTypes =
  | 'paragraph-regular-sm'
  | 'paragraph-regular-md'
  | 'paragraph-regular-lg';

/** Unión de todos los tipos tipográficos */
type ITypographyTypes =
  | HeadingTypes
  | SubtitleBoldTypes
  | SubtitleMediumTypes
  | SubtitleRegularTypes
  | ParagraphMediumTypes
  | ParagraphRegularTypes;

@Component({
  selector: 'slf-ui-typography',
  imports: [CommonModule],
  templateUrl: `./typography.component.html`,
  styleUrl: `./typography.component.scss`,
})

export class SlyfoxUiTyphographyComponent {

  public Type = input.required<ITypographyTypes>();
  public CustomStyles = input<object>();
}
