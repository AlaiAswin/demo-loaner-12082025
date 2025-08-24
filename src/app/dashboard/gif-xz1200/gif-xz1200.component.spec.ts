import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gifxz1200Component } from './gif-xz1200.component';
describe('Gifxz1200Component', () => {
  let component: Gifxz1200Component;
  let fixture: ComponentFixture<Gifxz1200Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Gifxz1200Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Gifxz1200Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
