import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fac2Component } from './fac2.component';

describe('Fac2Component', () => {
  let component: Fac2Component;
  let fixture: ComponentFixture<Fac2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Fac2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Fac2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
