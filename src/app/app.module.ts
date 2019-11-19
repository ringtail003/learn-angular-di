import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OuterComponent } from './component/outer/outer.component';
import { InnerComponent } from './component/inner/inner.component';

@NgModule({
  declarations: [
    AppComponent,
    OuterComponent,
    InnerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
