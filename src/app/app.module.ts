import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LoginModule } from './login/login.module';
import { PageNotFoundModule } from './page-not-found/page-not-found.module';
import { UiModule } from './ui/ui.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UiModule,
    PageNotFoundModule,
    LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
