import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedreligionComponent } from './detailedreligion.component';

describe('DetailedreligionComponent', () => {
  let component: DetailedreligionComponent;
  let fixture: ComponentFixture<DetailedreligionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailedreligionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailedreligionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
