import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlternativeProductCardComponent } from './alternative-product-card.component';

describe('AlternativeProductCardComponent', () => {
  let component: AlternativeProductCardComponent;
  let fixture: ComponentFixture<AlternativeProductCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlternativeProductCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlternativeProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
