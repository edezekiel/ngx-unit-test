import { FunctionKeys, MockBuilderConfig, PartialMock } from '../domain';
import { NonFunctionProperties } from '../domain/non-function-properties.type';

export class MockBuilder<T extends Record<string, any>> {
  private mock: PartialMock<T> = {} as PartialMock<T>;

  constructor(config: MockBuilderConfig = { autoMockFunctions: true }) {
    if (config.autoMockFunctions) {
      this.withMethods();
    }
  }

  withMethod<K extends FunctionKeys<T>>(
    key: K,
    mockFn: jest.MockedFunction<T[K]>
  ): this {
    this.mock[key] = mockFn;
    return this;
  }

  withMethods(): this {
    const keys: Array<keyof T> = Object.keys(this.mock);
    for (const key of keys) {
      if (typeof this.mock[key] === 'function') {
        this.mock[key] = jest.fn() as jest.MockedFunction<any>;
      }
    }
    return this;
  }

  withProperty<K extends NonFunctionProperties<T>>(name: K, value: T[K]): this {
    this.mock[name] = value;
    return this;
  }

  build(): PartialMock<T> {
    return this.mock;
  }
}
