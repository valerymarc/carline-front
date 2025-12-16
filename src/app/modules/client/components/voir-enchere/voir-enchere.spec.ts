import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoirEnchere } from './voir-enchere';

describe('VoirEnchere', () => {
  let component: VoirEnchere;
  let fixture: ComponentFixture<VoirEnchere>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VoirEnchere]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoirEnchere);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
