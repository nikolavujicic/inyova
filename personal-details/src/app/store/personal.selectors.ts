import { createSelector, createFeatureSelector } from '@ngrx/store';

export interface PersonalState {
  data: any;
  loading: boolean;
  error: any;
}

export const selectPersonalFeature = createFeatureSelector<PersonalState>('personal');

export const selectPersonalData = createSelector(
  selectPersonalFeature,
  (state: PersonalState) => state.data
);

export const selectPersonalLoading = createSelector(
  selectPersonalFeature,
  (state: PersonalState) => state.loading
);

export const selectPersonalError = createSelector(
  selectPersonalFeature,
  (state: PersonalState) => state.error
);
