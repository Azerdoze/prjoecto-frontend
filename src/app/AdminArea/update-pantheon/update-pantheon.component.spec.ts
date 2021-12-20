import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePantheonComponent } from './update-pantheon.component';

describe('UpdatePantheonComponent', () => {
  let component: UpdatePantheonComponent;
  let fixture: ComponentFixture<UpdatePantheonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePantheonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePantheonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
