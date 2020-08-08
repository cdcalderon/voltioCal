import { Routes } from '@angular/router';

import { PipelineComponent } from './pipeline.component';

export const PipelineRoutes: Routes = [
  {
    path: '',
    component: PipelineComponent,
    data: {
      title: 'Pipeline',
      urls: [{ title: 'Dashboard', url: '/dashboard' }, { title: 'Pipeline' }]
    }
  }
];
