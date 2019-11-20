import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooComponent } from './component/foo/foo.component';
import { BarComponent } from './component/bar/bar.component';
import { BazComponent } from './component/baz/baz.component';

@NgModule({
  declarations: [
    AppComponent,
    FooComponent,
    BarComponent,
    BazComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
