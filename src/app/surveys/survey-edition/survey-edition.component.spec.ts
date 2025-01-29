import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyEditionComponent } from './survey-edition.component';

describe('SurveyEditionComponent', () => {
  let component: SurveyEditionComponent;
  let fixture: ComponentFixture<SurveyEditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SurveyEditionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SurveyEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
