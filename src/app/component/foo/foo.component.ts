import { Component, OnInit } from '@angular/core';
import { LoggerService } from 'src/app/services/logger.service';

@Component({
  selector: 'foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.scss']
})
export class FooComponent implements OnInit {
  message: string = null;

  constructor(
    private logger: LoggerService,
  ) { }

  ngOnInit() {
    this.message = this.logger.log();
  }

}
