import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyScheduleComponent } from './monthly-schedule.component';

describe('MonthlyScheduleComponent', () => {
  let component: MonthlyScheduleComponent;
  let fixture: ComponentFixture<MonthlyScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonthlyScheduleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MonthlyScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
