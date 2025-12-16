import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchVoiture } from './search-voiture';

describe('SearchVoiture', () => {
  let component: SearchVoiture;
  let fixture: ComponentFixture<SearchVoiture>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchVoiture]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchVoiture);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
