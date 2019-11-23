import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BazComponent } from './baz.component';
import { FormsModule } from '@angular/forms';

describe('BazComponent', () => {
  let component: BazComponent;
  let fixture: ComponentFixture<BazComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BazComponent ],
      imports: [
        FormsModule,
      ],
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
