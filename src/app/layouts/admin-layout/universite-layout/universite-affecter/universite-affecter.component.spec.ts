import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversiteAffecterComponent } from './universite-affecter.component';

describe('UniversiteAffecterComponent', () => {
  let component: UniversiteAffecterComponent;
  let fixture: ComponentFixture<UniversiteAffecterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversiteAffecterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UniversiteAffecterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
