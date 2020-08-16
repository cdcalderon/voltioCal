import { Routes } from '@angular/router';
import { ProposalComponent } from './proposal.component';
import { ProposalDashboardComponent } from './proposal-dashboard/proposal-dashboard.component';

export const ProposalRoutes: Routes = [
  {
    path: '',
    component: ProposalComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard'
      },
      {
        path: 'dashboard',
        component: ProposalDashboardComponent
      }
    ]
  }
];
