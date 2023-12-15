import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoyerdetailviewComponent } from './foyerdetailview.component';

describe('FoyerdetailviewComponent', () => {
  let component: FoyerdetailviewComponent;
  let fixture: ComponentFixture<FoyerdetailviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoyerdetailviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoyerdetailviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
