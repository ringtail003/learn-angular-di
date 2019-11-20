import { Component, OnInit, Optional } from '@angular/core';
import { LoggerService } from 'src/app/services/logger.service';
import { UnknownLogger } from 'src/app/services/unknown-logger';

@Component({
  selector: 'foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.scss']
})
export class FooComponent implements OnInit {
  message: string = null;

  constructor(
    @Optional() public logger: UnknownLogger,
  ) { }

  ngOnInit() {
    if (!this.logger) {
      return;
    };

    this.message = this.logger.log();
  }

}
