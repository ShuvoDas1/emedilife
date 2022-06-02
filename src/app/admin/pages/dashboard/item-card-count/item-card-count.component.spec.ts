import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCardCountComponent } from './item-card-count.component';

describe('ItemCardCountComponent', () => {
  let component: ItemCardCountComponent;
  let fixture: ComponentFixture<ItemCardCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemCardCountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemCardCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
