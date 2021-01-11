import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteEventBindingComponent } from './delete-event-binding.component';

describe('DeleteEventBindingComponent', () => {
  let component: DeleteEventBindingComponent;
  let fixture: ComponentFixture<DeleteEventBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteEventBindingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteEventBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
