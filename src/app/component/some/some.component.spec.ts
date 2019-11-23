import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SomeComponent } from './some.component';
import { GreetService } from 'src/app/services/greet.service';
import { SomeModule } from 'src/app/module';

describe('SomeComponent', () => {
  let component: SomeComponent;
  let fixture: ComponentFixture<SomeComponent>;
  let spy: jasmine.Spy = jasmine.createSpy();

  beforeEach(async(() => {
    spy.and.returnValue('hello');

    TestBed.configureTestingModule({
      declarations: [ SomeComponent ],
      imports: [ SomeModule ],
      providers: [
        { provide: GreetService, useValue: { greet: spy } }
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('say hello', () => {
    expect(component.message).toBe('hello');
  });
});
