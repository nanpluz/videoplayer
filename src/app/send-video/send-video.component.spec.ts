import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendVideoComponent } from './send-video.component';

describe('SendVideoComponent', () => {
  let component: SendVideoComponent;
  let fixture: ComponentFixture<SendVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendVideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SendVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
