import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MoreSettingsPage } from './more-settings.page';

describe('MoreSettingsPage', () => {
  let component: MoreSettingsPage;
  let fixture: ComponentFixture<MoreSettingsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreSettingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
