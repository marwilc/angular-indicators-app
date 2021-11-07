import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricesIndicatorsComponent } from './prices-indicators.component';

describe('PricesIndicatorsComponent', () => {
  let component: PricesIndicatorsComponent;
  let fixture: ComponentFixture<PricesIndicatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PricesIndicatorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PricesIndicatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
