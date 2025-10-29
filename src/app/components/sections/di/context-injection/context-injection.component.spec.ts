import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContextInjectionComponent } from './context-injection.component';

describe('ContextInjectionComponent', () => {
  let component: ContextInjectionComponent;
  let fixture: ComponentFixture<ContextInjectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContextInjectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContextInjectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
