import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BazComponent } from './baz.component';

describe('BazComponent', () => {
  let component: BazComponent;
  let fixture: ComponentFixture<BazComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BazComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BazComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
