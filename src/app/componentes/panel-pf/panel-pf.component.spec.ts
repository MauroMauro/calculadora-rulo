import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelPfComponent } from './panel-pf.component';

describe('PanelPfComponent', () => {
  let component: PanelPfComponent;
  let fixture: ComponentFixture<PanelPfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelPfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelPfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
