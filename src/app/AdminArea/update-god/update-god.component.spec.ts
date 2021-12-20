import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateGodComponent } from './update-god.component';

describe('UpdateGodComponent', () => {
  let component: UpdateGodComponent;
  let fixture: ComponentFixture<UpdateGodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateGodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateGodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
