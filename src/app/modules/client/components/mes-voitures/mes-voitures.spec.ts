import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesVoitures } from './mes-voitures';

describe('MesVoitures', () => {
  let component: MesVoitures;
  let fixture: ComponentFixture<MesVoitures>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MesVoitures]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MesVoitures);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
