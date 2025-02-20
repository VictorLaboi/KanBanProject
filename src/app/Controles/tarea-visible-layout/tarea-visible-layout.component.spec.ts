import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareaVisibleLayoutComponent } from './tarea-visible-layout.component';

describe('TareaVisibleLayoutComponent', () => {
  let component: TareaVisibleLayoutComponent;
  let fixture: ComponentFixture<TareaVisibleLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TareaVisibleLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TareaVisibleLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
