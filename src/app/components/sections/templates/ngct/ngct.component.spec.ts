import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgctComponent } from './ngct.component';

describe('NgctComponent', () => {
  let component: NgctComponent;
  let fixture: ComponentFixture<NgctComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgctComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgctComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
