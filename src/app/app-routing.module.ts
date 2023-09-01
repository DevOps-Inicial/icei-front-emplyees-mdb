import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ListEmployeeComponent } from './pages/employees/list-employee/list-employee.component';
import { DetailEmployeeComponent } from './pages/employees/detail-employee/detail-employee.component';
import { CreateEmployeeComponent } from './pages/employees/create-employee/create-employee.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  { path: 'home', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'employee-list', component: ListEmployeeComponent },
  { path: 'employee-details/:id', component: DetailEmployeeComponent },
  { path: 'employee-create', component: CreateEmployeeComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
