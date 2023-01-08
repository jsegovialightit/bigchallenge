import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatSubmissionDetailComponent } from './pat-submission-detail.component';

describe('PatSubmissionDetailComponent', () => {
  let component: PatSubmissionDetailComponent;
  let fixture: ComponentFixture<PatSubmissionDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatSubmissionDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatSubmissionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
