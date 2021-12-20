import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNationComponent } from './create-nation.component';

describe('CreateNationComponent', () => {
  let component: CreateNationComponent;
  let fixture: ComponentFixture<CreateNationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateNationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
