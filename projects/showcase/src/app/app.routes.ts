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
  // {
  //   path: 'typography',
  //   loadComponent: () => import('./pages/typography/typography.component').then(m => m.TypographyComponent)
  // },
  // {
  //   path: 'icons',
  //   loadComponent: () => import('./pages/icons/icons.component').then(m => m.IconsComponent)
  // }
];
