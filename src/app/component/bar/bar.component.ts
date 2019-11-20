import { Component, OnInit } from '@angular/core';
import { LoggerService } from 'src/app/services/logger.service';

@Component({
  selector: 'bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss']
})
export class BarComponent implements OnInit {
  message: string = null;

  constructor(
    private logger: LoggerService,
  ) { }

  ngOnInit() {
    this.message = this.logger.log();
  }

}
