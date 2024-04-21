import { createAction, props } from "@ngrx/store";

export const loadPersonalDetails = createAction('[Detail Component] Load Personal Details');
export const loadPersonalDetailsSuccess = createAction(
  '[Detail Component] Load Personal Details Success',
  props<{ details: any }>()
);
export const loadPersonalDetailsFailure = createAction(
  '[Detail Component] Load Personal Details Failure',
  props<{ error: any }>()
);

export const createCustomer = createAction('[Detail Component] Create Customer', props<{ data: any }>());
export const createCustomerSuccess = createAction('[Detail Component] Create Customer Success', props<{ response: any }>());
export const createCustomerFailure = createAction('[Detail Component] Create Customer Failure', props<{ error: any }>());
