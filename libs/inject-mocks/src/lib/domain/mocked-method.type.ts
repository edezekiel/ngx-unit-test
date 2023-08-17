import { Callable } from './callable.type';

export type MethodMocked<T> = {
  [K in keyof T]: T[K] extends Callable
    ? jest.MockedFunction<T[K]>
    : never;
};