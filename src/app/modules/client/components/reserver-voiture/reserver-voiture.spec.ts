import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReserverVoiture } from './reserver-voiture';

describe('ReserverVoiture', () => {
  let component: ReserverVoiture;
  let fixture: ComponentFixture<ReserverVoiture>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReserverVoiture]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReserverVoiture);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
