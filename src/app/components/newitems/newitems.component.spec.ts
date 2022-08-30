import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewitemsComponent } from './newitems.component';

describe('NewitemsComponent', () => {
  let component: NewitemsComponent;
  let fixture: ComponentFixture<NewitemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewitemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewitemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
