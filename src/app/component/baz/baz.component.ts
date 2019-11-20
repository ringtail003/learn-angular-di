import { Component, OnInit } from '@angular/core';
import { LoggerService } from 'src/app/services/logger.service';

@Component({
  selector: 'baz',
  templateUrl: './baz.component.html',
  styleUrls: ['./baz.component.scss']
})
export class BazComponent implements OnInit {
  message: string = null;

  constructor(
    private logger: LoggerService,
  ) { }

  ngOnInit() {
    this.message = this.logger.log();
  }

}
