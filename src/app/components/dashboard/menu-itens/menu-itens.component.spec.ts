import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuItensComponent } from './menu-itens.component';

describe('MenuItensComponent', () => {
  let component: MenuItensComponent;
  let fixture: ComponentFixture<MenuItensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuItensComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenuItensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
