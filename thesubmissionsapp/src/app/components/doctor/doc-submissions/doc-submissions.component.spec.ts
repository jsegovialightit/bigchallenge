import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocSubmissionsComponent } from './doc-submissions.component';

describe('DocSubmissionsComponent', () => {
  let component: DocSubmissionsComponent;
  let fixture: ComponentFixture<DocSubmissionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocSubmissionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocSubmissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
