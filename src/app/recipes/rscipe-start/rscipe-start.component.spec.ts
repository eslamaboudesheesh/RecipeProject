import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RscipeStartComponent } from './rscipe-start.component';

describe('RscipeStartComponent', () => {
  let component: RscipeStartComponent;
  let fixture: ComponentFixture<RscipeStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RscipeStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RscipeStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
