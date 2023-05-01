import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrvosComponent } from './orvos.component';

describe('OrvosComponent', () => {
  let component: OrvosComponent;
  let fixture: ComponentFixture<OrvosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrvosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrvosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
