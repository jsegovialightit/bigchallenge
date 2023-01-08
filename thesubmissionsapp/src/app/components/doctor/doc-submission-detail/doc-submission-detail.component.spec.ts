import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocSubmissionDetailComponent } from './doc-submission-detail.component';

describe('DocSubmissionDetailComponent', () => {
  let component: DocSubmissionDetailComponent;
  let fixture: ComponentFixture<DocSubmissionDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocSubmissionDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocSubmissionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
