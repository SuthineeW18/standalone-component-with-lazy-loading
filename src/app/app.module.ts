import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './src/app/welcome/welcome.component';
import { DetailsComponent } from './src/app/welcome/details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
