import {
  createEnvironmentInjector,
  EnvironmentInjector,
  Injector,
  Provider,
  runInInjectionContext,
} from '@angular/core';

export const runFnInContext = <T>(providers: Provider[], fn: () => T) => {
  const injector = createEnvironmentInjector(
    providers,
    Injector.create({ providers: [] }) as EnvironmentInjector
  );
  return runInInjectionContext<T>(injector, fn);
};
