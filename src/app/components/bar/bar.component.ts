import { Component, OnInit, Inject } from '@angular/core';
import { RootService } from 'src/app/services/root.service';
import { FooService } from 'src/app/services/foo.service';
import { BarService } from 'src/app/services/bar.service';
import { SHARED_TOKEN, SharedToken } from 'src/app/shared-token';
import { BazService } from 'src/app/services/baz.service';

export class Isolate extends BarService {
  name = 'by bar';
}

@Component({
  selector: 'bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss'],
  providers: [
    { provide: BarService, useClass: Isolate },
  ],
})
export class BarComponent implements OnInit {

  constructor(
    public root: RootService,
    public foo: FooService,
    public bar: BarService,
    public baz: BazService,
    @Inject(SHARED_TOKEN) public shared: SharedToken,
  ) { }

  ngOnInit() {
  }

}
