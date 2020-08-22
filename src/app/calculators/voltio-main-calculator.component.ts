import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-voltio-main-calculator',
  templateUrl: './voltio-main-calculator.component.html',
  styleUrls: ['./voltio-main-calculator.component.scss']
})
export class VoltioMainCalculatorComponent implements OnInit {
  locations: string[] = ['Texas', 'Nevada'];
  lenders: string[] = ['Texas', 'Nevada'];
  cms: string[] = ['Texas', 'Nevada'];
  commisionTypes: string[] = ['Texas', 'Nevada'];
  constructor() {}

  ngOnInit(): void {}
}
