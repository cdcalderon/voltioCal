import { Injectable } from '@angular/core';
import { Adder } from './models/adder.model';

@Injectable()
export class CalculatorService {
  getLeds24Pack(): Adder {
    return {
      isSelected: true,
      price: 24,
      quantity: 2,
      description: 'LEDs 24 pack',
      total: 0,
      systemReducerPercentage: 0.06
    };
  }

  getThermostats(): Adder {
    return {
      isSelected: false,
      price: 90,
      quantity: 0,
      description: 'Thermostats',
      total: 0,
      systemReducerPercentage: 0.07
    };
  }
}
