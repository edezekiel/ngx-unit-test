import {
  createEnvironmentInjector,
  EnvironmentInjector,
  Injector,
  Provider,
} from '@angular/core';

export const runInContext = (providers: Provider[]) => {
  const injector = createEnvironmentInjector(
    providers,
    Injector.create({ providers: [] }) as EnvironmentInjector
  );
  return injector.runInContext.bind(injector);
};
