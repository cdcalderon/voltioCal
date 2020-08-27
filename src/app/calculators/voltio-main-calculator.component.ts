import { Component, OnInit } from '@angular/core';
import { VoltioLocation } from './models/location.model';
import { Lender } from './models/lender.model';
import { RepCms } from './models/rep-cms.model';
import { RepCmsValue } from './models/rep-cms-value.model';
import { Adder } from './models/adder.model';
import { CalculatorService } from './calculator.service';

@Component({
  selector: 'app-voltio-main-calculator',
  templateUrl: './voltio-main-calculator.component.html',
  styleUrls: ['./voltio-main-calculator.component.scss']
})
export class VoltioMainCalculatorComponent implements OnInit {
  // locations: string[] = ['Texas', 'Nevada'];
  locations: VoltioLocation[] = [
    { value: { ppw: 4.9, redline: 2.1 }, viewValue: 'Texas' },
    { value: { ppw: 4.9, redline: 2.5 }, viewValue: 'Nevada' },
    { value: { ppw: 1.2, redline: 1.9 }, viewValue: 'Arizona' }
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
  fortyFiveBreakdown = 0.45;
  leds24Pack: Adder;
  thermostats: Adder;
  voltioBox: Adder;
  voltioWash: Adder;
  mpu: Adder;
  aeroseal: Adder;
  eeWindows: Adder;
  adders: Adder[] = [];
  totalAdders = 0;
  totalAddersSystemReducer = 0;
  initialSystemSize = 0;
  taxCreditPercent = 0.26;

  constructor(private calculatorSvc: CalculatorService) {
    this.initialSystemSize = 9000;
    this.leds24Pack = calculatorSvc.getLeds24Pack();
    this.thermostats = calculatorSvc.getThermostats();
    this.voltioBox = calculatorSvc.getVoltioBox();
    this.voltioWash = calculatorSvc.getVoltioWash();
    this.mpu = calculatorSvc.getMPU();
    this.aeroseal = calculatorSvc.getAeroseal();
    this.eeWindows = calculatorSvc.getAeroseal();

    this.adders = [
      this.leds24Pack,
      this.thermostats,
      this.voltioBox,
      this.voltioWash,
      this.mpu,
      this.eeWindows
    ];
    this.aggregateAdders();
  }

  get adderPlusDealerFee(): number {
    return this.totalAdders + this.deelerFee;
  }

  get deelerFee(): number {
    return this.totalAdders * (this.selectedLender.fee / 100);
  }

  get leds24PackTotal(): number {
    return this.leds24Pack.isSelected
      ? this.leds24Pack.quantity * this.leds24Pack.price
      : 0;
  }

  get thermostatsTotal(): number {
    return this.thermostats.isSelected
      ? this.thermostats.quantity * this.thermostats.price
      : 0;
  }

  get voltioBoxTotal(): number {
    return this.voltioBox.isSelected
      ? this.voltioBox.quantity * this.voltioBox.price
      : 0;
  }

  get voltioWashTotal(): number {
    return this.voltioWash.isSelected
      ? this.voltioWash.quantity * this.voltioWash.price
      : 0;
  }

  get mpuTotal(): number {
    return this.mpu.isSelected ? this.mpu.quantity * this.mpu.price : 0;
  }

  get aerosealTotal(): number {
    return this.aeroseal.isSelected
      ? this.aeroseal.quantity * this.aeroseal.price
      : 0;
  }

  get eeWindowsTotal(): number {
    return this.eeWindows.isSelected
      ? this.eeWindows.quantity * this.eeWindows.price
      : 0;
  }

  get systemSizeWithAdders(): number {
    return this.initialSystemSize - this.systemWattsReduced;
  }

  get systemWattsReduced(): number {
    return this.initialSystemSize * this.totalAddersSystemReducer;
  }

  get systemPriceNoAdders(): number {
    return this.initialSystemSize * this.selectedLocation.ppw;
  }

  get systemPriceWithAdders(): number {
    return this.systemPriceNoAdders + this.adderPlusDealerFee;
  }

  get bonusCommissionBreakdown(): number {
    return (
      this.systemSizeWithAdders *
      (this.bonusPPW - this.bonusPPW * (this.selectedLender.fee / 100)) *
      1
    );
  }

  get bonusCms55(): number {
    return this.bonusCommissionBreakdown * this.fittyFiveBreakdown;
  }

  get bonusCms45(): number {
    return this.bonusCommissionBreakdown * this.fortyFiveBreakdown;
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

  get taxCredit(): number {
    return this.systemPriceWithAdders * this.taxCreditPercent;
  }

  get loanAfterTaxCredit(): number {
    return this.systemPriceWithAdders - this.taxCredit;
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

  get newPpwWithAdders(): number {
    return (
      this.systemPriceWithAdders / (this.systemSizeWithAdders + this.bonusPPW)
    );
  }

  get netPpw(): number {
    return (
      (this.systemPriceWithAdders - this.dealerFeeCost) /
      this.systemSizeWithAdders
    );
  }

  get payoutPpw(): number {
    return (
      (this.systemPriceWithAdders - this.dealerFeeCost) /
        this.systemSizeWithAdders -
      this.selectedLocation.redline
    );
  }

  get monthlyPayment(): number {
    return (
      this.calculatePayment(
        this.selectedLender.interest / 1200,
        this.selectedLender.termMonths,
        this.loanAfterTaxCredit,
        0,
        0
      ) * 1.02
    );
  }

  get noTaxCPayment(): number {
    return (
      this.calculatePayment(
        this.selectedLender.interest / 1200,
        this.selectedLender.termMonths,
        this.systemPriceWithAdders,
        0,
        0
      ) * 1.02
    );
  }

  get fourMonthPromo(): number {
    return this.monthlyPayment * 4;
  }

  get totalPayout(): number {
    return this.systemSizeWithAdders * this.payoutPpw - this.bonusCms45;
  }

  get totalPayoutMp1(): number {
    return this.totalPayout * 0.3;
  }

  get totalPayoutMp2(): number {
    return this.totalPayout * 0.7;
  }

  get totalVoltioPayout(): number {
    return (
      this.totalPayout -
      this.TotalTrainerCalculatedCommission -
      this.TotalTraineeCalculatedCommission -
      this.fourMonthPromo
    );
  }

  get totalVoltioPayoutMp1(): number {
    return this.totalVoltioPayout * 0.3;
  }

  get totalVoltioPayoutMp2(): number {
    return this.totalVoltioPayout * 0.7;
  }

  aggregateAdders(): void {
    this.totalAdders = this.adders
      .filter(a => a.isSelected)
      .map(a => a.price * a.quantity)
      .reduce((a, b) => a + b, 0);

    this.totalAddersSystemReducer = this.adders
      .filter(a => a.isSelected)
      .map(a => a.systemReducerPercentage)
      .reduce((a, b) => a + b, 0);
  }

  adjustQuantity(adder: Adder): void {
    if (adder.quantity === 0) {
      adder.quantity = 1;
    }
    this.aggregateAdders();
  }

  calculatePayment(
    ratePerPeriod: number,
    numberOfPayments: number,
    presentValue: number,
    futureValue: number,
    type: number
  ) {
    if (ratePerPeriod !== 0.0) {
      // Interest rate exists
      const q = Math.pow(1 + ratePerPeriod, numberOfPayments);
      return (
        (ratePerPeriod * (futureValue + q * presentValue)) /
        ((-1 + q) * (1 + ratePerPeriod * type))
      );
    } else if (numberOfPayments != 0.0) {
      // No interest rate, but number of payments exists
      return (futureValue + presentValue) / numberOfPayments;
    }

    return 0;
  }

  getMortgagePayment(
    startingLoanAmount: any,
    totalPayments: any,
    interestRate: any
  ): number {
    const interestRatePerMonth = interestRate / 12;
    return (
      (startingLoanAmount *
        interestRatePerMonth *
        Math.pow(1 + interestRatePerMonth, totalPayments)) /
      (Math.pow(1 + interestRatePerMonth, totalPayments) - 1)
    );
  }

  ngOnInit(): void {}
}
