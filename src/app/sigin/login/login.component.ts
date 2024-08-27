import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private authService: AuthService, private router: Router) { }

  signIn(userName: string, password: string): void {

    if (userName && password) {
      console.log("User name is ", userName);
      console.log("Password is ", password);
     this.authService.login(userName, password).subscribe(
       (data: any) => {
         console.log("value of the token",data);
      },
      (error: any) => {
        // this.errorMessage = 'Invalid username or password';
        console.log(error);
      }
    );
    }
  }

}
