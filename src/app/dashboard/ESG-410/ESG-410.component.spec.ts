import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Esg410component } from './ESG-410.component';
describe('Esg410component', () => {
    let component: Esg410component;
    let fixture: ComponentFixture<Esg410component>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ Esg410component]
      })
      .compileComponents();

      fixture = TestBed.createComponent(Esg410component);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });
