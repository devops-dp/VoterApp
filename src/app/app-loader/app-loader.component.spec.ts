import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppLoader } from './app-loader.component';

describe('AppLoader', () => {
  let component: AppLoader;
  let fixture: ComponentFixture<AppLoader>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppLoader ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppLoader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
