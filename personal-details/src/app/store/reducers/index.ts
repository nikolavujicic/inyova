import { isDevMode } from '@angular/core';
import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { personalReducer } from '@store/reducers/personal.reducer';

export interface State {

}

export const reducers: ActionReducerMap<State> = {
  personal: personalReducer
};


export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
