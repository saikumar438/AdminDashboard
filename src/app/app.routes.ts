import { Routes } from '@angular/router';
import { DashboardComponent } from './dash/dashboard/dashboard.component';
import { LoginComponent } from './sigin/login/login.component';

export const routes: Routes = [
    { path: 'example', component: DashboardComponent},
    { path: 'signin', component: LoginComponent},
];