import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutPageComponent } from './layout-page.component';

describe('LoginComponent', () => {
  let component: LayoutPageComponent;
  let fixture: ComponentFixture<LayoutPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LayoutPageComponent]
    });
    fixture = TestBed.createComponent(LayoutPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
