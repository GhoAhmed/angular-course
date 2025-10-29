import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpCliComponent } from './http-cli.component';

describe('HttpCliComponent', () => {
  let component: HttpCliComponent;
  let fixture: ComponentFixture<HttpCliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpCliComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HttpCliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
