import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { createCustomer } from '@store/personal.actions';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {
  private store = inject(Store);
  constructor() {
  }
  
  submitted: boolean = false;
  personalDetailsForm: any;
  showToastMessage: boolean = false;

  ngOnInit(): void {
    this.personalDetailsForm = new FormGroup({
      gender: new FormControl('', Validators.required),
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      dateOfBirth: new FormGroup({
        day: new FormControl('', [Validators.required, Validators.min(1), Validators.max(31)]),
        month: new FormControl('', Validators.required),
        year: new FormControl('', [Validators.required, Validators.min(1900), Validators.max(new Date().getFullYear())]),
      }),
      nationality: new FormControl('', Validators.required)
    })
  }

  displayPopUpMessage() {
    this.showToastMessage = true;
    setTimeout(() => {
      this.showToastMessage = false;
    }, 10000);
  }

  onSubmit() {
    this.submitted = true;
    if (this.personalDetailsForm.valid) {
      const customer = this.personalDetailsForm.value;
      this.store.dispatch(createCustomer({ data: customer }));
    } else {
      this.displayPopUpMessage();
    }
  }
};
