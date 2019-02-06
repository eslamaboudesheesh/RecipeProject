import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeEditedComponent } from './recipe-edited.component';

describe('RecipeEditedComponent', () => {
  let component: RecipeEditedComponent;
  let fixture: ComponentFixture<RecipeEditedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeEditedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeEditedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
