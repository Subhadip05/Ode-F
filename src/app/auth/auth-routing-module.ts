import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Login } from './login/login';
import { ForgetPassword } from './forget-password/forget-password';
import { ResetPassword } from './reset-password/reset-password';

const routes: Routes = [
  {
    path: '',
    component: Login
  },

  {
    path: 'forget-password',
    component: ForgetPassword
  },

  {
    path: 'reset-password',
    component: ResetPassword
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
