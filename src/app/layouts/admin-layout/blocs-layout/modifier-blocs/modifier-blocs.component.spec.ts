import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierBlocsComponent } from './modifier-blocs.component';

describe('ModifierBlocsComponent', () => {
  let component: ModifierBlocsComponent;
  let fixture: ComponentFixture<ModifierBlocsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierBlocsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierBlocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
