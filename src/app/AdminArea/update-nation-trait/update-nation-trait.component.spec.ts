import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateNationTraitComponent } from './update-nation-trait.component';

describe('UpdateNationTraitComponent', () => {
  let component: UpdateNationTraitComponent;
  let fixture: ComponentFixture<UpdateNationTraitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateNationTraitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateNationTraitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
