import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardMovementsPage } from './card-movements.page';

describe('CardMovementsPage', () => {
  let component: CardMovementsPage;
  let fixture: ComponentFixture<CardMovementsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CardMovementsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
