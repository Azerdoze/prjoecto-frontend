import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiveTraitComponent } from './give-trait.component';

describe('GiveTraitComponent', () => {
  let component: GiveTraitComponent;
  let fixture: ComponentFixture<GiveTraitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GiveTraitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GiveTraitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
