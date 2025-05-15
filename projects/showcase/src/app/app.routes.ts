import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/getting-started/getting-started.component').then(m => m.GettingStartedComponent)
  },
  {
    path: 'guide',
    loadComponent: () => import('./pages/guide/guide.component').then(m => m.GuideComponent)
  },
  {
    path: 'checkbox',
    loadComponent: () => import('./pages/checkbox/checkbox.component').then(m => m.CheckboxComponent)
  },
  {
    path: 'button',
    loadComponent: () => import('./pages/button/button.component').then(m => m.ButtonComponent)
  },
  {
    path: 'avatar',
    loadComponent: () => import('./pages/avatar/avatar.component').then(m => m.AvatarComponent)
  },
  {
    path: 'input',
    loadComponent: () => import('./pages/input/input-documentation.component').then(m => m.InputDocumentationComponent)
  },
  {
    path: 'input-otp',
    loadComponent: () => import('./pages/input-otp/input-otp-documentation.component').then(m => m.InputOtpDocumentationComponent)
  },
  {
    path: 'textarea',
    loadComponent: () => import('./pages/textarea/textarea-documentation.component').then(m => m.TextareaDocumentationComponent)
  },
  {
    path: 'toggle',
    loadComponent: () => import('./pages/toggle/toggle-documentation.component').then(m => m.ToggleDocumentationComponent)
  },
  {
    path: 'select',
    loadComponent: () => import('./pages/select/select-documentation.component').then(m => m.SelectDocumentationComponent)
  },
  // {
  //   path: 'typography',
  //   loadComponent: () => import('./pages/typography/typography.component').then(m => m.TypographyComponent)
  // },
  // {
  //   path: 'icons',
  //   loadComponent: () => import('./pages/icons/icons.component').then(m => m.IconsComponent)
  // }
];
