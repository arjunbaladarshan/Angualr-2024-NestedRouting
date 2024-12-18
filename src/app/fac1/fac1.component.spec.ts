import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fac1Component } from './fac1.component';

describe('Fac1Component', () => {
  let component: Fac1Component;
  let fixture: ComponentFixture<Fac1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Fac1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Fac1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
