import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OuputComponent } from './ouput.component';

describe('OuputComponent', () => {
  let component: OuputComponent;
  let fixture: ComponentFixture<OuputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OuputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OuputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
