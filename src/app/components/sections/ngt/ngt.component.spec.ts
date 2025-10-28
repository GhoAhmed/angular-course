import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgtComponent } from './ngt.component';

describe('NgtComponent', () => {
  let component: NgtComponent;
  let fixture: ComponentFixture<NgtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgtComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
