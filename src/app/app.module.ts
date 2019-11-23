import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FooComponent } from './components/foo/foo.component';
import { BarComponent } from './components/bar/bar.component';
import { BazComponent } from './components/baz/baz.component';

@NgModule({
  declarations: [
    AppComponent,
    FooComponent,
    BarComponent,
    BazComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
