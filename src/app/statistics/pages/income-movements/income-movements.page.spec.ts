import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IncomeMovementsPage } from './income-movements.page';

describe('IncomeMovementsPage', () => {
  let component: IncomeMovementsPage;
  let fixture: ComponentFixture<IncomeMovementsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomeMovementsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
