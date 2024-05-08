import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuisnessComponent } from './buisness.component';

describe('BuisnessComponent', () => {
  let component: BuisnessComponent;
  let fixture: ComponentFixture<BuisnessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuisnessComponent]
    });
    fixture = TestBed.createComponent(BuisnessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
