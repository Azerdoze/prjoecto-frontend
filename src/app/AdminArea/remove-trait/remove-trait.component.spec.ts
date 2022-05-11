import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveTraitComponent } from './remove-trait.component';

describe('RemoveTraitComponent', () => {
  let component: RemoveTraitComponent;
  let fixture: ComponentFixture<RemoveTraitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveTraitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveTraitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
