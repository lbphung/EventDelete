import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DeleteEventBindingComponent } from './delete-event-binding/delete-event-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    DeleteEventBindingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
