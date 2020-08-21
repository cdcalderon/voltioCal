import { Routes } from '@angular/router';
import { VoltioMainCalculatorComponent } from './voltio-main-calculator.component';

export const CalculatorRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'voltio-calculator'
      },
      {
        path: 'voltio-calculator',
        component: VoltioMainCalculatorComponent
      }
    ]
  }
];
