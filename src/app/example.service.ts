import { Inject, Injectable } from '@angular/core';

// ok
// import { EXAMPLE_TOKEN, type ExampleDependency } from './example.dependency';

// error
import { EXAMPLE_TOKEN } from './example.dependency';
import type { ExampleDependency } from './example.dependency';

@Injectable({ providedIn: 'root' })
export class ExampleService {
  public constructor(
    @Inject(EXAMPLE_TOKEN) private readonly _dependency: ExampleDependency
  ) {}

  public foo(): number {
    return this._dependency.foo();
  }
}
