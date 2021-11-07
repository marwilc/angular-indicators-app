import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeIndicatorsComponent } from './home-indicators.component';

describe('HomeIndicatorsComponent', () => {
  let component: HomeIndicatorsComponent;
  let fixture: ComponentFixture<HomeIndicatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeIndicatorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeIndicatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
