import { ApplicationConfig, importProvidersFrom, isDevMode } from '@angular/core';
import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
} from '@angular/router';
import { appRoutes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { NgxsModule } from '@ngxs/store';
import { AppState } from './state/app/app.state';
import { provideServiceWorker } from '@angular/service-worker';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { BaseUrlInterceptorService } from './services/_interceptors/base-url-interceptor/base-url-interceptor/base-url-interceptor.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes, withEnabledBlockingInitialNavigation()),
    provideAnimations(),
    importProvidersFrom(NgxsModule.forRoot([AppState], {
        developmentMode: true,
    })),
    importProvidersFrom(
      AngularFireModule.initializeApp({
        apiKey: "AIzaSyAv3RwdZqqoe4s76RjK3hzaoAexnIdGqeM",
        authDomain: "mobile-web-dev-d14c5.firebaseapp.com",
        projectId: "mobile-web-dev-d14c5",
        storageBucket: "mobile-web-dev-d14c5.appspot.com",
        messagingSenderId: "178370798269",
        appId: "1:178370798269:web:d385dcdf4176a715210dd4"
      }),
    ),
    importProvidersFrom(
      provideFirebaseApp(() =>
        initializeApp({
          apiKey: "AIzaSyAv3RwdZqqoe4s76RjK3hzaoAexnIdGqeM",
          authDomain: "mobile-web-dev-d14c5.firebaseapp.com",
          projectId: "mobile-web-dev-d14c5",
          storageBucket: "mobile-web-dev-d14c5.appspot.com",
          messagingSenderId: "178370798269",
          appId: "1:178370798269:web:d385dcdf4176a715210dd4"
        })
      )
    ),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BaseUrlInterceptorService,
      multi: true,
    },
    importProvidersFrom(provideFirestore(() => getFirestore())),
    importProvidersFrom(HttpClientModule),
    importProvidersFrom(MatMomentDateModule),
    provideServiceWorker('ngsw-worker.js', {
        enabled: !isDevMode(),
        registrationStrategy: 'registerWhenStable:30000'
    }),
],
};
