import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

// the second parameter 'fr' is optional
registerLocaleData(localeFr, 'fr');

import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './login/login.module';
import { PageNotFoundModule } from './page-not-found/page-not-found.module';
import { UiModule } from './ui/ui.module';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.firebase';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UiModule,
    NgbModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AppRoutingModule,
    LoginModule,
    PageNotFoundModule,
    HttpClientModule
  ],
  providers: [ { provide: LOCALE_ID, useValue: 'fr' }],
  bootstrap: [AppComponent]
})
export class AppModule {
  // Diagnostic only: inspect router configuration
  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
 }
