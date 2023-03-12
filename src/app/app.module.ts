import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { TwowayComponent } from './twoway/twoway.component';
import {FormsModule} from '@angular/forms';
import { SecondComponentComponent } from './second-component/second-component.component';
import { SignInCheckComponent } from './sign-in-check/sign-in-check.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    TwowayComponent,
    SecondComponentComponent,
    SignInCheckComponent,

],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
