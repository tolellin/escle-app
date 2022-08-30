import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NiveltresComponent } from './niveltres.component';

describe('NiveltresComponent', () => {
  let component: NiveltresComponent;
  let fixture: ComponentFixture<NiveltresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NiveltresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NiveltresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
