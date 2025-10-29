import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContructorInjectionComponent } from './contructor-injection.component';

describe('ContructorInjectionComponent', () => {
  let component: ContructorInjectionComponent;
  let fixture: ComponentFixture<ContructorInjectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContructorInjectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContructorInjectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
