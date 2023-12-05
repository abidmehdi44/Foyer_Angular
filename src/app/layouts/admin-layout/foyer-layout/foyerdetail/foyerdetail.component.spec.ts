import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoyerdetailComponent } from './foyerdetail.component';

describe('FoyerdetailComponent', () => {
  let component: FoyerdetailComponent;
  let fixture: ComponentFixture<FoyerdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoyerdetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoyerdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
