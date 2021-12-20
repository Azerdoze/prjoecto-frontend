import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNationTraitComponent } from './create-nation-trait.component';

describe('CreateNationTraitComponent', () => {
  let component: CreateNationTraitComponent;
  let fixture: ComponentFixture<CreateNationTraitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateNationTraitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNationTraitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
