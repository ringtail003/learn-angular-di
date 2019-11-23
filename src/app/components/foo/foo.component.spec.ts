import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooComponent } from './foo.component';
import { BarComponent } from '../bar/bar.component';
import { BazComponent } from '../baz/baz.component';
import { FormsModule } from '@angular/forms';

describe('FooComponent', () => {
  let component: FooComponent;
  let fixture: ComponentFixture<FooComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FooComponent,
        BarComponent,
        BazComponent,
      ],
      imports: [
        FormsModule,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
