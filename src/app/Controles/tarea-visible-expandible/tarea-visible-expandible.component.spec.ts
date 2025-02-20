import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareaVisibleExpandibleComponent } from './tarea-visible-expandible.component';

describe('TareaVisibleExpandibleComponent', () => {
  let component: TareaVisibleExpandibleComponent;
  let fixture: ComponentFixture<TareaVisibleExpandibleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TareaVisibleExpandibleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TareaVisibleExpandibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
