import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DemoMaterialModule } from '../demo-material-module';
import { ProposalComponent } from './proposal.component';
import { ProposalDashboardComponent } from './proposal-dashboard/proposal-dashboard.component';
import { RouterModule } from '@angular/router';
import { ProposalRoutes } from './proposals.routing';
import { ChartistModule } from 'ng-chartist';
import { ChartsModule } from 'ng2-charts';
import { NgApexchartsModule } from 'ng-apexcharts';

@NgModule({
  declarations: [ProposalComponent, ProposalDashboardComponent],
  imports: [
    CommonModule,
    DemoMaterialModule,
    ChartistModule,
    ChartsModule,
    FlexLayoutModule,
    NgApexchartsModule,
    RouterModule.forChild(ProposalRoutes)
  ]
})
export class ProposalsModule {}
