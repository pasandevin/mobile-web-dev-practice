import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule} from '@angular/material/input';
import { MatButtonModule} from '@angular/material/button';
import { Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'mobile-web-dev-practice-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatInputModule, MatButtonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  formGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private router:Router) {}

  onLogin() {
    console.log(this.formGroup.value);
    this.router.navigate(['/admin']);
  }
}
