import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministartiveDashboardComponent } from './administartive-dashboard.component';

describe('AdministartiveDashboardComponent', () => {
  let component: AdministartiveDashboardComponent;
  let fixture: ComponentFixture<AdministartiveDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdministartiveDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdministartiveDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
