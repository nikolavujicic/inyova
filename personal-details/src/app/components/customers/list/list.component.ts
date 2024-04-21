import { Component, SimpleChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadPersonalDetails } from '@store/personal.actions';
import { selectPersonalData, selectPersonalError, selectPersonalLoading } from '@store/personal.selectors';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { ConcatDatePipe } from '@app/pipes/concat-date.pipe';
import {Customer} from '@src/types'

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, MatTableModule, ConcatDatePipe],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  displayedColumns: string[] = ['gender', 'firstName', 'lastName', 'dateOfBirth', 'nationality'];

  data$: Observable<Customer[]>;
  loading$: Observable<boolean>;
  error$: Observable<any>;

  constructor(private store: Store) {
    this.data$ = store.select(selectPersonalData);
    this.loading$ = store.select(selectPersonalLoading);
    this.error$ = store.select(selectPersonalError);
  }

  ngOnInit() {
    this.store.dispatch(loadPersonalDetails());
  }

}
