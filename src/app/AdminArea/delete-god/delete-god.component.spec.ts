import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteGodComponent } from './delete-god.component';

describe('DeleteGodComponent', () => {
  let component: DeleteGodComponent;
  let fixture: ComponentFixture<DeleteGodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteGodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteGodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
