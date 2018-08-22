import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpCallerNewComponent } from './http-caller-new.component';

describe('HttpCallerNewComponent', () => {
  let component: HttpCallerNewComponent;
  let fixture: ComponentFixture<HttpCallerNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpCallerNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpCallerNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
