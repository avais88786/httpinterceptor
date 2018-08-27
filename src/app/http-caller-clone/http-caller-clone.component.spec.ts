import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpCallerCloneComponent } from './http-caller-clone.component';

describe('HttpCallerCloneComponent', () => {
  let component: HttpCallerCloneComponent;
  let fixture: ComponentFixture<HttpCallerCloneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpCallerCloneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpCallerCloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
