import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffectationBlocsComponent } from './affectation-blocs.component';

describe('AffectationBlocsComponent', () => {
  let component: AffectationBlocsComponent;
  let fixture: ComponentFixture<AffectationBlocsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffectationBlocsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffectationBlocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
