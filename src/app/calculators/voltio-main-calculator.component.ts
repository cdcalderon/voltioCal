import { Component, OnInit } from '@angular/core';
import { VoltioLocation } from './models/location.model';
import { Lender } from './models/lender.model';
import { TrainerCms } from './models/trainer-cms.model';

@Component({
  selector: 'app-voltio-main-calculator',
  templateUrl: './voltio-main-calculator.component.html',
  styleUrls: ['./voltio-main-calculator.component.scss']
})
export class VoltioMainCalculatorComponent implements OnInit {
  // locations: string[] = ['Texas', 'Nevada'];
  locations: VoltioLocation[] = [
    { value: { ppw: 4.5, redline: 2.1 }, viewValue: 'Texas' },
    { value: { ppw: 4.2, redline: 2.5 }, viewValue: 'Nevada' },
    { value: { ppw: 3.4, redline: 1.9 }, viewValue: 'Arizona' }
  ];
  lenders: Lender[] = [
    {
      value: { termMonths: 240, interest: 5.99, fee: 9.75 },
      viewValue: 'LP 20yr 5.99 10.49%'
    },
    {
      value: { termMonths: 300, interest: 2.99, fee: 22.05 },
      viewValue: 'LP 25yr 2.99 22.05%'
    }
  ];
  trainerCms: TrainerCms[] = [
    {
      value: { commisionPerWatt: 800, description: 'Elite  Payout 800' },
      viewValue: 'Elite  Payout 800'
    },
    {
      value: { commisionPerWatt: 900, description: 'Specialist Payout 900' },
      viewValue: 'Specialist Payout 900'
    }
  ];
  traineeCms: TrainerCms[] = [
    {
      value: { commisionPerWatt: 475, description: 'Trainee3 Payout 475' },
      viewValue: 'Trainee3 Payout 475'
    },
    {
      value: { commisionPerWatt: 400, description: 'Trainee3 Payout 400' },
      viewValue: 'Trainee3 Payout 400'
    }
  ];
  commisionTypes: string[] = ['Texas', 'Nevada'];
  selectedLocation = this.locations[0].value;
  selectedLender = this.lenders[1].value;
  selectedTrainerCms = this.trainerCms[0].value;
  selectedTraineeCms = this.traineeCms[0].value;
  panelOpenState = false;
  constructor() {}

  ngOnInit(): void {}
}
