import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideToastr } from 'ngx-toastr';
import { provideStore } from '@ngrx/store';
import { reducers, metaReducers } from '@store/reducers';
import { PersonalEffects } from '@store/effects/personal.effects';
import { provideEffects } from '@ngrx/effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideToastr(),
    provideStore(reducers, { metaReducers }),
    provideEffects([PersonalEffects])
    ]
};
