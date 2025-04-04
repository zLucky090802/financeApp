import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BottomBarPage } from './bottom-bar.page';

describe('BottomBarPage', () => {
  let component: BottomBarPage;
  let fixture: ComponentFixture<BottomBarPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomBarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
