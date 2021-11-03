import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluateCarComponent } from './evaluate-car.component';

describe('EvaluateCarComponent', () => {
  let component: EvaluateCarComponent;
  let fixture: ComponentFixture<EvaluateCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvaluateCarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluateCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
