import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterBlocsComponent } from './ajouter-blocs.component';

describe('AjouterBlocsComponent', () => {
  let component: AjouterBlocsComponent;
  let fixture: ComponentFixture<AjouterBlocsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterBlocsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterBlocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
