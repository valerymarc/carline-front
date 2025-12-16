import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetReservations } from './get-reservations';

describe('GetReservations', () => {
  let component: GetReservations;
  let fixture: ComponentFixture<GetReservations>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetReservations]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetReservations);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
