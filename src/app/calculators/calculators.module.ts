import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VoltioMainCalculatorComponent } from './voltio-main-calculator.component';
import { CalculatorRoutes } from './calculators.routing';
import { RouterModule } from '@angular/router';
import { DemoMaterialModule } from '../demo-material-module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { CalculatorService } from './calculator.service';

@NgModule({
  declarations: [VoltioMainCalculatorComponent],
  imports: [
    CommonModule,
    FormsModule,
    DemoMaterialModule,
    FlexLayoutModule,
    RouterModule.forChild(CalculatorRoutes)
  ],
  providers: [CalculatorService]
})
export class CalculatorsModule {}
