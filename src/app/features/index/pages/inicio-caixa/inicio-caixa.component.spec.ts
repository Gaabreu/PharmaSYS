import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioCaixaComponent } from './inicio-caixa.component';

describe('InicioCaixaComponent', () => {
  let component: InicioCaixaComponent;
  let fixture: ComponentFixture<InicioCaixaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InicioCaixaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioCaixaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
