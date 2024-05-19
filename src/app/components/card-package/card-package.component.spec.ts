import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPackageComponent } from './card-package.component';

describe('CardPackageComponent', () => {
  let component: CardPackageComponent;
  let fixture: ComponentFixture<CardPackageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardPackageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
