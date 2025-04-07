import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AllMovementsPage } from './all-movements.page';

describe('AllMovementsPage', () => {
  let component: AllMovementsPage;
  let fixture: ComponentFixture<AllMovementsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AllMovementsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
