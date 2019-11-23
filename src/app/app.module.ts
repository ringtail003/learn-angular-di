import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SomeComponent } from './component/some/some.component';
import { SomeModule } from './module';

@NgModule({
  declarations: [
    AppComponent,
    SomeComponent
  ],
  imports: [
    BrowserModule,
    SomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
