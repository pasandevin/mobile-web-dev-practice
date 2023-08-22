import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule} from '@angular/material/input';
import { MatButtonModule} from '@angular/material/button';
import { Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Auth } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Store } from '@ngxs/store';
import { Login, UpdateUser } from '../../state/app/app.actions';
import { catchError, from, tap, throwError } from 'rxjs';
import { AuthService } from '../../services/auth/auth.service';


@Component({
  selector: 'mobile-web-dev-practice-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatInputModule, MatButtonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  // private auth: Auth = inject(Auth);
  private angularFireAuth: AngularFireAuth = inject(AngularFireAuth);

  emailCtrl = new FormControl('pasan@gmail.com', [Validators.required, Validators.email]);

  loginFormGroup = new FormGroup({
    username: this.emailCtrl,
    // email: new FormControl('pasan@gmail.com', [Validators.required, Validators.email]),
    password: new FormControl('dfdsfdsfsdfsfd', [Validators.required, Validators.minLength(8)])
  });

  constructor(private router:Router, private store: Store, private authService: AuthService) {}

  // onLogin() {
  //   console.log(this.loginFormGroup.value);
  //   const password = this.loginFormGroup.get('password')?.value;
  //   const email = this.loginFormGroup.get('email')?.value;
  //   const authPromise = this.angularFireAuth
  //   .signInWithEmailAndPassword( this.emailCtrl.value!, password!);
  //   from(authPromise)
  //   .pipe(
  //     tap( (credential) => {
  //       if(credential.user)
  //         this.store.dispatch(new UpdateUser(credential.user));
  //     }),
  //     tap ( () => this.router.navigate(['/admin'])),
  //     catchError( (err) => {
  //       console.log(err);
  //       return throwError(() => err);
  //     })
  //   )
  //   .subscribe();

    // .then( (c) => {
    //   if (c.user) {
    //     this.store.dispatch(new updateUser(c.user));
    //   }   
    //   this.router.navigate(['/admin'])
    // }
    // );
    // this.angularFireAuth.signInWithEmailAndPassword(email!, password!);
    // this.router.navigate(['/admin']);
  // }
  onLogin() {
    const value = this.loginFormGroup.value;
    this.store.dispatch(new Login(value.username, value.password));
  }
}
