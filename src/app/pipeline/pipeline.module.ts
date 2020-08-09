import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DemoMaterialModule } from '../demo-material-module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PipelineComponent } from './pipeline.component';
import { PipelineRoutes } from './pipeline.routing';
import { TicketDialogContent } from './dialog-content.component';
import { PipelineContractDetailComponent } from './pipeline-contract-detail/pipeline-contract-detail.component';
import { PipelineOverviewComponent } from './pipeline-overview/pipeline-overview.component';

@NgModule({
  imports: [
    CommonModule,
    DemoMaterialModule,
    FlexLayoutModule,
    RouterModule.forChild(PipelineRoutes)
  ],
  declarations: [
    PipelineComponent,
    TicketDialogContent,
    PipelineContractDetailComponent,
    PipelineOverviewComponent
  ],
  entryComponents: [TicketDialogContent]
})
export class PipelineModule {}
