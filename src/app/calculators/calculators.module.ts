import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VoltioMainCalculatorComponent } from './voltio-main-calculator.component';
import { CalculatorRoutes } from './calculators.routing';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [VoltioMainCalculatorComponent],
  imports: [CommonModule, RouterModule.forChild(CalculatorRoutes)]
})
export class CalculatorsModule {}
