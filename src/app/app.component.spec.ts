import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FooComponent } from './component/foo/foo.component';
import { BarComponent } from './component/bar/bar.component';
import { BazComponent } from './component/baz/baz.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        FooComponent,
        BarComponent,
        BazComponent,
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
