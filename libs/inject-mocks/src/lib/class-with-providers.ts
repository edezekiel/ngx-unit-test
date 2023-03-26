import { Injector, StaticProvider, Type } from '@angular/core';

export const classWithProviders = <T>(config: {
  token: Type<T>;
  providers: StaticProvider[];
}): T => {
  const { providers, token } = config;
  const injector = Injector.create({
    providers: [...providers, { provide: token }],
  });
  return injector.get(token);
};
