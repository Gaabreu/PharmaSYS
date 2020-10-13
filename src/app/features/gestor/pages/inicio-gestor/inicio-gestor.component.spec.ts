import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioGestorComponent } from './inicio-gestor.component';

describe('InicioGestorComponent', () => {
  let component: InicioGestorComponent;
  let fixture: ComponentFixture<InicioGestorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InicioGestorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioGestorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
