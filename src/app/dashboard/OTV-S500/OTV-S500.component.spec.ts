import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Otvs500Component } from './OTV-S500.component';

describe('Otvs500Component', () => {
  let component: Otvs500Component;
  let fixture: ComponentFixture<Otvs500Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Otvs500Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Otvs500Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
