import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { JsonParsePipe } from './json-custom.pipe';
import { SelectComponent } from './select/select.component';
import { WithLoadingPipe } from './with-loading.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SelectComponent,
    WithLoadingPipe,
    JsonParsePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
