import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateNationComponent } from './update-nation.component';

describe('UpdateNationComponent', () => {
  let component: UpdateNationComponent;
  let fixture: ComponentFixture<UpdateNationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateNationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateNationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
