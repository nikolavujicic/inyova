import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { CustomersService } from '@components/customers/customers.service';
import { createCustomer, createCustomerFailure, createCustomerSuccess, loadPersonalDetails, loadPersonalDetailsFailure, loadPersonalDetailsSuccess } from '@store/personal.actions';


@Injectable()
export class PersonalEffects {
    constructor(
        private actions$: Actions,
        private customersService: CustomersService,
        private router: Router
    ) { }

    loadPersonalDetails$ = createEffect(() => this.actions$.pipe(
        ofType(loadPersonalDetails),
        mergeMap(() =>
            this.customersService.getCustomers('http://localhost:3000/customers').pipe(
                map(details => {
                    console.log(details)
                    return loadPersonalDetailsSuccess({ details })
                }),
                catchError(error => of(loadPersonalDetailsFailure({ error })))
            )
        )
    ));

    createCustomer$ = createEffect(() => this.actions$.pipe(
        ofType(createCustomer),
        mergeMap(action =>
            this.customersService.addCustomer(`http://localhost:3000/customer`, action.data).pipe(
                map(response => {
                    this.router.navigate(['/list']);
                    return createCustomerSuccess({ response })
                }),
                catchError(error => of(createCustomerFailure({ error })))
            )
        )
    ));
}
