import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipeline-contract-detail',
  templateUrl: './pipeline-contract-detail.component.html',
  styleUrls: ['./pipeline-contract-detail.component.scss']
})
export class PipelineContractDetailComponent implements OnInit {
  reps: string[] = ['rep1', 'rep2'];

  panelOpenState = false;
  step = 0;

  constructor() {}

  ngOnInit(): void {}

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
}
