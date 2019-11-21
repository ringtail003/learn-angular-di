import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SomeComponent } from './some.component';
import { APP_CONFIG } from 'src/app/tokens/app-config';
import { By } from '@angular/platform-browser';
import { UI_CONFIG } from 'src/app/tokens/ui-config';

describe('SomeComponent', () => {
  let component: SomeComponent;
  let fixture: ComponentFixture<SomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SomeComponent ],
      providers: [
        { provide: APP_CONFIG, useValue: { title: 'my app' } },
      ],
    })
    .overrideProvider(UI_CONFIG, { useValue: { theme: 'light' } })
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

  it('application title', () => {
    expect(component.title).toBe('my app');
  });

  it('default theme is light', () => {
    expect(component.theme).toBe('light');
  });
});
