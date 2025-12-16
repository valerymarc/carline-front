import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostVoiture } from './post-voiture';

describe('PostVoiture', () => {
  let component: PostVoiture;
  let fixture: ComponentFixture<PostVoiture>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostVoiture]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostVoiture);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
