import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StatisticsLayoutPage } from './statistics-layout.page';

describe('StatisticsLayoutPage', () => {
  let component: StatisticsLayoutPage;
  let fixture: ComponentFixture<StatisticsLayoutPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticsLayoutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
