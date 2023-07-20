import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule} from '@angular/material/input';
import { MatButtonModule} from '@angular/material/button';
import { Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'mobile-web-dev-practice-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatInputModule, MatButtonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  emailCtrl = new FormControl('pasan@gmail', [Validators.required, Validators.email]);

  loginFormGroup = new FormGroup({
    email: this.emailCtrl,
    password: new FormControl('dfdsfdsfsdfsfd', [Validators.required, Validators.minLength(8)])
  });

  constructor(private router:Router) {}

  onLogin() {
    console.log(this.loginFormGroup.value);
    this.router.navigate(['/admin']);
  }
}
