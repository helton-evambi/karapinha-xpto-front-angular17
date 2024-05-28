import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseProfessionalComponent } from './choose-professional.component';

describe('ChooseProfessionalComponent', () => {
  let component: ChooseProfessionalComponent;
  let fixture: ComponentFixture<ChooseProfessionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChooseProfessionalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChooseProfessionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
