import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoyerdeleteComponent } from './foyerdelete.component';

describe('FoyerdeleteComponent', () => {
  let component: FoyerdeleteComponent;
  let fixture: ComponentFixture<FoyerdeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoyerdeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoyerdeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
