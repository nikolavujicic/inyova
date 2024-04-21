import { createReducer, on } from "@ngrx/store";
import { loadPersonalDetails, loadPersonalDetailsSuccess, loadPersonalDetailsFailure, createCustomer, createCustomerSuccess, createCustomerFailure } from "@store/personal.actions";

export const initialState = {
  data: null,
  loading: false,
  error: null
};

export const personalReducer = createReducer(
  initialState,
  on(loadPersonalDetails, state => ({ ...state, loading: true, error: null })),
  on(loadPersonalDetailsSuccess, (state, { details }) => ({ ...state, data: details, loading: false })),
  on(loadPersonalDetailsFailure, (state, { error }) => ({ ...state, loading: false, error })),
  on(createCustomer, state => ({ ...state, loading: true })),
  on(createCustomerFailure, (state, { error }) => ({ ...state, loading: false, error }))
);
