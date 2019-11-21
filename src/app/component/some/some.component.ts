import { Component, OnInit, Inject } from '@angular/core';
import { APP_CONFIG, AppConfig } from 'src/app/tokens/app-config';
import { UI_CONFIG, UiConfig } from 'src/app/tokens/ui-config';

@Component({
  selector: 'some',
  templateUrl: './some.component.html',
  styleUrls: ['./some.component.scss'],
  providers: [
    { provide: UI_CONFIG, useValue: { theme: 'dark' } },
  ],
})
export class SomeComponent implements OnInit {
  title: string = null;
  theme: string = null;

  constructor(
    @Inject(APP_CONFIG) appConfig: AppConfig,
    @Inject(UI_CONFIG) uiConfig: UiConfig,
  ) {
    this.title = appConfig.title;
    this.theme = uiConfig.theme;
  }

  ngOnInit() {
  }

}
