import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RutaProtegidaPage } from './ruta-protegida.page';

describe('RutaProtegidaPage', () => {
  let component: RutaProtegidaPage;
  let fixture: ComponentFixture<RutaProtegidaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RutaProtegidaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
