import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGodComponent } from './create-god.component';

describe('CreateGodComponent', () => {
  let component: CreateGodComponent;
  let fixture: ComponentFixture<CreateGodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateGodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateGodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
