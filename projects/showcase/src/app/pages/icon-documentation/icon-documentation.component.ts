import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlyfoxUiIconComponent } from '../../../../../slyfox-components/icons/icons.component';
import { FormsModule } from '@angular/forms';
import iconsList from '../../../assets/icons-list.json';

@Component({
  selector: 'app-icon-documentation',
  standalone: true,
  imports: [CommonModule, FormsModule, SlyfoxUiIconComponent],
  templateUrl: './icon-documentation.component.html',
  styleUrls: ['./icon-documentation.component.scss']
})
export class IconDocumentationComponent {
  // Listado de iconos disponible, ahora importado dinámicamente
  icons = iconsList;
  // Ejemplo de uso
  example = `<slf-ui-icon category="general" name="check-verified-01" [size]="24"></slf-ui-icon>`;
  search = '';

  // Paginación
  page = 1;
  pageSize = 60;
  copiedIcon: string|null = null;
  copyTimeout: any;

  get filteredIcons() {
    const term = this.search.trim().toLowerCase();
    let filtered = this.icons;
    if (term) {
      filtered = this.icons.filter((icon: any) =>
        icon.name.toLowerCase().includes(term) ||
        icon.category.toLowerCase().includes(term)
      );
    }
    const start = (this.page - 1) * this.pageSize;
    return filtered.slice(start, start + this.pageSize);
  }
  get totalIcons() {
    const term = this.search.trim().toLowerCase();
    if (!term) return this.icons.length;
    return this.icons.filter((icon: any) =>
      icon.name.toLowerCase().includes(term) ||
      icon.category.toLowerCase().includes(term)
    ).length;
  }
  get totalPages() {
    return Math.ceil(this.totalIcons / this.pageSize);
  }

  // Paginador compacto
  get paginatorPages() {
    const total = this.totalPages;
    const current = this.page;
    const delta = 2;
    const range = [];
    for (let i = 1; i <= total; i++) {
      if (i === 1 || i === total || (i >= current - delta && i <= current + delta)) {
        range.push(i);
      } else if (range[range.length - 1] !== null) {
        range.push(null);
      }
    }
    return range;
  }

  goToPage(p: number) {
    if (p < 1 || p > this.totalPages) return;
    this.page = p;
  }

  // Copiar icono al portapapeles
  copyIcon(icon: any) {
    const snippet = `<slf-ui-icon category=\"${icon.category}\" name=\"${icon.name}\" [size]=\"24\"></slf-ui-icon>`;
    navigator.clipboard.writeText(snippet);
    this.copiedIcon = `${icon.category}/${icon.name}`;
    clearTimeout(this.copyTimeout);
    this.copyTimeout = setTimeout(() => {
      this.copiedIcon = null;
    }, 1200);
  }
}
