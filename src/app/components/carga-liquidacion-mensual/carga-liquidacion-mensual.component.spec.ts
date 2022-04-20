import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargaLiquidacionMensualComponent } from './carga-liquidacion-mensual.component';

describe('CargaLiquidacionMensualComponent', () => {
  let component: CargaLiquidacionMensualComponent;
  let fixture: ComponentFixture<CargaLiquidacionMensualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CargaLiquidacionMensualComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CargaLiquidacionMensualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
