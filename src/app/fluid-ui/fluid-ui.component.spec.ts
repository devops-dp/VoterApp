import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FluidUiComponent } from './fluid-ui.component';

describe('FluidUiComponent', () => {
  let component: FluidUiComponent;
  let fixture: ComponentFixture<FluidUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FluidUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FluidUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
