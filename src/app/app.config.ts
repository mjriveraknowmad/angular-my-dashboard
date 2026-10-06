import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withViewTransitions({
        skipInitialTransition: true,
        // onViewTransitionCreated( transitionInfo ) {
        //   console.log({transitionInfo});
        // },
      }),
    ),

    // Ahora se harías con
    //  provideHttpClient(/* añadir features aquí, como por ejemplo withInterceptors(...) */)
    // lo siguiente sería un ejemplo de cómo importar el HttpClientModule, pero no es la forma recomendada actualmente.
    importProvidersFrom(
      HttpClientModule,
    )

  ]
};

