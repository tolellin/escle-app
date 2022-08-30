import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AditionaldataComponent } from './aditionaldata.component';

describe('AditionaldataComponent', () => {
  let component: AditionaldataComponent;
  let fixture: ComponentFixture<AditionaldataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AditionaldataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AditionaldataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
