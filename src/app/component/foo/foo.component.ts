import { Component, OnInit, Self } from '@angular/core';
import { LoggerService } from 'src/app/services/logger.service';

@Component({
  selector: 'foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.scss'],
  providers: [
    { provide: LoggerService, useValue: { log: () => 'foo component logger' } }
  ],
})
export class FooComponent implements OnInit {
  message: string = null;

  constructor(
    @Self() public logger: LoggerService,
  ) { }

  ngOnInit() {
    this.message = this.logger.log();
  }

}
