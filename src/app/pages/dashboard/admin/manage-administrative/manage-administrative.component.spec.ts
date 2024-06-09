import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageAdministrativeComponent } from './manage-administrative.component';

describe('ManageAdministrativeComponent', () => {
  let component: ManageAdministrativeComponent;
  let fixture: ComponentFixture<ManageAdministrativeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageAdministrativeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManageAdministrativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
