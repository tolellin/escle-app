import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NivelcincoComponent } from './nivelcinco.component';

describe('NivelcincoComponent', () => {
  let component: NivelcincoComponent;
  let fixture: ComponentFixture<NivelcincoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NivelcincoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NivelcincoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
