import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipateListComponent } from './participate-list.component';

describe('ParticipateListComponent', () => {
  let component: ParticipateListComponent;
  let fixture: ComponentFixture<ParticipateListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParticipateListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParticipateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
