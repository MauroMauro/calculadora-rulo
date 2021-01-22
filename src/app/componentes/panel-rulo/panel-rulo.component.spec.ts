import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelRuloComponent } from './panel-rulo.component';

describe('PanelRuloComponent', () => {
  let component: PanelRuloComponent;
  let fixture: ComponentFixture<PanelRuloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelRuloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelRuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
