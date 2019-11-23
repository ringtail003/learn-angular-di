import { Component, OnInit, Inject } from '@angular/core';import { RootService } from 'src/app/services/root.service';
import { FooService } from 'src/app/services/foo.service';
import { BarService } from 'src/app/services/bar.service';
import { BazService } from 'src/app/services/baz.service';
import { SHARED_TOKEN, SharedToken } from 'src/app/shared-token';

export class Isolate extends BazService {
  name = 'by baz';
}

@Component({
  selector: 'baz',
  templateUrl: './baz.component.html',
  styleUrls: ['./baz.component.scss'],
  providers: [
    { provide: BazService, useClass: Isolate },
  ],
})
export class BazComponent implements OnInit {

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
