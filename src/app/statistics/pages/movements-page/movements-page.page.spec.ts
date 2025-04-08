import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MovementsPagePage } from './movements-page.page';

describe('MovementsPagePage', () => {
  let component: MovementsPagePage;
  let fixture: ComponentFixture<MovementsPagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MovementsPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
