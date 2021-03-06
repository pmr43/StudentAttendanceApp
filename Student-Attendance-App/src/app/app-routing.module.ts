import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthguardGuard } from './authguard.gurad';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { CreatebatchComponent } from './createbatch/createbatch.component';


const routes: Routes = [{ path: '', component: LoginComponent },
{ path: 'login', component: LoginComponent },
{ path: 'home', component: HomeComponent },
{ path: 'createbatch', component: CreatebatchComponent },
{ path: 'registration', component: RegisterComponent },
{path:  'forgotpass',component:ForgotpasswordComponent},
{ path: 'dashboard', component: DashboardComponent,canActivate: [AuthguardGuard] }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
