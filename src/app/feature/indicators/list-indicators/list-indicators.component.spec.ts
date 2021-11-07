import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListIndicatorsComponent } from './list-indicators.component';

describe('ListIndicatorsComponent', () => {
  let component: ListIndicatorsComponent;
  let fixture: ComponentFixture<ListIndicatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListIndicatorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListIndicatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
