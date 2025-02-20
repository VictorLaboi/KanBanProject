import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KanvanLayoutComponent } from './kanvan-layout.component';

describe('KanvanLayoutComponent', () => {
  let component: KanvanLayoutComponent;
  let fixture: ComponentFixture<KanvanLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KanvanLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KanvanLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
