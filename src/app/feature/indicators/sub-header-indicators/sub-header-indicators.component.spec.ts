import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubHeaderIndicatorsComponent } from './sub-header-indicators.component';

describe('SubHeaderIndicatorsComponent', () => {
  let component: SubHeaderIndicatorsComponent;
  let fixture: ComponentFixture<SubHeaderIndicatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubHeaderIndicatorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubHeaderIndicatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
