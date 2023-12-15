import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatistiquesBlocsComponent } from './statistiques-blocs.component';

describe('StatistiquesBlocsComponent', () => {
  let component: StatistiquesBlocsComponent;
  let fixture: ComponentFixture<StatistiquesBlocsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatistiquesBlocsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatistiquesBlocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
