import { TestBed, async, ComponentFixture } from "@angular/core/testing";
import { APP_CONFIG } from './app-config';
import { Component, Inject } from '@angular/core';
import { UI_CONFIG, UiConfig } from './ui-config';

@Component({
  template: '',
  providers: [
    { provide: UI_CONFIG, useValue: { theme: 'dummy' } },
  ],
})
class DummyComponent {
  constructor(
    @Inject(UI_CONFIG) public uiConfig: UiConfig,
  ) {}
}

describe('tokens.app-config', () => {
  let component: DummyComponent;
  let fixture: ComponentFixture<DummyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DummyComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DummyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('constant value', () => {
    expect(component.uiConfig.theme).toBe('dummy');
  });
});