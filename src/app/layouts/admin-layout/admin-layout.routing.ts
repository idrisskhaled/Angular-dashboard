import { Routes } from '@angular/router';
import { LoginComponent } from 'app/login/login.component';
import { RegisterComponent } from 'app/register/register.component';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { TableListComponent } from '../../table-list/table-list.component';


export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'login', component: LoginComponent},
    { path : 'register', component: RegisterComponent}
];
