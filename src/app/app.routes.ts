import { Routes } from '@angular/router';
import { HomeComponent } from './user/pages/home/home.component';
import { LoginComponent } from './user/pages/auth/login/login.component';
import { SignUpComponent } from './user/pages/auth/sign-up/sign-up.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'auth/login', component: LoginComponent },
    { path: 'auth/signup', component: SignUpComponent },
    { path: '**', redirectTo: 'home' }
];
