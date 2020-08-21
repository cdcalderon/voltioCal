import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoltioMainCalculatorComponent } from './voltio-main-calculator.component';

describe('VoltioMainCalculatorComponent', () => {
  let component: VoltioMainCalculatorComponent;
  let fixture: ComponentFixture<VoltioMainCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoltioMainCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoltioMainCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
