import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovementControllerComponent } from './movement-controller.component';

describe('MovementControllerComponent', () => {
  let component: MovementControllerComponent;
  let fixture: ComponentFixture<MovementControllerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MovementControllerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovementControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
