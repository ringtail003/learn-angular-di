import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FooComponent } from './components/foo/foo.component';
import { BarComponent } from './components/bar/bar.component';
import { BazComponent } from './components/baz/baz.component';
import { FormsModule } from '@angular/forms';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        FooComponent,
        BarComponent,
        BazComponent,
      ],
      imports: [
        FormsModule,
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
