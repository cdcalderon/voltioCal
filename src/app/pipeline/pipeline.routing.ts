import { Routes } from '@angular/router';

import { PipelineComponent } from './pipeline.component';
import { Component } from '@angular/core';
import { PipelineContractDetailComponent } from './pipeline-contract-detail/pipeline-contract-detail.component';
import { PipelineOverviewComponent } from './pipeline-overview/pipeline-overview.component';

export const PipelineRoutes: Routes = [
  {
    path: '',
    component: PipelineComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'overview'
      },
      {
        path: 'overview',
        component: PipelineOverviewComponent
      },
      {
        path: 'contract/:id',
        component: PipelineContractDetailComponent
      }
    ]
  }
];
