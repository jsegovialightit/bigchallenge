import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatSubmissionNewComponent } from './pat-submission-new.component';

describe('PatSubmissionNewComponent', () => {
  let component: PatSubmissionNewComponent;
  let fixture: ComponentFixture<PatSubmissionNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatSubmissionNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatSubmissionNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
