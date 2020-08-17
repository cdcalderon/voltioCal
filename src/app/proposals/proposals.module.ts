import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoMaterialModule } from '../demo-material-module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { QuillModule } from 'ngx-quill';
import {
  CalendarModule,
  DateAdapter,
  CalendarDateFormatter
} from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ProposalDashboardComponent } from './proposal-dashboard/proposal-dashboard.component';
import { ProposalRoutes } from './proposals.routing';
import { ChartistModule } from 'ng-chartist';
import { ChartsModule } from 'ng2-charts';
import { NgApexchartsModule } from 'ng-apexcharts';
import { LeadsComponent, DialogContent } from './leads/leads.component';
import { ProposalComponent } from './proposal.component';
import { ProposalListComponent } from './proposal-list/proposal-list.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { CreateProposalComponent } from './create-proposal/create-proposal.component';

@NgModule({
  declarations: [
    ProposalComponent,
    ProposalDashboardComponent,
    LeadsComponent,
    ProposalListComponent,
    AppointmentsComponent,
    DialogContent,
    CreateProposalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DemoMaterialModule,
    ReactiveFormsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    FlexLayoutModule,
    QuillModule.forRoot(),
    NgApexchartsModule,
    PerfectScrollbarModule,
    Ng2SearchPipeModule,
    DragDropModule,
    ChartistModule,
    ChartsModule,
    NgxPaginationModule,
    RouterModule.forChild(ProposalRoutes)
  ],
  entryComponents: [DialogContent]
})
export class ProposalsModule {}
