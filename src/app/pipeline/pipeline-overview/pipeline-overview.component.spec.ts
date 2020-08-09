import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipelineOverviewComponent } from './pipeline-overview.component';

describe('PipelineOverviewComponent', () => {
  let component: PipelineOverviewComponent;
  let fixture: ComponentFixture<PipelineOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipelineOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipelineOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
