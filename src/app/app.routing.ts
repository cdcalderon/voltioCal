import { Routes } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';

export const AppRoutes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: '',
        redirectTo: 'pipeline',
        pathMatch: 'full'
      },
      {
        path: 'material',
        loadChildren: () =>
          import('./material-component/material.module').then(
            m => m.MaterialComponentsModule
          )
      },
      {
        path: 'pipeline',
        loadChildren: () =>
          import('./pipeline/pipeline.module').then(m => m.PipelineModule)
      },
      {
        path: 'proposal',
        loadChildren: () =>
          import('./proposals/proposals.module').then(m => m.ProposalsModule)
      }
    ]
  }
];
