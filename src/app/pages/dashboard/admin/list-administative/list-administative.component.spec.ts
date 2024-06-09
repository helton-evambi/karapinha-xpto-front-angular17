import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAdministativeComponent } from './list-administative.component';

describe('ListAdministativeComponent', () => {
  let component: ListAdministativeComponent;
  let fixture: ComponentFixture<ListAdministativeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListAdministativeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListAdministativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
