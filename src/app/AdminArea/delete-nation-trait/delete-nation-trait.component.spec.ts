import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteNationTraitComponent } from './delete-nation-trait.component';

describe('DeleteNationTraitComponent', () => {
  let component: DeleteNationTraitComponent;
  let fixture: ComponentFixture<DeleteNationTraitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteNationTraitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteNationTraitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
