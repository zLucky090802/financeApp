import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExpensesMovementsPage } from './expenses-movements.page';

describe('ExpensesMovementsPage', () => {
  let component: ExpensesMovementsPage;
  let fixture: ComponentFixture<ExpensesMovementsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpensesMovementsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
