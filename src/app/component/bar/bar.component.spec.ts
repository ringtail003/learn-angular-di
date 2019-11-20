import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarComponent } from './bar.component';
import { BazComponent } from '../baz/baz.component';

describe('BarComponent', () => {
  let component: BarComponent;
  let fixture: ComponentFixture<BarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BarComponent,
        BazComponent,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
