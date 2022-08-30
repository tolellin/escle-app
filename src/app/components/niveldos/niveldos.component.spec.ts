import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NiveldosComponent } from './niveldos.component';

describe('NiveldosComponent', () => {
  let component: NiveldosComponent;
  let fixture: ComponentFixture<NiveldosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NiveldosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NiveldosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
