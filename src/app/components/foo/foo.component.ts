import { Component, OnInit, Inject } from '@angular/core';
import { RootService } from 'src/app/services/root.service';
import { BarService } from 'src/app/services/bar.service';
import { BazService } from 'src/app/services/baz.service';
import { FooService } from 'src/app/services/foo.service';
import { SHARED_TOKEN, SharedToken } from 'src/app/shared-token';

export class Isolate extends FooService {
  name = 'by foo';
}

@Component({
  selector: 'foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.scss'],
  providers: [
    { provide: FooService, useClass: Isolate },
  ],
})
export class FooComponent implements OnInit {

  constructor(
    public root: RootService,
    public foo: FooService,
    public bar: BarService,
    public baz: BazService,
    @Inject(SHARED_TOKEN) public shared: SharedToken,
  ) {}

  ngOnInit() {
  }

}
