import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListBookingComponent } from './user-list-booking.component';

describe('UserListBookingComponent', () => {
  let component: UserListBookingComponent;
  let fixture: ComponentFixture<UserListBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserListBookingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserListBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
