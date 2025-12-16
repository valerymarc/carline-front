import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateVoiture } from './update-voiture';

describe('UpdateVoiture', () => {
  let component: UpdateVoiture;
  let fixture: ComponentFixture<UpdateVoiture>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateVoiture]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateVoiture);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
