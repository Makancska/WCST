import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaciensComponent } from './paciens.component';

describe('PaciensComponent', () => {
  let component: PaciensComponent;
  let fixture: ComponentFixture<PaciensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaciensComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaciensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
