import { ChangeDetectorRef } from '@angular/core';
import {
  MockClass,
  MockComponent,
  MockDirective,
  MockPipe,
  MockService,
} from './__mocks__';
import { classWithProviders } from './';
import MOCK_TOKEN from './__mocks__/mock.token';

describe('classWithProviders', () => {
  it('should inject mocks into a Component', () => {
    // Arrange
    const emoji = '🐦';
    const cdrMock: Partial<ChangeDetectorRef> = { detectChanges: jest.fn() };
    const serviceMock: Partial<MockService> = {
      emoji,
    };
    const component = classWithProviders({
      token: MockComponent,
      providers: [
        { provide: ChangeDetectorRef, useValue: cdrMock },
        { provide: MockService, useValue: serviceMock },
      ],
    });
    // Act
    component.ngOnInit();
    // Assert
    expect(cdrMock.detectChanges).toBeCalled();
    expect(component.emoji).toBe(emoji);
  });
  it('should inject mocks into a Directive', () => {
    // Arrange
    const tokenMock = '🦤';
    const directive = classWithProviders({
      token: MockDirective,
      providers: [{ provide: MOCK_TOKEN, useValue: tokenMock }],
    });
    // Act
    const result = directive.emoji;
    // Assert
    expect(result).toBe(tokenMock);
  });
  it('should inject mocks into a Pipe', () => {
    // Arrange
    const phrase = 'tweet tweet';
    const emoji = '🦜';
    const classMock = { emoji };
    const pipe = classWithProviders({
      token: MockPipe,
      providers: [{ provide: MockClass, useValue: classMock }],
    });
    // Act
    const result = pipe.transform(phrase);
    // Assert
    expect(result).toBe(`${emoji} says: ${phrase}`);
  });
  it('should inject mocks into a Service', () => {
    // Arrange
    const emoji = '🦅';
    const classMock = { emoji }
    const service = classWithProviders({
      token: MockService,
      providers: [{provide: MockClass, useValue: classMock}]
    })
    // Act
    const result = service.emoji;
    // Assert
    expect(result).toBe(emoji)
  })
});
