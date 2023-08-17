import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppService } from '../../../services/app/app.service';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { Store } from '@ngxs/store';
import { ShowLoading } from '../../../state/app/app.actions';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { MatCardModule } from '@angular/material/card';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Firestore, addDoc, collection, collectionData } from '@angular/fire/firestore';

interface User {
  name: string;
  email: string;
}

interface GRN {
  date: Date;
  customer: {
    name: string;
    phone: string;
  }
}

@Component({
  selector: 'mobile-web-dev-practice-admin-grn',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule, 
    MatCardModule,
    ReactiveFormsModule, 
    MatDatepickerModule, 
    MatFormFieldModule,
    MatInputModule,
    ],
  templateUrl: './admin-grn.component.html',
  styleUrls: ['./admin-grn.component.scss']
})
export class AdminGrnComponent {
  @Input({required: true}) label!: string;
  @Output() update = new EventEmitter<string>();
  firestore: Firestore = inject(Firestore);

  grns$: Observable<GRN[]>;

  dateCtrl = new FormControl();

  nameCtrl = new FormControl();
  phoneCtrl = new FormControl();
  customerCtrl = new FormGroup({
    name: this.nameCtrl,
    phone: this.phoneCtrl
  });

  grnFormGroup = new FormGroup({
    date: this.dateCtrl,
    customer: this.customerCtrl,
  });

  grnCollection = collection(this.firestore, 'grns');

  async onSave() {
    const date = new Date(this.dateCtrl.value);

    const toSave = {
      ...this.grnFormGroup.value,
      date,
    };
    await addDoc(this.grnCollection, toSave);
  }

  constructor() {
    this.grns$ = collectionData(this.grnCollection) as Observable<any>;
  }

  // users$: Observable<User[]>;

  // constructor(private store: Store, private httpClient: HttpClient) {
  //   this.users$ = this.httpClient.get<User[]>(
  //     'https://jsonplaceholder.typicode.com/users'
  //   )
  //   // .pipe(
  //   //   tap( (users) => console.log(users))
  //   // )
  //   // .subscribe();
  // }

  // toggle() {
  //     this.store.dispatch(new ShowLoading(true))
  //   }
}
