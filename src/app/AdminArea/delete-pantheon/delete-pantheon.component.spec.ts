import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePantheonComponent } from './delete-pantheon.component';

describe('DeletePantheonComponent', () => {
  let component: DeletePantheonComponent;
  let fixture: ComponentFixture<DeletePantheonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletePantheonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletePantheonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
