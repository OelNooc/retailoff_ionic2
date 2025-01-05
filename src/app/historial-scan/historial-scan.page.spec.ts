import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HistorialScanPage } from './historial-scan.page';

describe('HistorialScanPage', () => {
  let component: HistorialScanPage;
  let fixture: ComponentFixture<HistorialScanPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HistorialScanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
