import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatSubmissionsComponent } from './pat-submissions.component';

describe('PatSubmissionsComponent', () => {
  let component: PatSubmissionsComponent;
  let fixture: ComponentFixture<PatSubmissionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatSubmissionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatSubmissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
