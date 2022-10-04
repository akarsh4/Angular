import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyReactiveComponent } from './my-reactive.component';

describe('MyReactiveComponent', () => {
  let component: MyReactiveComponent;
  let fixture: ComponentFixture<MyReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyReactiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
