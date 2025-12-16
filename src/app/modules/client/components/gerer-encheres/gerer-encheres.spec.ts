import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GererEncheres } from './gerer-encheres';

describe('GererEncheres', () => {
  let component: GererEncheres;
  let fixture: ComponentFixture<GererEncheres>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GererEncheres]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GererEncheres);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
