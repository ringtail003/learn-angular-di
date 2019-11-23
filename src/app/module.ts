import { NgModule } from '@angular/core';
import { GreetService } from './services/greet.service';

@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    { provide: GreetService, useValue: { greet: () => 'by module injector.' } },
  ],
})
export class SomeModule { }
