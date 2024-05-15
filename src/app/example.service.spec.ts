import { TestBed } from '@angular/core/testing';

import { ExampleService } from './example.service';
import { EXAMPLE_TOKEN, type ExampleDependency } from './example.dependency';

describe('Service', () => {
  const fake: ExampleDependency = {
    foo: () => 42,
  };

  it('should do something', () => {
    TestBed.configureTestingModule({
      providers: [ExampleService, { provide: EXAMPLE_TOKEN, useValue: fake }],
    });

    const service = TestBed.inject(ExampleService);
    expect(service.foo()).toStrictEqual(42);
  });
});
