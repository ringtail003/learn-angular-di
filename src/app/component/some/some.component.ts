import { Component, OnInit, Inject } from '@angular/core';
import { APP_CONFIG, AppConfig } from 'src/app/tokens/app-config';

@Component({
  selector: 'some',
  templateUrl: './some.component.html',
  styleUrls: ['./some.component.scss']
})
export class SomeComponent implements OnInit {
  title: string = null;

  constructor(
    @Inject(APP_CONFIG) appConfig: AppConfig,
  ) {
    this.title = appConfig.title;
  }

  ngOnInit() {
  }

}
