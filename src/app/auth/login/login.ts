import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-login',
  imports: [ButtonModule,RouterModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

}
