import { Component, OnInit } from '@angular/core';
import { GreetService } from 'src/app/services/greet.service';

@Component({
  selector: 'some',
  templateUrl: './some.component.html',
  styleUrls: ['./some.component.scss'],
  providers: [
    { provide: GreetService, useValue: { greet: () => 'by component injector.' } }
  ],
})
export class SomeComponent implements OnInit {
  message: string = null;

  constructor(
    private greetService: GreetService,
  ) { }

  ngOnInit() {
    this.message = this.greetService.greet('Angular');
  }

}
