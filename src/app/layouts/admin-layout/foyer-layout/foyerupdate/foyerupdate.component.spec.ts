import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoyerupdateComponent } from './foyerupdate.component';

describe('FoyerupdateComponent', () => {
  let component: FoyerupdateComponent;
  let fixture: ComponentFixture<FoyerupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoyerupdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoyerupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
