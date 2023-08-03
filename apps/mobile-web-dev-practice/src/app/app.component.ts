import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppService } from './services/app/app.service';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatToolbarModule} from '@Angular/material/toolbar'
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AppState } from './state/app/app.state';

@Component({
  standalone: true,
  imports: [
    RouterModule, 
    CommonModule,
     MatProgressBarModule,
      MatToolbarModule
    ],
  selector: 'mobile-web-dev-practice-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'mobile-web-dev-practice';
  name = 'John Doe';
  frameworks = ['Angular', 'React', 'Vue'];

  onClick() {
    this.name = 'Jane Doe';
  }

  // constructor(protected appService: AppService) {}
  email$:Observable<string | undefined | null>
  loading$:Observable<boolean>

  constructor(private store:Store) {
    this.email$ = this.store.select(AppState.email);
    this.loading$ = this.store.select(AppState.loading);
    // this.email$.subscribe(email => {
    //   console.log(email);
    // });
  }
}
