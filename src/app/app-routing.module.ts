import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { AddTaskComponent } from './component/add-task/add-task.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { SettingComponent } from './component/setting/setting.component';
import { AuthenGuard } from './guards/authen.guard';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent,canActivate: [AuthenGuard],runGuardsAndResolvers: 'always'},
  { path: 'add-task', component: AddTaskComponent ,canActivate: [AuthenGuard],runGuardsAndResolvers: 'always'},
  { path: 'setting', component: SettingComponent ,canActivate: [AuthenGuard],runGuardsAndResolvers: 'always'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
