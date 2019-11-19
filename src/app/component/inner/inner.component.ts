import { Component, OnInit } from '@angular/core';
import { NameService } from 'src/app/name.service';

@Component({
  selector: 'inner',
  templateUrl: './inner.component.html',
  styleUrls: ['./inner.component.scss']
})
export class InnerComponent implements OnInit {

  constructor(
    public nameService: NameService,
  ) {}

  ngOnInit() {
  }

}
