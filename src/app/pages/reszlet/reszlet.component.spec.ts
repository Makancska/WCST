import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReszletComponent } from './reszlet.component';

describe('ReszletComponent', () => {
  let component: ReszletComponent;
  let fixture: ComponentFixture<ReszletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReszletComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReszletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
