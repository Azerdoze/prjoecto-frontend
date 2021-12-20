import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NationindetailComponent } from './nationindetail.component';

describe('NationindetailComponent', () => {
  let component: NationindetailComponent;
  let fixture: ComponentFixture<NationindetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NationindetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NationindetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
