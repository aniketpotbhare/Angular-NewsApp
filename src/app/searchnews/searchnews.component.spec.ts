import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchnewsComponent } from './searchnews.component';

describe('SearchnewsComponent', () => {
  let component: SearchnewsComponent;
  let fixture: ComponentFixture<SearchnewsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchnewsComponent]
    });
    fixture = TestBed.createComponent(SearchnewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
