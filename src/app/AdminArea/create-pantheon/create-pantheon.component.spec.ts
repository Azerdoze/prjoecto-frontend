import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePantheonComponent } from './create-pantheon.component';

describe('CreatePantheonComponent', () => {
  let component: CreatePantheonComponent;
  let fixture: ComponentFixture<CreatePantheonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePantheonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePantheonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
