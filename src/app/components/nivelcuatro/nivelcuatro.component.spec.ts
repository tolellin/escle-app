import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NivelcuatroComponent } from './nivelcuatro.component';

describe('NivelcuatroComponent', () => {
  let component: NivelcuatroComponent;
  let fixture: ComponentFixture<NivelcuatroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NivelcuatroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NivelcuatroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
