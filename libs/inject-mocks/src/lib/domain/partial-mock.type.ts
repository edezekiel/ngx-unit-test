import { MethodMocked } from './mocked-method.type';

export type PartialMock<T> = Partial<jest.Mocked<T>> & MethodMocked<T>;
