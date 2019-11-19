import { Component, OnInit } from '@angular/core';
import { NameService } from 'src/app/name.service';

@Component({
  selector: 'outer',
  templateUrl: './outer.component.html',
  styleUrls: ['./outer.component.scss'],
  // providers: [
  //   { provide: NameService, useValue: { name: 'my name is outer.' } },
  // ],
  viewProviders: [
    { provide: NameService, useValue: { name: 'my name is outer.' } },
  ],
})
export class OuterComponent implements OnInit {

  constructor(
    public nameService: NameService,
  ) {}

  ngOnInit() {
  }

}
