import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { OuterComponent } from './component/outer/outer.component';
import { InnerComponent } from './component/inner/inner.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        OuterComponent,
        InnerComponent,
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
