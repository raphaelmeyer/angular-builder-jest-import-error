import { InjectionToken } from '@angular/core';

export interface ExampleDependency {
  foo: () => number;
}

export const EXAMPLE_TOKEN = new InjectionToken<ExampleDependency>('example.token');
