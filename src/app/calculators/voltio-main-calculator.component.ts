import { Component, OnInit } from '@angular/core';
import { VoltioLocation } from './models/location.model';
import { Lender } from './models/lender.model';
import { RepCms } from './models/rep-cms.model';
import { RepCmsValue } from './models/rep-cms-value.model';

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
  trainerCms: RepCms[] = [
    {
      value: {
        commisionPerWatt: 800,
        description: 'Elite  Payout 800',
        mp1Percent: 0.3,
        mp2Percent: 0.7
      },
      viewValue: 'Elite  Payout 800'
    },
    {
      value: {
        commisionPerWatt: 900,
        description: 'Specialist Payout 900',
        mp1Percent: 0.3,
        mp2Percent: 0.7
      },
      viewValue: 'Specialist Payout 900'
    }
  ];
  traineeCms: RepCms[] = [
    {
      value: {
        commisionPerWatt: 475,
        description: 'Trainee3 Payout 475',
        mp1Percent: 0.5,
        mp2Percent: 0.5
      },
      viewValue: 'Trainee3 Payout 475'
    },
    {
      value: {
        commisionPerWatt: 400,
        description: 'Trainee3 Payout 400',
        mp1Percent: 0.5,
        mp2Percent: 0.5
      },
      viewValue: 'Trainee3 Payout 400'
    }
  ];
  commisionTypes: string[] = ['Texas', 'Nevada'];
  selectedLocation = this.locations[0].value;
  selectedLender = this.lenders[1].value;
  selectedTrainerCms: RepCmsValue = this.trainerCms[0].value;
  selectedTraineeCms: RepCmsValue = this.traineeCms[0].value;
  bonusPPW = 0;
  adminFee = 150;
  panelOpenState = false;
  fittyFiveBreakdown = 0.55;
  constructor() {}

  get systemSizeWithAdders(): number {
    return 9000;
  }

  get systemPriceWithAdders(): number {
    return 49904;
  }

  get bonusCms55(): number {
    return this.bonusPPW * this.fittyFiveBreakdown;
  }

  get dealerFeeCost(): number {
    return this.systemPriceWithAdders * (this.selectedLender.fee / 100);
  }

  get trainerCalculatedCommission(): number {
    return (
      this.selectedTrainerCms.commisionPerWatt -
      this.selectedTraineeCms.commisionPerWatt
    );
  }

  get trainerPricePerKiloWatt(): number {
    return this.trainerCalculatedCommission / 1000;
  }

  get TotalTrainerCalculatedCommission(): number {
    return (
      this.systemSizeWithAdders * this.trainerPricePerKiloWatt +
      this.bonusCms55 / 2 -
      this.adminFee
    );
  }

  get trainerMp1(): number {
    return (
      this.TotalTrainerCalculatedCommission * this.selectedTrainerCms.mp1Percent
    );
  }

  get trainerMp2(): number {
    return (
      this.TotalTrainerCalculatedCommission * this.selectedTrainerCms.mp2Percent
    );
  }

  get traineeCalculatedCommission(): number {
    return this.selectedTraineeCms.commisionPerWatt;
  }

  get traineePricePerKiloWatt(): number {
    return this.traineeCalculatedCommission / 1000;
  }

  get TotalTraineeCalculatedCommission(): number {
    return (
      this.systemSizeWithAdders * this.traineePricePerKiloWatt +
      this.bonusCms55 / 2 -
      this.adminFee
    );
  }

  get traineeMp1(): number {
    return (
      this.TotalTraineeCalculatedCommission * this.selectedTraineeCms.mp1Percent
    );
  }

  get traineeMp2(): number {
    return (
      this.TotalTraineeCalculatedCommission * this.selectedTraineeCms.mp2Percent
    );
  }

  ngOnInit(): void {}
}
