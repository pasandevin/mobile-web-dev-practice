import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppService } from '../../../services/app/app.service';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { Store } from '@ngxs/store';
import { ShowLoading } from '../../../state/app/app.actions';

@Component({
  selector: 'mobile-web-dev-practice-admin-grn',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './admin-grn.component.html',
  styleUrls: ['./admin-grn.component.scss']
})
export class AdminGrnComponent {
  @Input({required: true}) label!: string;
  @Output() update = new EventEmitter<string>();

  constructor(private store: Store) {}
    toggle() {
      this.store.dispatch(new ShowLoading(true))
    }
}
