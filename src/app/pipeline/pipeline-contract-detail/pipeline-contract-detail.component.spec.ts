import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipelineContractDetailComponent } from './pipeline-contract-detail.component';

describe('PipelineContractDetailComponent', () => {
  let component: PipelineContractDetailComponent;
  let fixture: ComponentFixture<PipelineContractDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipelineContractDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipelineContractDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
