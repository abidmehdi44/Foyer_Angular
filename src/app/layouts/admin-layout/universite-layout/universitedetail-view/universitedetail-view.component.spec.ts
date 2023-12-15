import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversitedetailViewComponent } from './universitedetail-view.component';

describe('UniversitedetailViewComponent', () => {
  let component: UniversitedetailViewComponent;
  let fixture: ComponentFixture<UniversitedetailViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversitedetailViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UniversitedetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
