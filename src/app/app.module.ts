import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { SearchByNameFilterPipe } from './search-by-name-filter.pipe';
import { SearchByPriceFilterPipe } from './search-by-price-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SearchByNameFilterPipe,
    SearchByPriceFilterPipe,
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
