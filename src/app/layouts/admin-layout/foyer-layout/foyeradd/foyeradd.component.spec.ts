import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoyeraddComponent } from './foyeradd.component';

describe('FoyeraddComponent', () => {
  let component: FoyeraddComponent;
  let fixture: ComponentFixture<FoyeraddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoyeraddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoyeraddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
