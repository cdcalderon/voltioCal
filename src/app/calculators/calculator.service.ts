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
      price: 380,
      quantity: 0,
      description: 'Thermostats',
      total: 0,
      systemReducerPercentage: 0.07
    };
  }

  getVoltioBox(): Adder {
    return {
      isSelected: false,
      price: 380,
      quantity: 0,
      description: 'Voltio Box',
      total: 0,
      systemReducerPercentage: 0.1
    };
  }

  getVoltioWash(): Adder {
    return {
      isSelected: false,
      price: 456,
      quantity: 0,
      description: 'Voltio Wash',
      total: 0,
      systemReducerPercentage: 0.2
    };
  }

  getMPU(): Adder {
    return {
      isSelected: false,
      price: 2500,
      quantity: 0,
      description: 'MPU',
      total: 0,
      systemReducerPercentage: 0.2
    };
  }

  getAeroseal(): Adder {
    return {
      isSelected: false,
      price: 1480,
      quantity: 0,
      description: 'Aeroseal',
      total: 0,
      systemReducerPercentage: 0.2
    };
  }

  getEEWindows(): Adder {
    return {
      isSelected: false,
      price: 1480,
      quantity: 0,
      description: 'EE Windows',
      total: 0,
      systemReducerPercentage: 0.2
    };
  }

  getInsulationSqft(): Adder {
    return {
      isSelected: false,
      price: 1.2,
      quantity: 0,
      description: 'Insulation sq ft',
      total: 0,
      systemReducerPercentage: 0.2
    };
  }

  getRoofing(): Adder {
    return {
      isSelected: false,
      price: 0,
      quantity: 0,
      description: 'Insulation sq ft',
      total: 0,
      systemReducerPercentage: 0.2
    };
  }

  getHVACUnit(): Adder {
    return {
      isSelected: false,
      price: 5000,
      quantity: 0,
      description: 'Insulation sq ft',
      total: 0,
      systemReducerPercentage: 0.2
    };
  }

  getSmallFee(): Adder {
    return {
      isSelected: false,
      price: 750,
      quantity: 0,
      description: 'Insulation sq ft',
      total: 0,
      systemReducerPercentage: 0.2
    };
  }
}
