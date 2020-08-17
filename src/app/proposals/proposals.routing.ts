import { Routes } from '@angular/router';
import { ProposalComponent } from './proposal.component';
import { ProposalDashboardComponent } from './proposal-dashboard/proposal-dashboard.component';
import { LeadsComponent } from './leads/leads.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { ProposalListComponent } from './proposal-list/proposal-list.component';
import { CreateProposalComponent } from './create-proposal/create-proposal.component';

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
      },
      {
        path: 'leads',
        component: LeadsComponent
      },
      {
        path: 'leads/appointments',
        component: AppointmentsComponent
      },
      {
        path: 'leads/proposal-list',
        component: ProposalListComponent
      },
      {
        path: 'leads/create-proposal',
        component: CreateProposalComponent
      }
    ]
  }
];
