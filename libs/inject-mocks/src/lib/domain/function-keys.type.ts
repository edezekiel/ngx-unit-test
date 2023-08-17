import { Callable } from './callable.type';

export type FunctionKeys<T> = {
  [K in keyof T]: T[K] extends Callable ? K : never;
}[keyof T];