import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KanvanFormComponent } from './kanvan-form.component';

describe('KanvanFormComponent', () => {
  let component: KanvanFormComponent;
  let fixture: ComponentFixture<KanvanFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KanvanFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KanvanFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
