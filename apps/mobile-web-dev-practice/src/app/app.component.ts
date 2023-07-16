import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterModule, CommonModule],
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
}
