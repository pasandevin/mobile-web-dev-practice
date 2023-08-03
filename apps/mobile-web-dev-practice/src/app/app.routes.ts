import { Route } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { AdminComponent } from './pages/admin/admin.component';
import { importProvidersFrom } from '@angular/core';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

export const appRoutes: Route[] = [
    {
        path: '',
        loadComponent: () => import('./pages/login/login.component').then(c => c.LoginComponent),
        // component: LoginComponent,
        // providers: [
        //     importProvidersFrom(AngularFireAuthModule),
        // ],
    },
    {
        path: 'admin',
        loadComponent: () => import('./pages/admin/admin.component').then(c => c.AdminComponent),
    }
];
